import { z } from 'zod'
import { NextResponse, type NextRequest } from 'next/server'
import { resolveTenantFromRequest } from '@/src/lib/tenant-service'
import { hasValidSupabaseSession } from '@/src/lib/auth-session'
import { supabaseAdminRequest } from '@/src/lib/data/supabase-admin'
import { createProfessorSchema } from '@/src/lib/schemas/tcc'

const createdIdSchema = z.array(z.object({ id: z.number().int().positive() }))

export async function POST(request: NextRequest) {
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

  const body = (await request.json()) as unknown
  const parsed = createProfessorSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || 'Payload invalido.' },
      { status: 400 }
    )
  }

  let professorId: number | null = null

  try {
    const input = parsed.data
    const inserted = await supabaseAdminRequest({
      method: 'POST',
      resourcePath: 'professor?select=id',
      body: [
        {
          nome: input.nome,
          descricao: input.descricao || null,
          area: input.area || null,
          linkedin: input.linkedin || null,
          email: input.email || null,
          foto: input.foto || null,
        },
      ],
      schema: createdIdSchema,
      prefer: 'return=representation',
    })

    professorId = inserted[0]?.id || null
    if (!professorId) {
      return NextResponse.json(
        { error: 'Falha ao obter id do professor.' },
        { status: 500 }
      )
    }

    if (input.conquistas.length) {
      await supabaseAdminRequest({
        method: 'POST',
        resourcePath: 'conquista',
        body: input.conquistas.map(nome => ({
          id_professor: professorId,
          nome,
        })),
        prefer: 'return=minimal',
      })
    }

    return NextResponse.json(
      { success: true, data: { id: professorId } },
      { status: 201 }
    )
  } catch (error) {
    if (professorId) {
      await Promise.allSettled([
        supabaseAdminRequest({
          method: 'DELETE',
          resourcePath: `conquista?id_professor=eq.${professorId}`,
          prefer: 'return=minimal',
        }),
        supabaseAdminRequest({
          method: 'DELETE',
          resourcePath: `professor?id=eq.${professorId}`,
          prefer: 'return=minimal',
        }),
      ])
    }

    const message =
      error instanceof Error ? error.message : 'Falha ao cadastrar professor.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
