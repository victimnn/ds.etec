import type { Metadata } from 'next'
import { Card, CardContent } from '@/src/components/ui/card'
import { NovoTccForm } from '@/src/components/admin/forms/novo-tcc-form'
import { FolderPlus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Novo TCC',
  description: 'Cadastro administrativo de projeto de TCC.',
}

export default function AdminNovoTccPage() {
  return (
    <div className="w-full space-y-8">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-2xl">
          <FolderPlus className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Novo Projeto de TCC
          </h1>
          <p className="text-muted-foreground">
            Registre um novo trabalho de conclusão de curso e vincule seus
            membros.
          </p>
        </div>
      </div>

      <Card className="glass-card border-primary/10">
        <CardContent className="pt-6">
          <NovoTccForm />
        </CardContent>
      </Card>
    </div>
  )
}
