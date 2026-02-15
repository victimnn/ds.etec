import { z } from 'zod'

const relationNameSchema = z.union([
  z.object({ nome: z.string().nullable().optional() }),
  z.array(z.object({ nome: z.string().nullable().optional() })),
])

export const rawTccSchema = z.object({
  id: z.number().int(),
  nome: z.string().nullable(),
  descricao: z.string().nullable(),
  introducao: z.string().nullable(),
  ano: z.union([z.number(), z.string()]).nullable(),
  github: z.string().nullable(),
  deploy: z.string().nullable(),
  video: z.string().nullable(),
  id_categoria: z.number().nullable().optional(),
  id_professor: z.number().nullable(),
  categoria: relationNameSchema.nullable().optional(),
  professor: z
    .object({
      id: z.number().nullable().optional(),
      nome: z.string().nullable().optional(),
      descricao: z.string().nullable().optional(),
      area: z.string().nullable().optional(),
      linkedin: z.string().nullable().optional(),
      email: z.string().nullable().optional(),
      foto: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
})

export const rawAlunoTccSchema = z.object({
  id_tcc: z.number().nullable(),
  id_aluno: z.number().nullable(),
  aluno: z
    .object({
      id: z.number().nullable().optional(),
      nome: z.string().nullable().optional(),
      descricao: z.string().nullable().optional(),
      carreira: z.string().nullable().optional(),
      cidade: z.string().nullable().optional(),
      linkedin: z.string().nullable().optional(),
      email: z.string().nullable().optional(),
      github: z.string().nullable().optional(),
      site: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
})

export const rawAlunoFuncaoSchema = z.object({
  id_aluno: z.number().nullable(),
  funcao: relationNameSchema.nullable().optional(),
})

export const rawAlunoEspecializacaoSchema = z.object({
  id_aluno: z.number().nullable(),
  especializacao: relationNameSchema.nullable().optional(),
})

export const rawAlunoHabilidadeSchema = z.object({
  id_aluno: z.number().nullable(),
  habilidade: relationNameSchema.nullable().optional(),
})

export const rawCategoriaSchema = z.object({
  id: z.number().int(),
  nome: z.string().nullable(),
})

export const rawConquistaSchema = z.object({
  id: z.number().nullable().optional(),
  id_aluno: z.number().nullable().optional(),
  id_professor: z.number().nullable().optional(),
  nome: z.string().nullable(),
})

export const rawProfessorSchema = z.object({
  id: z.number().int(),
  nome: z.string().nullable(),
  descricao: z.string().nullable().optional(),
  area: z.string().nullable().optional(),
  linkedin: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  foto: z.string().nullable().optional(),
  conquista: z.array(z.object({ nome: z.string().nullable() })).optional(),
})

export const rawAlunoSchema = z.object({
  id: z.number().int(),
  nome: z.string().nullable(),
  descricao: z.string().nullable().optional(),
  carreira: z.string().nullable().optional(),
  cidade: z.string().nullable().optional(),
  turno: z.string().nullable().optional(),
  linkedin: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  github: z.string().nullable().optional(),
  site: z.string().nullable().optional(),
  aluno_funcao: z.array(z.object({ funcao: z.object({ nome: z.string().nullable() }) })).optional(),
  aluno_especializacao: z.array(z.object({ especializacao: z.object({ nome: z.string().nullable() }) })).optional(),
  aluno_habilidade: z.array(z.object({ habilidade: z.object({ nome: z.string().nullable() }) })).optional(),
  conquista: z.array(z.object({ nome: z.string().nullable() })).optional(),
})

export const rawTccDeepSchema = z.object({
  id: z.number().int(),
  nome: z.string().nullable(),
  descricao: z.string().nullable(),
  introducao: z.string().nullable(),
  ano: z.union([z.number(), z.string()]).nullable(),
  github: z.string().nullable(),
  deploy: z.string().nullable(),
  video: z.string().nullable(),
  id_categoria: z.number().nullable().optional(),
  id_professor: z.number().nullable(),
  categoria: z.object({ nome: z.string().nullable() }).nullable().optional(),
  professor: rawProfessorSchema.nullable().optional(),
  aluno_tcc: z.array(z.object({ aluno: rawAlunoSchema.nullable() })).optional(),
})

export const rawTccDeepListSchema = z.array(rawTccDeepSchema)

export const rawTccListSchema = z.array(rawTccSchema)
export const rawAlunoTccListSchema = z.array(rawAlunoTccSchema)
export const rawAlunoFuncaoListSchema = z.array(rawAlunoFuncaoSchema)
export const rawAlunoEspecializacaoListSchema = z.array(rawAlunoEspecializacaoSchema)
export const rawAlunoHabilidadeListSchema = z.array(rawAlunoHabilidadeSchema)
export const rawConquistaListSchema = z.array(rawConquistaSchema)
export const rawProfessorListSchema = z.array(rawProfessorSchema)
export const rawCategoriaListSchema = z.array(rawCategoriaSchema)

const commaSeparatedArrayField = z
  .union([z.array(z.string()), z.string()])
  .optional()
  .transform((value) => {
    if (!value) {
      return [] as string[]
    }

    const list = Array.isArray(value) ? value : value.split(',')
    return list
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 50)
  })

export const createAlunoSchema = z.object({
  nome: z.string().trim().min(2, 'Nome deve ter ao menos 2 caracteres').max(120),
  descricao: z.string().trim().max(2000).optional(),
  carreira: z.string().trim().max(200).optional(),
  cidade: z.string().trim().max(120).optional(),
  turno: z.string().trim().max(30).optional(),
  ano: z.string().trim().max(20).optional(),
  linkedin: z.string().url().max(300).optional().or(z.literal('')),
  email: z.string().email().max(160).optional().or(z.literal('')),
  numero: z.string().trim().max(40).optional(),
  github: z.string().url().max(300).optional().or(z.literal('')),
  site: z.string().url().max(300).optional().or(z.literal('')),
  funcoes: commaSeparatedArrayField,
  especializacoes: commaSeparatedArrayField,
  habilidades: commaSeparatedArrayField,
  conquistas: commaSeparatedArrayField,
})

export const createTccSchema = z
  .object({
    nome: z.string().trim().min(2).max(180),
    descricao: z.string().trim().min(2).max(2500),
    introducao: z.string().trim().max(8000).optional(),
    ano: z.union([z.number().int(), z.string().trim()]),
    github: z.string().url().max(300).optional().or(z.literal('')),
    deploy: z.string().url().max(300).optional().or(z.literal('')),
    video: z.string().url().max(300).optional().or(z.literal('')),
    categoriaId: z.preprocess(
      (value) => {
        if (value === '' || value === null || value === undefined) {
          return undefined
        }

        if (typeof value === 'number') {
          return value
        }

        if (typeof value === 'string') {
          const parsed = Number.parseInt(value.trim(), 10)
          return Number.isNaN(parsed) ? value : parsed
        }

        return value
      },
      z.number().int().positive().optional()
    ),
    categoriaNome: z.string().trim().max(120).optional(),
    professorId: z.preprocess(
      (value) => {
        if (value === '' || value === null || value === undefined) {
          return undefined
        }

        if (typeof value === 'number') {
          return value
        }

        if (typeof value === 'string') {
          const parsed = Number.parseInt(value.trim(), 10)
          return Number.isNaN(parsed) ? value : parsed
        }

        return value
      },
      z.number().int().positive().optional()
    ),
    professorNome: z.string().trim().max(120).optional(),
    professorDescricao: z.string().trim().max(1500).optional(),
    professorArea: z.string().trim().max(120).optional(),
    professorLinkedin: z.string().url().max(300).optional().or(z.literal('')),
    professorEmail: z.string().email().max(160).optional().or(z.literal('')),
    professorFoto: z.string().url().max(300).optional().or(z.literal('')),
    memberIds: z
      .union([z.array(z.number().int().positive()), z.string()])
      .optional()
      .transform((value) => {
        if (!value) {
          return [] as number[]
        }

        if (Array.isArray(value)) {
          return value
        }

        return value
          .split(',')
          .map((item) => Number.parseInt(item.trim(), 10))
          .filter((id) => Number.isInteger(id) && id > 0)
          .slice(0, 80)
      }),
    conquistasProfessor: commaSeparatedArrayField,
  })
  .refine(
    (data) => Boolean(data.professorId) || Boolean(data.professorNome?.trim()),
    'Informe professorId ou professorNome'
  )
  .refine(
    (data) => Boolean(data.categoriaId) || Boolean(data.categoriaNome?.trim()),
    'Informe categoriaId ou categoriaNome'
  )

export const createProfessorSchema = z.object({
  nome: z.string().trim().min(2).max(120),
  descricao: z.string().trim().max(1500).optional(),
  area: z.string().trim().max(120).optional(),
  linkedin: z.string().url().max(300).optional().or(z.literal('')),
  email: z.string().email().max(160).optional().or(z.literal('')),
  foto: z.string().url().max(300).optional().or(z.literal('')),
  conquistas: commaSeparatedArrayField,
})

export const createNamedEntitySchema = z.object({
  nome: z.string().trim().min(2).max(120),
})

const optionalNumericIdSchema = z.preprocess(
  (value) => {
    if (value === '' || value === null || value === undefined) {
      return undefined
    }

    if (typeof value === 'number') {
      return value
    }

    if (typeof value === 'string') {
      const parsed = Number.parseInt(value.trim(), 10)
      return Number.isNaN(parsed) ? value : parsed
    }

    return value
  },
  z.number().int().positive().optional()
)

export const createConquistaSchema = z
  .object({
    nome: z.string().trim().min(2).max(160),
    id_aluno: optionalNumericIdSchema,
    id_professor: optionalNumericIdSchema,
  })
  .refine(
    (data) => Boolean(data.id_aluno) || Boolean(data.id_professor),
    'Informe id_aluno ou id_professor'
  )

export type RawTcc = z.infer<typeof rawTccSchema>
export type RawAlunoTcc = z.infer<typeof rawAlunoTccSchema>
export type RawAlunoFuncao = z.infer<typeof rawAlunoFuncaoSchema>
export type RawAlunoEspecializacao = z.infer<typeof rawAlunoEspecializacaoSchema>
export type RawAlunoHabilidade = z.infer<typeof rawAlunoHabilidadeSchema>
export type RawConquista = z.infer<typeof rawConquistaSchema>
export type RawProfessor = z.infer<typeof rawProfessorSchema>
export type RawCategoria = z.infer<typeof rawCategoriaSchema>
export type CreateAlunoInput = z.infer<typeof createAlunoSchema>
export type CreateTccInput = z.infer<typeof createTccSchema>
export type CreateProfessorInput = z.infer<typeof createProfessorSchema>
export type CreateNamedEntityInput = z.infer<typeof createNamedEntitySchema>
export type CreateConquistaInput = z.infer<typeof createConquistaSchema>
