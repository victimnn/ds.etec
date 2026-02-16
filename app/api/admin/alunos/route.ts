import { z } from 'zod'
import { NextResponse, type NextRequest } from 'next/server'
import { hasValidSupabaseSession } from '@/src/lib/auth-session'
import { type ApiResult } from '@/src/lib/api-result'
import { DataSourceError, isDataSourceError } from '@/src/lib/data/errors'
import { supabaseAdminRequest } from '@/src/lib/data/supabase-admin'
import { createAlunoSchema } from '@/src/lib/schemas/tcc'
import { logApiMetric } from '@/src/lib/telemetry'
import { resolveTenantFromRequest } from '@/src/lib/tenant-service'

const idOnlyListSchema = z.array(z.object({ id: z.number().int().positive() }))
const alunoInsertSchema = z.array(z.object({ id: z.number().int().positive() }))

function asErrorMessage(error: unknown): string {
  if (isDataSourceError(error)) {
    return error.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Erro interno ao criar aluno.'
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

async function rollbackAluno(alunoId: number): Promise<void> {
  const suffix = `id_aluno=eq.${alunoId}`
  const requests = [
    supabaseAdminRequest({
      method: 'DELETE',
      resourcePath: `aluno_funcao?${suffix}`,
      prefer: 'return=minimal',
    }),
    supabaseAdminRequest({
      method: 'DELETE',
      resourcePath: `aluno_especializacao?${suffix}`,
      prefer: 'return=minimal',
    }),
    supabaseAdminRequest({
      method: 'DELETE',
      resourcePath: `aluno_habilidade?${suffix}`,
      prefer: 'return=minimal',
    }),
    supabaseAdminRequest({
      method: 'DELETE',
      resourcePath: `conquista?${suffix}`,
      prefer: 'return=minimal',
    }),
    supabaseAdminRequest({
      method: 'DELETE',
      resourcePath: `aluno_tcc?${suffix}`,
      prefer: 'return=minimal',
    }),
    supabaseAdminRequest({
      method: 'DELETE',
      resourcePath: `aluno?id=eq.${alunoId}`,
      prefer: 'return=minimal',
    }),
  ]

  await Promise.allSettled(requests)
}

export async function POST(
  request: NextRequest
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
      endpoint: '/api/admin/alunos',
      method: 'POST',
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

  let alunoId = 0

  try {
    const body = (await request.json()) as unknown
    const parsedInput = createAlunoSchema.safeParse(body)

    if (!parsedInput.success) {
      const message =
        parsedInput.error.issues[0]?.message ||
        'Payload invalido para novo aluno.'
      logApiMetric({
        endpoint: '/api/admin/alunos',
        method: 'POST',
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

    const inserted = await supabaseAdminRequest({
      method: 'POST',
      resourcePath: 'aluno?select=id',
      body: [
        {
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
      ],
      schema: alunoInsertSchema,
      prefer: 'return=representation',
    })

    alunoId = inserted[0]?.id || 0
    if (!alunoId) {
      throw new DataSourceError(
        'SUPABASE_PAYLOAD',
        'Supabase nao retornou id do aluno.'
      )
    }

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
      endpoint: '/api/admin/alunos',
      method: 'POST',
      status: 201,
      durationMs: Date.now() - startedAt,
      ok: true,
    })

    return NextResponse.json(
      { success: true, data: { id: alunoId } },
      { status: 201 }
    )
  } catch (error) {
    if (alunoId) {
      await rollbackAluno(alunoId)
    }

    const message = asErrorMessage(error)
    logApiMetric({
      endpoint: '/api/admin/alunos',
      method: 'POST',
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

export async function GET(request: NextRequest) {
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
    const students = await supabaseAdminRequest({
      resourcePath:
        'aluno?select=*,aluno_funcao(funcao(nome)),aluno_especializacao(especializacao(nome)),aluno_habilidade(habilidade(nome))&order=nome.asc',
      schema: z.array(z.any()),
    })

    return NextResponse.json(students)
  } catch (error) {
    console.error('GET /api/admin/alunos error:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar alunos.' },
      { status: 500 }
    )
  }
}
