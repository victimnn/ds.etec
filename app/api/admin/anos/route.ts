import { z } from 'zod'
import { NextResponse, type NextRequest } from 'next/server'
import { resolveTenantFromRequest } from '@/src/lib/tenant-service'
import { hasValidSupabaseSession } from '@/src/lib/auth-session'
import { supabaseAdminRequest } from '@/src/lib/data/supabase-admin'

const anoListSchema = z.array(
  z.object({
    ano: z.union([z.number(), z.string()]).nullable().optional(),
  })
)

function normalizeYear(value: unknown): number | null {
  if (typeof value === 'number' && Number.isInteger(value)) {
    return value
  }

  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (!trimmed) return null

    const direct = Number.parseInt(trimmed, 10)
    if (Number.isInteger(direct) && direct > 1900 && direct < 3000) {
      return direct
    }

    const match = trimmed.match(/\b(19|20)\d{2}\b/)
    if (match) {
      return Number.parseInt(match[0], 10)
    }
  }

  return null
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
    const [projectYears, studentYears] = await Promise.all([
      supabaseAdminRequest({
        resourcePath: 'tcc?select=ano&ano=not.is.null',
        schema: anoListSchema,
      }),
      supabaseAdminRequest({
        resourcePath: 'aluno?select=ano&ano=not.is.null',
        schema: anoListSchema,
      }),
    ])

    const years = [...projectYears, ...studentYears]
      .map(item => normalizeYear(item.ano))
      .filter((year): year is number => year !== null)

    const uniqueYears = Array.from(new Set(years)).sort((a, b) => b - a)
    return NextResponse.json({ anos: uniqueYears })
  } catch (error) {
    console.error('GET /api/admin/anos error:', error)
    return NextResponse.json({ error: 'Erro ao buscar anos.' }, { status: 500 })
  }
}
