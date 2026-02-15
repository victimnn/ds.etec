import { MercadoClient } from '@/src/components/main/mercado/mercado-client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mercado de Trabalho | DS Etec',
  description:
    'Descubra as oportunidades de carreira e as empresas parceiras que contratam nossos alunos.',
}

export default function MercadoPage() {
  return <MercadoClient />
}
