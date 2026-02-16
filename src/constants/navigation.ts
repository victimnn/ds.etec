import { MAIN_SITE_URL } from '@/src/lib/site-urls'
import { institutionContact } from '@/src/constants/institution'
import { NavigationItem } from '@/src/types'

export const navigationItems: NavigationItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre o Curso', href: '/sobre' },
  { name: 'Projetos', href: '/projetos' },
  // { name: 'Vestibulinho', href: '/vestibulinho' },
  { name: 'Mercado de Trabalho', href: '/mercado' },
  { name: 'Contato', href: '/contato' },
]

export const siteConfig = {
  name: 'Desenvolvimento de Sistemas',
  institution: 'Etec Joao Belarmino',
  description:
    'Curso Tecnico em Desenvolvimento de Sistemas integrado ao Ensino Medio',
  url: MAIN_SITE_URL,
  ogImage: '/logo-ds.png',
  links: {
    instagram: institutionContact.socialLinks.instagramCourse,
  },
}
