import { NavigationItem } from '@/types'

export const navigationItems: NavigationItem[] = [
  { name: 'Início', href: '/' },
  { name: 'Sobre o Curso', href: '/sobre' },
  { name: 'Projetos', href: '/projetos' },
  { name: 'Vestibulinho', href: '/vestibulinho' },
  { name: 'Mercado de Trabalho', href: '/mercado' },
  { name: 'Contato', href: '/contato' },
]

export const siteConfig = {
  name: 'Desenvolvimento de Sistemas',
  institution: 'Etec João Belarmino',
  description: 'Curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio',
  url: 'https://ds.etecjoaobelarmino.com.br',
  ogImage: '/og-image.png',
  links: {
    instagram: 'https://instagram.com/etecjoaobelarmino',
    facebook: 'https://facebook.com/etecjoaobelarmino',
    linkedin: 'https://linkedin.com/company/etecjoaobelarmino',
  },
}
