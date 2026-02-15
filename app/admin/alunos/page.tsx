'use client'

// Note: Metadata cannot be exported from Client Components.
// For now, I'll keep it as Client Component because of the state management for filtering.
// To have metadata, I'd need to split this into a page.tsx (Server) and a client-component.tsx.

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Plus,
  Search,
  MoreHorizontal,
  Mail,
  Phone,
  ExternalLink,
  Loader2,
  Trash2,
  Edit,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu'
import { Badge } from '@/src/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
} from '@/src/components/ui/card'

export default function AlunosListPage() {
  const [alunos, setAlunos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function loadAlunos() {
      try {
        const response = await fetch('/api/admin/alunos')
        if (response.ok) {
          const data = await response.json()
          setAlunos(data)
        }
      } catch (error) {
        console.error('Failed to load students', error)
      } finally {
        setLoading(false)
      }
    }
    loadAlunos()
  }, [])

  const filteredAlunos = alunos.filter(
    aluno =>
      aluno.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aluno.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aluno.carreira?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alunos</h1>
          <p className="text-muted-foreground">
            Gerencie todos os alunos cadastrados no sistema.
          </p>
        </div>
        <Button asChild className="gap-2">
          <Link href="/novo-aluno">
            <Plus className="h-4 w-4" />
            Novo Aluno
          </Link>
        </Button>
      </div>

      <Card className="glass-card">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome, email ou carreira..."
                className="pl-10 admin-input"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="h-10 px-4 py-2">
                Total: {filteredAlunos.length}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">
                Carregando alunos...
              </p>
            </div>
          ) : filteredAlunos.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <div className="bg-accent/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">Nenhum aluno encontrado</h3>
              <p className="text-sm text-muted-foreground">
                Tente ajustar sua busca ou cadastrar um novo aluno.
              </p>
              <Button
                asChild
                variant="outline"
                onClick={() => setSearchTerm('')}
              >
                <span className="cursor-pointer">Limpar busca</span>
              </Button>
            </div>
          ) : (
            <div className="rounded-md border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-[300px]">Aluno</TableHead>
                    <TableHead>Carreira / Turma</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Habilidades</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAlunos.map(aluno => (
                    <TableRow key={aluno.id} className="admin-table-row">
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-bold text-sm">
                            {aluno.nome}
                          </span>
                          <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                            {aluno.cidade || 'Cidade não inf.'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <Badge
                            variant="outline"
                            className="w-fit text-[10px] font-normal"
                          >
                            {aluno.carreira || 'Sem carreira'}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {aluno.ano || 'S/ Turma'} •{' '}
                            {aluno.turno || 'S/ Turno'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          {aluno.email && (
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Mail className="h-3 w-3" />
                              {aluno.email}
                            </div>
                          )}
                          {aluno.numero && (
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Phone className="h-3 w-3" />
                              {aluno.numero}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-[250px]">
                          {aluno.aluno_habilidade
                            ?.slice(0, 3)
                            .map((h: any, i: number) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="text-[10px] py-0 h-4"
                              >
                                {h.habilidade?.nome}
                              </Badge>
                            ))}
                          {aluno.aluno_habilidade?.length > 3 && (
                            <span className="text-[10px] text-muted-foreground">
                              +{aluno.aluno_habilidade.length - 3}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="gap-2">
                              <Edit className="h-4 w-4" /> Editar Aluno
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <ExternalLink className="h-4 w-4" /> Ver Perfil
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                              <Trash2 className="h-4 w-4" /> Excluir
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
