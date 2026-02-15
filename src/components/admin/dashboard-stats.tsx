'use client'

import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Users, GraduationCap, Trophy, Layout } from 'lucide-react'
import { cn } from '@/src/lib/utils'

type Stats = {
  professores: number
  categorias: number
  alunos: number
  conquistas: number
}

export function DashboardStats() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await fetch('/api/admin/options')
        if (response.ok) {
          const data = await response.json()
          setStats({
            professores: data.professores?.length || 0,
            categorias: data.categorias?.length || 0,
            alunos: data.alunos?.length || 0,
            conquistas: data.conquistas?.length || 0,
          })
        }
      } catch (error) {
        console.error('Failed to load stats', error)
      } finally {
        setLoading(false)
      }
    }
    loadStats()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <Card key={i} className="glass-card animate-pulse">
            <CardHeader className="h-24" />
          </Card>
        ))}
      </div>
    )
  }

  const items = [
    {
      title: 'Total de Alunos',
      value: stats?.alunos || 0,
      icon: GraduationCap,
      description: 'Alunos cadastrados',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Professores',
      value: stats?.professores || 0,
      icon: Users,
      description: 'Orientadores ativos',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Categorias',
      value: stats?.categorias || 0,
      icon: Layout,
      description: 'Áreas de projetos',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      title: 'Conquistas',
      value: stats?.conquistas || 0,
      icon: Trophy,
      description: 'Prêmios registrados',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(item => (
        <Card
          key={item.title}
          className="glass-card border-primary/5 hover:border-primary/20 transition-all duration-300 group"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {item.title}
            </CardTitle>
            <div
              className={cn(
                item.bgColor,
                'p-2 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3'
              )}
            >
              <item.icon className={cn('h-4 w-4', item.color)} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">
              {item.value}
            </div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-primary/40"></span>
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
