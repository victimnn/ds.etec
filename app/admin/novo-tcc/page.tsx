import type { Metadata } from 'next'
import { FolderPlus } from 'lucide-react'
import { Card, CardContent } from '@/src/components/ui/card'
import { NovoTccForm } from '@/src/components/admin/forms/novo-tcc-form'
import { AdminPageHeader } from '@/src/components/admin/admin-page-header'

export const metadata: Metadata = {
  title: 'Novo TCC',
  description: 'Cadastro administrativo de projeto de TCC.',
}

export default function AdminNovoTccPage() {
  return (
    <div className="w-full space-y-8">
      <AdminPageHeader
        icon={FolderPlus}
        title="Novo Projeto de TCC"
        description="Registre um novo trabalho de conclusao de curso e vincule seus membros."
        backHref="/projetos"
        backLabel="Voltar para listagem"
      />

      <Card className="glass-card border-primary/10">
        <CardContent className="pt-6">
          <NovoTccForm />
        </CardContent>
      </Card>
    </div>
  )
}
