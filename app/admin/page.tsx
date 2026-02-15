import Link from 'next/link'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { Users, UserPlus, FolderPlus, ArrowRight, History, Star, Layout } from 'lucide-react'
import { DashboardStats } from '@/src/components/admin/dashboard-stats'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function AdminHomePage() {
  const cards = [
    {
      title: 'Cadastros base',
      description: 'Gerencie professores, categorias, conquistas, funções e habilidades.',
      icon: Users,
      href: '/cadastros',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Cadastrar aluno',
      description: 'Crie novos perfis de alunos para vinculação aos projetos de TCC.',
      icon: UserPlus,
      href: '/novo-aluno',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10'
    },
    {
      title: 'Cadastrar TCC',
      description: 'Crie projetos de TCC, vincule integrantes e defina orientadores.',
      icon: FolderPlus,
      href: '/novo-tcc',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ]

  return (
    <div className="w-full space-y-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Painel de Controle</h1>
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
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Card key={card.href} className="group hover:shadow-2xl transition-all duration-300 border-primary/10 hover:border-primary/30 glass-card">
              <CardHeader>
                <div className={`w-12 h-12 rounded-2xl ${card.bgColor} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <CardTitle className="text-xl">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full group/btn" variant="secondary">
                  <Link href={card.href} className="flex items-center justify-center gap-2">
                    Acessar
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <History className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Atividade Recente</CardTitle>
                <CardDescription>Últimas atualizações no sistema.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-accent/30 border border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                          DS
                        </div>
                        <div>
                          <p className="text-sm font-medium">Novo aluno cadastrado</p>
                          <p className="text-xs text-muted-foreground">Há 2 horas atrás</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 text-xs">Ver</Button>
                   </div>
                 ))}
              </div>
              <Button variant="link" className="w-full mt-4 text-xs text-muted-foreground">Ver todo o histórico</Button>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-yellow-500/10 rounded-lg">
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <CardTitle className="text-lg">Projetos em Destaque</CardTitle>
                <CardDescription>TCCs com melhor avaliação ou visualizações.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/10">
                   <p className="text-sm font-bold">BusHere - Sistema de Ônibus</p>
                   <p className="text-xs text-muted-foreground mt-1">Desenvolvido por: Turma 2024</p>
                   <div className="flex items-center gap-2 mt-3">
                      <div className="px-2 py-0.5 rounded text-[10px] bg-primary/20 text-primary font-medium">Web</div>
                      <div className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-600 font-medium">Ativo</div>
                   </div>
                </div>
                <div className="p-4 rounded-xl bg-accent/30 border border-border/50">
                   <p className="text-sm font-bold">Mão Robótica Educacional</p>
                   <p className="text-xs text-muted-foreground mt-1">Desenvolvido por: Turma 2023</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 text-xs">Explorar Galeria</Button>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}
