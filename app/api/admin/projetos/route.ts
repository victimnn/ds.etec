import { z } from 'zod'
import { NextResponse, type NextRequest } from 'next/server'
import { hasValidSupabaseSession } from '@/src/lib/auth-session'
import { type ApiResult } from '@/src/lib/api-result'
import { DataSourceError, isDataSourceError } from '@/src/lib/data/errors'
import { supabaseAdminRequest } from '@/src/lib/data/supabase-admin'
import { createTccSchema } from '@/src/lib/schemas/tcc'
import { logApiMetric } from '@/src/lib/telemetry'
import { resolveTenantFromRequest } from '@/src/lib/tenant-service'

const idOnlyListSchema = z.array(z.object({ id: z.number().int().positive() }))
const tccInsertSchema = z.array(z.object({ id: z.number().int().positive() }))

function asErrorMessage(error: unknown): string {
  if (isDataSourceError(error)) {
    if (typeof error.details === 'string' && error.details.trim()) {
      const details = error.details.trim()
      return `${error.message}: ${details.slice(0, 300)}`
    }
    return error.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'Erro interno ao criar projeto.'
}

function assertSmallInt(name: string, value: number): void {
  if (!Number.isInteger(value) || value < -32768 || value > 32767) {
    throw new DataSourceError(
      'SUPABASE_PAYLOAD',
      `${name} fora do intervalo smallint: ${value}`
    )
  }
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

async function resolveProfessorId(input: {
  professorId?: number
  professorNome?: string
  professorDescricao?: string
  professorArea?: string
  professorLinkedin?: string
  professorEmail?: string
  professorFoto?: string
}): Promise<number> {
  if (input.professorId) {
    return input.professorId
  }

  const nome = input.professorNome?.trim()
  if (!nome) {
    throw new DataSourceError('SUPABASE_PAYLOAD', 'Professor nao informado.')
  }

  const encodedName = encodeURIComponent(nome)
  const existing = await supabaseAdminRequest({
    resourcePath: `professor?select=id&nome=eq.${encodedName}&limit=1`,
    schema: idOnlyListSchema,
  })

  if (existing[0]?.id) {
    return existing[0].id
  }

  const created = await supabaseAdminRequest({
    method: 'POST',
    resourcePath: 'professor?select=id',
    body: [
      {
        nome,
        descricao: input.professorDescricao || null,
        area: input.professorArea || null,
        linkedin: input.professorLinkedin || null,
        email: input.professorEmail || null,
        foto: input.professorFoto || null,
      },
    ],
    schema: idOnlyListSchema,
    prefer: 'return=representation',
  })

  if (!created[0]?.id) {
    throw new DataSourceError('SUPABASE_PAYLOAD', 'Falha ao criar professor.')
  }

  return created[0].id
}

async function rollbackProjeto(projectId: number): Promise<void> {
  await Promise.allSettled([
    supabaseAdminRequest({
      method: 'DELETE',
      resourcePath: `aluno_tcc?id_tcc=eq.${projectId}`,
      prefer: 'return=minimal',
    }),
    supabaseAdminRequest({
      method: 'DELETE',
      resourcePath: `tcc?id=eq.${projectId}`,
      prefer: 'return=minimal',
    }),
  ])
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
      endpoint: '/api/admin/projetos',
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

  let projectId = 0

  try {
    const body = (await request.json()) as unknown
    const parsedInput = createTccSchema.safeParse(body)

    if (!parsedInput.success) {
      const message =
        parsedInput.error.issues[0]?.message ||
        'Payload invalido para novo projeto.'
      logApiMetric({
        endpoint: '/api/admin/projetos',
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
    const idCategoria = input.categoriaId
      ? input.categoriaId
      : await resolveLookupId('categoria', input.categoriaNome || 'Geral')
    const idProfessor = await resolveProfessorId(input)
    assertSmallInt('id_categoria', idCategoria)
    assertSmallInt('id_professor', idProfessor)

    const inserted = await supabaseAdminRequest({
      method: 'POST',
      resourcePath: 'tcc?select=id',
      body: [
        {
          nome: input.nome,
          descricao: input.descricao,
          introducao: input.introducao || null,
          ano:
            typeof input.ano === 'number'
              ? input.ano
              : Number.parseInt(input.ano, 10) || null,
          id_categoria: idCategoria,
          id_professor: idProfessor,
          github: input.github || null,
          deploy: input.deploy || null,
          video: input.video || null,
        },
      ],
      schema: tccInsertSchema,
      prefer: 'return=representation',
    })

    projectId = inserted[0]?.id || 0
    if (!projectId) {
      throw new DataSourceError(
        'SUPABASE_PAYLOAD',
        'Supabase nao retornou id do projeto.'
      )
    }

    if (input.memberIds.length) {
      const payload = input.memberIds.map(memberId => ({
        id_aluno: memberId,
        id_tcc: projectId,
      }))
      await supabaseAdminRequest({
        method: 'POST',
        resourcePath: 'aluno_tcc',
        body: payload,
        prefer: 'return=minimal',
      })
    }

    if (input.conquistasProfessor.length) {
      const payload = input.conquistasProfessor.map(conquista => ({
        id_professor: idProfessor,
        nome: conquista,
      }))
      await supabaseAdminRequest({
        method: 'POST',
        resourcePath: 'conquista',
        body: payload,
        prefer: 'return=minimal',
      })
    }

    logApiMetric({
      endpoint: '/api/admin/projetos',
      method: 'POST',
      status: 201,
      durationMs: Date.now() - startedAt,
      ok: true,
    })

    return NextResponse.json(
      { success: true, data: { id: projectId } },
      { status: 201 }
    )
  } catch (error) {
    if (projectId) {
      await rollbackProjeto(projectId)
    }

    const message = asErrorMessage(error)
    logApiMetric({
      endpoint: '/api/admin/projetos',
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
    const projects = await supabaseAdminRequest({
      resourcePath:
        'tcc?select=*,categoria(nome),professor(nome),aluno_tcc(aluno(nome))&order=ano.desc',
      schema: z.array(z.any()),
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error('GET /api/admin/projetos error:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar projetos.' },
      { status: 500 }
    )
  }
}
