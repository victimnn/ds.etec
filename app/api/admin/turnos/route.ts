import { z } from 'zod'
import { NextResponse, type NextRequest } from 'next/server'
import { resolveTenantFromRequest } from '@/src/lib/tenant-service'
import { hasValidSupabaseSession } from '@/src/lib/auth-session'
import { supabaseAdminRequest } from '@/src/lib/data/supabase-admin'

const alunoTurnoListSchema = z.array(
  z.object({
    turno: z.string().nullable().optional(),
  })
)

const projetoTurnoListSchema = z.array(
  z.object({
    aluno_tcc: z
      .array(
        z.object({
          aluno: z
            .object({
              turno: z.string().nullable().optional(),
            })
            .nullable()
            .optional(),
        })
      )
      .optional(),
  })
)

function normalizeShift(value: string | null | undefined): string | null {
  if (!value) return null
  const trimmed = value.trim()
  return trimmed ? trimmed : null
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

  const context = request.nextUrl.searchParams.get('context')?.trim() || 'alunos'
  const requestedYear = request.nextUrl.searchParams.get('ano')?.trim()

  try {
    if (context === 'projetos') {
      const yearFilter = requestedYear
        ? `&ano=eq.${encodeURIComponent(requestedYear)}`
        : ''

      const rows = await supabaseAdminRequest({
        resourcePath: `tcc?select=aluno_tcc(aluno(turno))${yearFilter}`,
        schema: projetoTurnoListSchema,
      })

      const turnos = rows
        .flatMap(row => row.aluno_tcc || [])
        .map(item => normalizeShift(item.aluno?.turno))
        .filter((shift): shift is string => shift !== null)

      const uniqueTurnos = Array.from(new Set(turnos)).sort((a, b) =>
        a.localeCompare(b, 'pt-BR')
      )

      return NextResponse.json({ turnos: uniqueTurnos })
    }

    if (context !== 'alunos') {
      return NextResponse.json(
        { error: 'Parametro "context" invalido.' },
        { status: 400 }
      )
    }

    const yearFilter = requestedYear
      ? `&ano=ilike.*${encodeURIComponent(requestedYear)}*`
      : ''

    const rows = await supabaseAdminRequest({
      resourcePath: `aluno?select=turno&turno=not.is.null${yearFilter}`,
      schema: alunoTurnoListSchema,
    })

    const turnos = rows
      .map(row => normalizeShift(row.turno))
      .filter((shift): shift is string => shift !== null)

    const uniqueTurnos = Array.from(new Set(turnos)).sort((a, b) =>
      a.localeCompare(b, 'pt-BR')
    )

    return NextResponse.json({ turnos: uniqueTurnos })
  } catch (error) {
    console.error('GET /api/admin/turnos error:', error)
    return NextResponse.json({ error: 'Erro ao buscar turnos.' }, { status: 500 })
  }
}
