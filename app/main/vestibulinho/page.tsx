import { VestibulinhoClient } from '@/src/components/main/vestibulinho/vestibulinho-client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vestibulinho 2026 | DS Etec',
  description:
    'Informações completas sobre o processo seletivo para o curso de Desenvolvimento de Sistemas.',
}

export default function VestibulinhoPage() {
  return <VestibulinhoClient />
}
