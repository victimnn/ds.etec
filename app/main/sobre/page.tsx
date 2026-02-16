import { SobreClient } from '@/src/components/main/sobre/sobre-client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre o Curso | DS Etec',
  description:
    'Conheça a história, a matriz curricular e a excelência acadêmica do curso de Desenvolvimento de Sistemas.',
}

export default function SobrePage() {
  return <SobreClient />
}
