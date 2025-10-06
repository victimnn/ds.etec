import { NavigationItem } from '@/types'

export const navigationItems: NavigationItem[] = [
  { name: 'Início', href: '/' },
  { name: 'Sobre o Curso', href: '/sobre' },
  { name: 'Projetos', href: '/projetos' },
  { name: 'Vestibulinho', href: '/vestibulinho' },
  { name: 'Mercado de Trabalho', href: '/mercado' },
  { name: 'Contato', href: '/contato' },
  { name: 'Personal', href: '/personal' },
]

export const siteConfig = {
  name: 'Desenvolvimento de Sistemas',
  institution: 'Etec João Belarmino',
  description: 'Curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio',
  url: 'https://dsetec.vercel.app',
  ogImage: '/LOGODS.png',
  links: {
    instagram: 'https://www.instagram.com/ds.etec',
  },
}
