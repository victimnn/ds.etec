import { z } from 'zod'
import { NextResponse, type NextRequest } from 'next/server'
import { hasValidSupabaseSession } from '@/src/lib/auth-session'
import { type ApiResult } from '@/src/lib/api-result'
import { DataSourceError, isDataSourceError } from '@/src/lib/data/errors'
import { supabaseAdminRequest } from '@/src/lib/data/supabase-admin'
import { updateTccSchema } from '@/src/lib/schemas/tcc'
import { logApiMetric } from '@/src/lib/telemetry'
import { resolveTenantFromRequest } from '@/src/lib/tenant-service'

function parseId(params: { id: string }): number {
  const id = Number.parseInt(params.id, 10)
  if (!Number.isInteger(id) || id <= 0) {
    throw new DataSourceError('SUPABASE_PAYLOAD', 'ID de projeto invalido.')
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

  return 'Erro interno ao atualizar projeto.'
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
    const projectId = parseId(resolvedParams)
    const rows = await supabaseAdminRequest({
      resourcePath: `tcc?select=*,categoria(id,nome),professor(id,nome),aluno_tcc(id_aluno)&id=eq.${projectId}&limit=1`,
      schema: z.array(z.any()),
    })

    const project = rows[0]
    if (!project) {
      return NextResponse.json(
        { error: 'Projeto nao encontrado.' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      ...project,
      memberIds:
        project.aluno_tcc
          ?.map((item: any) => item.id_aluno)
          .filter((id: unknown) => typeof id === 'number') || [],
    })
  } catch (error) {
    console.error('GET /api/admin/projetos/[id] error:', error)
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
      endpoint: '/api/admin/projetos/[id]',
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
    const projectId = parseId(resolvedParams)
    const body = (await request.json()) as unknown
    const parsedInput = updateTccSchema.safeParse(body)

    if (!parsedInput.success) {
      const message =
        parsedInput.error.issues[0]?.message ||
        'Payload invalido para atualizacao de projeto.'
      logApiMetric({
        endpoint: '/api/admin/projetos/[id]',
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
      resourcePath: `tcc?id=eq.${projectId}`,
      body: {
        nome: input.nome,
        descricao: input.descricao,
        introducao: input.introducao || null,
        foto: input.foto || null,
        ano:
          typeof input.ano === 'number'
            ? input.ano
            : Number.parseInt(input.ano, 10) || null,
        id_categoria: input.categoriaId || null,
        id_professor: input.professorId || null,
        github: input.github || null,
        deploy: input.deploy || null,
        video: input.video || null,
      },
      prefer: 'return=minimal',
    })

    await supabaseAdminRequest({
      method: 'DELETE',
      resourcePath: `aluno_tcc?id_tcc=eq.${projectId}`,
      prefer: 'return=minimal',
    })

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

    logApiMetric({
      endpoint: '/api/admin/projetos/[id]',
      method: 'PATCH',
      status: 200,
      durationMs: Date.now() - startedAt,
      ok: true,
    })

    return NextResponse.json(
      { success: true, data: { id: projectId } },
      { status: 200 }
    )
  } catch (error) {
    const message = asErrorMessage(error)
    logApiMetric({
      endpoint: '/api/admin/projetos/[id]',
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
