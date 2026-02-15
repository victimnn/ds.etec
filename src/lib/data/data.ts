import { z } from 'zod'
import type { Advisor, TCCProject, TeamMember } from '@/src/lib/types'
import { DataSourceError } from '@/src/lib/data/errors'
import { getSupabasePublicConfig } from '@/src/lib/data/supabase-config'
import {
  rawAlunoSchema,
  rawProfessorSchema,
  rawTccDeepSchema,
  rawTccDeepListSchema,
} from '@/src/lib/schemas/tcc'

type RawAlunoSchema = z.infer<typeof rawAlunoSchema>
type RawProfessorSchema = z.infer<typeof rawProfessorSchema>
type RawTccDeepSchema = z.infer<typeof rawTccDeepSchema>

const FALLBACK_PROJECTS: TCCProject[] = []

async function supabaseDeepSelect<T>(
  resourcePath: string,
  schema: z.ZodSchema<T[]>
): Promise<T[]> {
  const config = getSupabasePublicConfig()
  const response = await fetch(`${config.url}/rest/v1/${resourcePath}`, {
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 300 },
  })

  if (!response.ok) {
    const details = await response.text()
    throw new DataSourceError(
      'SUPABASE_REQUEST',
      `Supabase deep request failed for ${resourcePath}`,
      { status: response.status, resourcePath, details }
    )
  }

  const payload = await response.json()
  const parsed = schema.safeParse(payload)
  if (!parsed.success) {
    console.error('[supabase_payload_error]', parsed.error.format())
    throw new DataSourceError(
      'SUPABASE_PAYLOAD',
      `Supabase deep payload did not match schema for ${resourcePath}`
    )
  }

  return parsed.data
}

function mapRawMember(raw: RawAlunoSchema): TeamMember {
  const skills =
    raw.aluno_habilidade?.map(h => h.habilidade.nome || '').filter(Boolean) ||
    []
  const expertise =
    raw.aluno_especializacao
      ?.map(e => e.especializacao.nome || '')
      .filter(Boolean)
      .join(', ') || 'Desenvolvimento de Sistemas'
  const role = raw.aluno_funcao?.[0]?.funcao.nome || 'Integrante'
  const achievements =
    raw.conquista?.map(c => c.nome || '').filter(Boolean) || []

  return {
    id: raw.id,
    name: raw.nome || 'Estudante',
    role,
    about: raw.descricao || 'Estudante de Desenvolvimento de Sistemas.',
    career: raw.carreira || 'Carreira em tecnologia.',
    location: raw.cidade || undefined,
    photo: '/placeholder-user.jpg',
    linkedin: raw.linkedin || undefined,
    github: raw.github || undefined,
    portfolio: raw.site || undefined,
    email: raw.email || undefined,
    achievements,
    expertise,
    skills,
  }
}

function mapRawAdvisor(raw: RawProfessorSchema | null | undefined): Advisor {
  if (!raw) {
    return {
      id: 0,
      name: 'Orientador não informado',
      title: 'Professor Orientador',
      about: 'Informações do orientador ainda não foram cadastradas.',
      expertise: 'Desenvolvimento de Sistemas',
      photo: '/placeholder-user.jpg',
      achievements: [],
    }
  }

  return {
    id: raw.id,
    name: raw.nome || 'Professor',
    title: 'Professor Orientador',
    about: raw.descricao || 'Professor orientador do projeto.',
    expertise: raw.area || 'Desenvolvimento de Sistemas',
    department: raw.area || undefined,
    photo: raw.foto || '/placeholder-user.jpg',
    linkedin: raw.linkedin || undefined,
    email: raw.email || undefined,
    achievements: raw.conquista?.map(c => c.nome || '').filter(Boolean) || [],
  }
}

export async function getTccProjects(): Promise<TCCProject[]> {
  try {
    const query =
      'tcc?select=*,categoria(nome),professor(*,conquista(nome)),aluno_tcc(aluno(*,aluno_funcao(funcao(nome)),aluno_especializacao(especializacao(nome)),aluno_habilidade(habilidade(nome)),conquista(nome)))&order=ano.desc,id.desc'
    const rawProjects = await supabaseDeepSelect(query, rawTccDeepListSchema)

    return rawProjects.map((row: RawTccDeepSchema) => {
      const categoryName = row.categoria?.nome || 'Geral'
      const members =
        row.aluno_tcc
          ?.map(at => (at.aluno ? mapRawMember(at.aluno) : null))
          .filter((m): m is TeamMember => m !== null) || []
      const technologies = Array.from(
        new Set(members.flatMap(m => m.skills || []))
      )

      // Tenta pegar o turno do primeiro aluno que tiver essa informação
      const period =
        row.aluno_tcc?.find(at => at.aluno?.turno)?.aluno?.turno || undefined

      return {
        id: row.id,
        title: row.nome || `Projeto ${row.id}`,
        description: row.descricao || 'Descrição em atualização.',
        fullDescription: row.introducao || row.descricao || undefined,
        category: [categoryName],
        year: row.ano ? String(row.ano) : '',
        period,
        image: '/logo-ds.png', // Fallback to DS logo for project card
        technologies,
        members,
        advisor: mapRawAdvisor(row.professor),
        links: {
          github: row.github || undefined,
          demo: row.deploy || undefined,
        },
        videoUrl: row.video || undefined,
        features: [],
        gallery: [],
      }
    })
  } catch (error) {
    console.error('[getTccProjects]', error)
    return FALLBACK_PROJECTS
  }
}

export async function getProjectById(
  id: number
): Promise<TCCProject | undefined> {
  const projects = await getTccProjects()
  return projects.find(p => p.id === id)
}

export const tccProjects: TCCProject[] = []
