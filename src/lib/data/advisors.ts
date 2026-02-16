import { z } from 'zod'
import type { Advisor } from '@/src/lib/types'
import { getSupabasePublicConfig } from '@/src/lib/data/supabase-config'
import { rawProfessorSchema } from '@/src/lib/schemas/tcc'

const FALLBACK_COORDINATOR: Advisor = {
  id: 0,
  name: 'Coordenacao nao informada',
  title: 'Coordenacao do Curso',
  about: 'A coordenacao do curso sera exibida assim que os dados forem cadastrados.',
  expertise: 'Gestao academica',
  photo: '/placeholder-user.jpg',
  achievements: [],
}

const professorListSchema = z.array(rawProfessorSchema)

function mapProfessorToAdvisor(raw: z.infer<typeof rawProfessorSchema>): Advisor {
  return {
    id: raw.id,
    name: raw.nome || 'Professor',
    title: 'Professor Orientador',
    about: raw.descricao || 'Professor da ETEC Joao Belarmino.',
    expertise: raw.area || 'Desenvolvimento de Sistemas',
    photo: raw.foto || '/placeholder-user.jpg',
    linkedin: raw.linkedin || undefined,
    email: raw.email || undefined,
    achievements: raw.conquista?.map(c => c.nome || '').filter(Boolean) || [],
  }
}

export async function getAdvisors(params?: {
  limit?: number
  offset?: number
}): Promise<Advisor[]> {
  const config = getSupabasePublicConfig()
  const { limit = 50, offset = 0 } = params || {}

  try {
    const resourcePath = `professor?select=*,conquista(nome)&order=nome.asc&limit=${limit}&offset=${offset}`
    const response = await fetch(`${config.url}/rest/v1/${resourcePath}`, {
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${config.anonKey}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 },
    })

    if (!response.ok) return []

    const rawData = await response.json()
    const parsed = professorListSchema.safeParse(rawData)

    if (!parsed.success) return []

    return parsed.data.map(mapProfessorToAdvisor)
  } catch (error) {
    console.error('[getAdvisors]', error)
    return []
  }
}

export async function getCoordinator(): Promise<Advisor> {
  const config = getSupabasePublicConfig()

  try {
    const resourcePath =
      'professor?select=*,conquista(nome)&order=id.asc&limit=1&offset=0'
    const response = await fetch(`${config.url}/rest/v1/${resourcePath}`, {
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${config.anonKey}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 },
    })

    if (!response.ok) return FALLBACK_COORDINATOR

    const rawData = await response.json()
    const parsed = professorListSchema.safeParse(rawData)

    if (!parsed.success || parsed.data.length === 0) {
      return FALLBACK_COORDINATOR
    }

    return {
      ...mapProfessorToAdvisor(parsed.data[0]),
      title: 'Coordenador(a) do Curso',
    }
  } catch (error) {
    console.error('[getCoordinator]', error)
    return FALLBACK_COORDINATOR
  }
}

export const advisors: Advisor[] = []
export const coordinator: Advisor = FALLBACK_COORDINATOR
