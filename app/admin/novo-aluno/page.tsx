import type { Metadata } from 'next'
import { Card, CardContent } from '@/src/components/ui/card'
import { NovoAlunoForm } from '@/src/components/admin/forms/novo-aluno-form'
import { UserPlus } from 'lucide-react'
import { AdminPageHeader } from '@/src/components/admin/admin-page-header'

export const metadata: Metadata = {
  title: 'Novo Aluno',
  description: 'Cadastro administrativo de aluno para o portal de TCC.',
}

export default function AdminNovoAlunoPage() {
  return (
    <div className="w-full space-y-8">
      <AdminPageHeader
        icon={UserPlus}
        title="Novo Aluno"
        description="Preencha os dados abaixo para criar um novo perfil de aluno."
        backHref="/alunos"
        backLabel="Voltar para listagem"
      />

      <Card className="glass-card border-primary/10">
        <CardContent className="pt-6">
          <NovoAlunoForm />
        </CardContent>
      </Card>
    </div>
  )
}
