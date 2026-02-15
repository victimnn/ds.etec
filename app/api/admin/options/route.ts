import { z } from 'zod'
import { NextResponse, type NextRequest } from 'next/server'
import { resolveTenantFromRequest } from '@/src/lib/tenant-service'
import { hasValidSupabaseSession } from '@/src/lib/auth-session'
import { supabaseAdminRequest } from '@/src/lib/data/supabase-admin'

const nomeListSchema = z.array(
  z.object({ id: z.number(), nome: z.string().nullable() })
)
const conquistaListSchema = z.array(
  z.object({
    id: z.number(),
    nome: z.string().nullable(),
    id_aluno: z.number().nullable().optional(),
    id_professor: z.number().nullable().optional(),
  })
)

export async function GET(request: NextRequest) {
  const tenant = resolveTenantFromRequest(request)

  if (tenant?.id !== 'admin') {
    console.error('Options API: Invalid tenant', tenant?.id)
    return NextResponse.json(
      {
        error: `Operacao permitida apenas no tenant admin. (Atual: ${tenant?.id})`,
      },
      { status: 403 }
    )
  }

  const isValidSession = await hasValidSupabaseSession(request)
  if (!isValidSession) {
    console.error('Options API: Invalid session')
    return NextResponse.json(
      {
        error: 'Sessão expirada ou inválida. Por favor, faça login novamente.',
      },
      { status: 401 }
    )
  }

  try {
    const [
      professores,
      categorias,
      funcoes,
      especializacoes,
      habilidades,
      conquistas,
      alunos,
    ] = await Promise.all([
      supabaseAdminRequest({
        resourcePath: 'professor?select=id,nome&order=nome.asc',
        schema: nomeListSchema,
      }),
      supabaseAdminRequest({
        resourcePath: 'categoria?select=id,nome&order=nome.asc',
        schema: nomeListSchema,
      }),
      supabaseAdminRequest({
        resourcePath: 'funcao?select=id,nome&order=nome.asc',
        schema: nomeListSchema,
      }),
      supabaseAdminRequest({
        resourcePath: 'especializacao?select=id,nome&order=nome.asc',
        schema: nomeListSchema,
      }),
      supabaseAdminRequest({
        resourcePath: 'habilidade?select=id,nome&order=nome.asc',
        schema: nomeListSchema,
      }),
      supabaseAdminRequest({
        resourcePath:
          'conquista?select=id,nome,id_aluno,id_professor&order=id.desc',
        schema: conquistaListSchema,
      }),
      supabaseAdminRequest({
        resourcePath: 'aluno?select=id,nome&order=nome.asc',
        schema: nomeListSchema,
      }),
    ])

    return NextResponse.json({
      professores,
      categorias,
      funcoes,
      especializacoes,
      habilidades,
      conquistas,
      alunos,
    })
  } catch (error: any) {
    console.error('Options API: Database error', error)
    return NextResponse.json(
      {
        error: 'Erro ao carregar dados do banco.',
        details: error.message || String(error),
      },
      { status: 500 }
    )
  }
}
