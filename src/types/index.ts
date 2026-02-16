// Tipos globais do projeto

export interface NavigationItem {
  name: string
  href: string
  description?: string
}

export interface Materia {
  nome: string
  semestre: string
  descricao: string
}

export interface Professor {
  nome: string
  especialidade: string
  experiencia: string
}

export interface Projeto {
  id: string
  titulo: string
  descricao: string
  imagem: string
  tecnologias: string[]
  link?: string
  github?: string
}

export interface Depoimento {
  nome: string
  cargo: string
  empresa: string
  conteudo: string
  imagem?: string
}

export interface Vaga {
  titulo: string
  empresa: string
  localizacao: string
  tipo: 'CLT' | 'PJ' | 'Freelance' | 'Estágio'
  salario?: string
  descricao: string
  requisitos: string[]
  beneficios?: string[]
}
