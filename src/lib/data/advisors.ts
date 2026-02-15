import { z } from 'zod'
import type { Advisor } from '@/src/lib/types'
import { getSupabasePublicConfig } from '@/src/lib/data/supabase-config'
import { rawProfessorSchema } from '@/src/lib/schemas/tcc'

const FALLBACK_COORDINATOR: Advisor = {
  id: 0,
  name: 'Coordenação não informada',
  title: 'Coordenação do Curso',
  about:
    'A coordenação do curso será exibida assim que os dados forem cadastrados.',
  expertise: 'Gestão acadêmica',
  photo: '/placeholder-user.jpg',
  achievements: [],
}

const professorListSchema = z.array(rawProfessorSchema)

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

    return parsed.data.map(raw => ({
      id: raw.id,
      name: raw.nome || 'Professor',
      title: 'Professor Orientador',
      about: raw.descricao || 'Professor da ETEC João Belarmino.',
      expertise: raw.area || 'Desenvolvimento de Sistemas',
      photo: raw.foto || '/placeholder-user.jpg',
      linkedin: raw.linkedin || undefined,
      email: raw.email || undefined,
      achievements: raw.conquista?.map(c => c.nome || '').filter(Boolean) || [],
    }))
  } catch (error) {
    console.error('[getAdvisors]', error)
    return []
  }
}

export async function getCoordinator(): Promise<Advisor> {
  const advisors = await getAdvisors({ limit: 1 })
  return advisors[0] || FALLBACK_COORDINATOR
}

export const advisors: Advisor[] = []
export const coordinator: Advisor = FALLBACK_COORDINATOR
