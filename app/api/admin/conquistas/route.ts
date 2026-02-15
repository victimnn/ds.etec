import { z } from 'zod'
import { NextResponse, type NextRequest } from 'next/server'
import { resolveTenantFromRequest } from '@/src/lib/tenant-service'
import { hasValidSupabaseSession } from '@/src/lib/auth-session'
import { supabaseAdminRequest } from '@/src/lib/data/supabase-admin'
import { createConquistaSchema } from '@/src/lib/schemas/tcc'

const createdIdSchema = z.array(z.object({ id: z.number().int().positive() }))

export async function POST(request: NextRequest) {
  const tenant = resolveTenantFromRequest(request)
  if (tenant?.id !== 'admin') {
    return NextResponse.json({ error: 'Operacao permitida apenas no tenant admin.' }, { status: 403 })
  }

  if (!(await hasValidSupabaseSession(request))) {
    return NextResponse.json({ error: 'Nao autorizado.' }, { status: 401 })
  }

  const body = (await request.json()) as unknown
  const parsed = createConquistaSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message || 'Payload invalido.' }, { status: 400 })
  }

  const inserted = await supabaseAdminRequest({
    method: 'POST',
    resourcePath: 'conquista?select=id',
    body: [parsed.data],
    schema: createdIdSchema,
    prefer: 'return=representation',
  })

  return NextResponse.json({ success: true, data: { id: inserted[0]?.id } }, { status: 201 })
}

