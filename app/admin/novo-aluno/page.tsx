import type { Metadata } from 'next'
import { Card, CardContent } from '@/src/components/ui/card'
import { NovoAlunoForm } from '@/src/components/admin/forms/novo-aluno-form'
import { UserPlus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Novo Aluno',
  description: 'Cadastro administrativo de aluno para o portal de TCC.',
}

export default function AdminNovoAlunoPage() {
  return (
    <div className="w-full space-y-8">
       <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <UserPlus className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Novo Aluno</h1>
            <p className="text-muted-foreground">Preencha os dados abaixo para criar um novo perfil de aluno.</p>
          </div>
       </div>
      
      <Card className="glass-card border-primary/10">
        <CardContent className="pt-6">
          <NovoAlunoForm />
        </CardContent>
      </Card>
    </div>
  )
}

