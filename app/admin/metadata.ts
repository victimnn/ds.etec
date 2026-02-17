import type { Metadata } from 'next'

export const adminMetadata: Metadata = {
  title: {
    default: 'Admin - DSEtecJB',
    template: '%s | Admin - DSEtecJB',
  },
  description: 'Painel administrativo para cadastro de alunos e TCCs.',
  icons: {
    icon: '/logo-ds.png',
    shortcut: '/logo-ds.png',
    apple: '/logo-ds.png',
  },
}
