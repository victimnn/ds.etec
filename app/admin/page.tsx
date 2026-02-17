import Link from 'next/link'
import { Metadata } from 'next'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import {
  Users,
  UserPlus,
  FolderPlus,
  ArrowRight,
  History,
  Star,
} from 'lucide-react'
import { DashboardStats } from '@/src/components/admin/dashboard-stats'

export default function AdminHomePage() {
  const cards = [
    {
      title: 'Cadastros base',
      description:
        'Gerencie professores, categorias, conquistas, funções e habilidades.',
      icon: Users,
      href: '/cadastros',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Cadastrar aluno',
      description:
        'Crie novos perfis de alunos para vinculação aos projetos de TCC.',
      icon: UserPlus,
      href: '/novo-aluno',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      title: 'Cadastrar TCC',
      description:
        'Crie projetos de TCC, vincule integrantes e defina orientadores.',
      icon: FolderPlus,
      href: '/novo-tcc',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ]

  return (
    <div className="w-full space-y-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">
            Painel de Controle
          </h1>
          <p className="text-muted-foreground">
            Visão geral do sistema acadêmico DS Etec.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/cadastros">Configurações</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/novo-tcc">Novo Projeto</Link>
          </Button>
        </div>
      </div>

      <DashboardStats />

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map(card => {
          const Icon = card.icon
          return (
            <Card
              key={card.href}
              className="group hover:shadow-2xl transition-all duration-300 border-primary/10 hover:border-primary/30 glass-card"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-2xl ${card.bgColor} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <CardTitle className="text-xl">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full group/btn"
                  variant="secondary"
                >
                  <Link
                    href={card.href}
                    className="flex items-center justify-center gap-2"
                  >
                    Acessar
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

    </div>
  )
}
