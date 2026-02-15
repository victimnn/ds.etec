import type { Metadata } from 'next'
import { BaseCadastros } from '@/src/components/admin/base-cadastros'
import { Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cadastros Base',
  description:
    'Cadastros administrativos de professores, categorias, conquistas, funcoes, especializacoes e habilidades.',
}

export default function AdminCadastrosPage() {
  return (
    <div className="w-full space-y-8">
      <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Cadastros Base</h1>
            <p className="text-muted-foreground">Gerencie as informações fundamentais que alimentam os outros formulários do sistema.</p>
          </div>
      </div>
      <BaseCadastros />
    </div>
  )
}

