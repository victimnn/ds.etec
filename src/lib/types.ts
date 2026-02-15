export interface TeamMember {
  id: number
  name: string
  role: string
  about: string
  career: string
  location?: string
  photo?: string
  linkedin?: string
  github?: string
  instagram?: string
  portfolio?: string
  email?: string
  achievements?: string[]
  expertise: string
  skills?: string[]
}

export interface Advisor {
  id: number
  name: string
  title: string
  about: string
  expertise: string
  department?: string
  photo?: string
  linkedin?: string
  email?: string
  achievements?: string[]
}

export interface ProjectLinks {
  github?: string
  github2?: string
  demo?: string
  documentation?: string
}

export interface TCCProject {
  id: number
  title: string
  description: string
  fullDescription?: string
  category: string[]
  year: string
  period?: string
  image: string
  imageZoom?: number
  technologies: string[]
  members: TeamMember[]
  advisor: Advisor
  links?: ProjectLinks
  features?: string[]
  videoUrl?: string
  gallery?: string[]
}

