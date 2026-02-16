import { z } from 'zod'
import { NextResponse, type NextRequest } from 'next/server'
import { hasValidSupabaseSession } from '@/src/lib/auth-session'
import { type ApiResult } from '@/src/lib/api-result'
import { DataSourceError, isDataSourceError } from '@/src/lib/data/errors'
import { supabaseAdminRequest } from '@/src/lib/data/supabase-admin'
import { updateAlunoSchema } from '@/src/lib/schemas/tcc'
import { logApiMetric } from '@/src/lib/telemetry'
import { resolveTenantFromRequest } from '@/src/lib/tenant-service'

const idOnlyListSchema = z.array(z.object({ id: z.number().int().positive() }))

function parseId(params: { id: string }): number {
  const id = Number.parseInt(params.id, 10)
  if (!Number.isInteger(id) || id <= 0) {
    throw new DataSourceError('SUPABASE_PAYLOAD', 'ID de aluno invalido.')
  }
  return id
}

function asErrorMessage(error: unknown): string {
  if (isDataSourceError(error)) {
    return error.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Erro interno ao atualizar aluno.'
}

async function resolveLookupId(table: string, nome: string): Promise<number> {
  const sanitizedName = nome.trim()
  const encodedName = encodeURIComponent(sanitizedName)

  const existing = await supabaseAdminRequest({
    resourcePath: `${table}?select=id&nome=eq.${encodedName}&limit=1`,
    schema: idOnlyListSchema,
  })

  if (existing[0]?.id) {
    return existing[0].id
  }

  const created = await supabaseAdminRequest({
    method: 'POST',
    resourcePath: `${table}?select=id`,
    body: [{ nome: sanitizedName }],
    schema: idOnlyListSchema,
    prefer: 'return=representation',
  })

  if (!created[0]?.id) {
    throw new DataSourceError(
      'SUPABASE_PAYLOAD',
      `Falha ao criar item em ${table}`
    )
  }

  return created[0].id
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const tenant = resolveTenantFromRequest(request)

  if (tenant?.id !== 'admin') {
    return NextResponse.json(
      { error: 'Operacao permitida apenas no tenant admin.' },
      { status: 403 }
    )
  }

  if (!(await hasValidSupabaseSession(request))) {
    return NextResponse.json({ error: 'Nao autorizado.' }, { status: 401 })
  }

  try {
    const resolvedParams = await params
    const alunoId = parseId(resolvedParams)
    const rows = await supabaseAdminRequest({
      resourcePath: `aluno?select=*,aluno_funcao(funcao(nome)),aluno_especializacao(especializacao(nome)),aluno_habilidade(habilidade(nome)),conquista(nome)&id=eq.${alunoId}&limit=1`,
      schema: z.array(z.any()),
    })

    const aluno = rows[0]
    if (!aluno) {
      return NextResponse.json(
        { error: 'Aluno nao encontrado.' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      ...aluno,
      funcoes:
        aluno.aluno_funcao
          ?.map((item: any) => item.funcao?.nome)
          .filter(Boolean) || [],
      especializacoes:
        aluno.aluno_especializacao
          ?.map((item: any) => item.especializacao?.nome)
          .filter(Boolean) || [],
      habilidades:
        aluno.aluno_habilidade
          ?.map((item: any) => item.habilidade?.nome)
          .filter(Boolean) || [],
      conquistas:
        aluno.conquista
          ?.map((item: any) => item.nome)
          .filter(Boolean) || [],
    })
  } catch (error) {
    console.error('GET /api/admin/alunos/[id] error:', error)
    return NextResponse.json(
      { error: asErrorMessage(error) },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<ApiResult<{ id: number }>>> {
  const startedAt = Date.now()
  const tenant = resolveTenantFromRequest(request)

  if (tenant?.id !== 'admin') {
    return NextResponse.json(
      { success: false, error: 'Operacao permitida apenas no tenant admin.' },
      { status: 403 }
    )
  }

  if (!(await hasValidSupabaseSession(request))) {
    logApiMetric({
      endpoint: '/api/admin/alunos/[id]',
      method: 'PATCH',
      status: 401,
      durationMs: Date.now() - startedAt,
      ok: false,
      error: 'Unauthorized',
    })

    return NextResponse.json(
      { success: false, error: 'Nao autorizado.' },
      { status: 401 }
    )
  }

  try {
    const resolvedParams = await params
    const alunoId = parseId(resolvedParams)
    const body = (await request.json()) as unknown
    const parsedInput = updateAlunoSchema.safeParse(body)

    if (!parsedInput.success) {
      const message =
        parsedInput.error.issues[0]?.message ||
        'Payload invalido para atualizacao de aluno.'
      logApiMetric({
        endpoint: '/api/admin/alunos/[id]',
        method: 'PATCH',
        status: 400,
        durationMs: Date.now() - startedAt,
        ok: false,
        error: message,
      })

      return NextResponse.json(
        { success: false, error: message },
        { status: 400 }
      )
    }

    const input = parsedInput.data

    await supabaseAdminRequest({
      method: 'PATCH',
      resourcePath: `aluno?id=eq.${alunoId}`,
      body: {
        nome: input.nome,
        descricao: input.descricao || null,
        foto: input.foto || null,
        carreira: input.carreira || null,
        cidade: input.cidade || null,
        turno: input.turno || null,
        ano: input.ano || null,
        linkedin: input.linkedin || null,
        email: input.email || null,
        numero: input.numero || null,
        github: input.github || null,
        site: input.site || null,
      },
      prefer: 'return=minimal',
    })

    await Promise.all([
      supabaseAdminRequest({
        method: 'DELETE',
        resourcePath: `aluno_funcao?id_aluno=eq.${alunoId}`,
        prefer: 'return=minimal',
      }),
      supabaseAdminRequest({
        method: 'DELETE',
        resourcePath: `aluno_especializacao?id_aluno=eq.${alunoId}`,
        prefer: 'return=minimal',
      }),
      supabaseAdminRequest({
        method: 'DELETE',
        resourcePath: `aluno_habilidade?id_aluno=eq.${alunoId}`,
        prefer: 'return=minimal',
      }),
      supabaseAdminRequest({
        method: 'DELETE',
        resourcePath: `conquista?id_aluno=eq.${alunoId}`,
        prefer: 'return=minimal',
      }),
    ])

    for (const nome of input.funcoes) {
      const idFuncao = await resolveLookupId('funcao', nome)
      await supabaseAdminRequest({
        method: 'POST',
        resourcePath: 'aluno_funcao',
        body: [{ id_aluno: alunoId, id_funcao: idFuncao }],
        prefer: 'return=minimal',
      })
    }

    for (const nome of input.especializacoes) {
      const idEspecializacao = await resolveLookupId('especializacao', nome)
      await supabaseAdminRequest({
        method: 'POST',
        resourcePath: 'aluno_especializacao',
        body: [{ id_aluno: alunoId, id_especializacao: idEspecializacao }],
        prefer: 'return=minimal',
      })
    }

    for (const nome of input.habilidades) {
      const idHabilidade = await resolveLookupId('habilidade', nome)
      await supabaseAdminRequest({
        method: 'POST',
        resourcePath: 'aluno_habilidade',
        body: [{ id_aluno: alunoId, id_habilidade: idHabilidade }],
        prefer: 'return=minimal',
      })
    }

    for (const conquista of input.conquistas) {
      await supabaseAdminRequest({
        method: 'POST',
        resourcePath: 'conquista',
        body: [{ id_aluno: alunoId, nome: conquista }],
        prefer: 'return=minimal',
      })
    }

    logApiMetric({
      endpoint: '/api/admin/alunos/[id]',
      method: 'PATCH',
      status: 200,
      durationMs: Date.now() - startedAt,
      ok: true,
    })

    return NextResponse.json(
      { success: true, data: { id: alunoId } },
      { status: 200 }
    )
  } catch (error) {
    const message = asErrorMessage(error)
    logApiMetric({
      endpoint: '/api/admin/alunos/[id]',
      method: 'PATCH',
      status: 500,
      durationMs: Date.now() - startedAt,
      ok: false,
      error: message,
    })

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    )
  }
}
