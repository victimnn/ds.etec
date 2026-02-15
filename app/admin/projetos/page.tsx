'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Plus,
  Search,
  MoreHorizontal,
  Github,
  Globe,
  Video,
  User,
  Layout,
  Calendar,
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

export default function ProjetosListPage() {
  const [projetos, setProjetos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function loadProjetos() {
      try {
        const response = await fetch('/api/admin/projetos')
        if (response.ok) {
          const data = await response.json()
          setProjetos(data)
        }
      } catch (error) {
        console.error('Failed to load projects', error)
      } finally {
        setLoading(false)
      }
    }
    loadProjetos()
  }, [])

  const filteredProjetos = projetos.filter(
    projeto =>
      projeto.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projeto.professor?.nome
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      projeto.categoria?.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projetos TCC</h1>
          <p className="text-muted-foreground">
            Gerencie os projetos de conclusão de curso.
          </p>
        </div>
        <Button asChild className="gap-2">
          <Link href="/novo-tcc">
            <Plus className="h-4 w-4" />
            Novo Projeto
          </Link>
        </Button>
      </div>

      <Card className="glass-card">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por projeto, professor ou categoria..."
                className="pl-10 admin-input"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="h-10 px-4 py-2">
                Total: {filteredProjetos.length}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">
                Carregando projetos...
              </p>
            </div>
          ) : filteredProjetos.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <div className="bg-accent/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Layout className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">Nenhum projeto encontrado</h3>
              <p className="text-sm text-muted-foreground">
                Tente ajustar sua busca ou cadastrar um novo TCC.
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
                    <TableHead className="w-[300px]">Projeto</TableHead>
                    <TableHead>Categoria / Ano</TableHead>
                    <TableHead>Professor / Integrantes</TableHead>
                    <TableHead>Links</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjetos.map(projeto => (
                    <TableRow key={projeto.id} className="admin-table-row">
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-bold text-sm">
                            {projeto.nome}
                          </span>
                          <span className="text-xs text-muted-foreground line-clamp-1 max-w-[250px]">
                            {projeto.descricao}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <Badge
                            variant="outline"
                            className="w-fit text-[10px] font-normal"
                          >
                            {projeto.categoria?.nome || 'Geral'}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {projeto.ano}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1.5 text-xs font-medium">
                            <User className="h-3 w-3 text-primary" />
                            {projeto.professor?.nome}
                          </div>
                          <div className="text-[10px] text-muted-foreground">
                            {projeto.aluno_tcc?.length || 0} integrantes
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {projeto.github && (
                            <Link
                              href={projeto.github}
                              target="_blank"
                              className="p-1.5 rounded-md bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                            >
                              <Github className="h-3.5 w-3.5" />
                            </Link>
                          )}
                          {projeto.deploy && (
                            <Link
                              href={projeto.deploy}
                              target="_blank"
                              className="p-1.5 rounded-md bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                            >
                              <Globe className="h-3.5 w-3.5" />
                            </Link>
                          )}
                          {projeto.video && (
                            <Link
                              href={projeto.video}
                              target="_blank"
                              className="p-1.5 rounded-md bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
                            >
                              <Video className="h-3.5 w-3.5" />
                            </Link>
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
                              <Edit className="h-4 w-4" /> Editar Projeto
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <ExternalLink className="h-4 w-4" /> Ver na
                              Galeria
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
