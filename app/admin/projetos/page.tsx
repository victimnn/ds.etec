'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Plus,
  MoreHorizontal,
  Github,
  Globe,
  Video,
  User,
  Layout,
  Calendar,
  ExternalLink,
  Trash2,
  Edit,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
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
import { Card, CardContent, CardHeader } from '@/src/components/ui/card'
import { AdminListFilters } from '@/src/components/admin/admin-list-filters'
import { AdminListState } from '@/src/components/admin/admin-list-state'
import { useAdminYearShiftFilters } from '@/src/hooks/use-admin-year-shift-filters'

export default function ProjetosListPage() {
  const [projetos, setProjetos] = useState<any[]>([])
  const [loadingList, setLoadingList] = useState(false)
  const [listError, setListError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const {
    years,
    shifts,
    selectedYear,
    selectedShift,
    loadingYears,
    loadingShifts,
    errorMessage: filtersError,
    setSelectedYear,
    setSelectedShift,
  } = useAdminYearShiftFilters({
    context: 'projetos',
    defaultShift: 'Matutino',
  })

  useEffect(() => {
    if (!selectedYear) {
      setProjetos([])
      return
    }

    async function loadProjetos() {
      try {
        setLoadingList(true)
        setListError(null)

        const params = new URLSearchParams({ ano: selectedYear })
        if (selectedShift) {
          params.set('turno', selectedShift)
        }

        const response = await fetch(`/api/admin/projetos?${params.toString()}`)
        const payload = await response.json()
        if (!response.ok) {
          throw new Error(payload?.error || 'Erro ao carregar projetos.')
        }
        setProjetos(payload)
      } catch (error) {
        console.error('Failed to load projects', error)
        setListError('Nao foi possivel carregar projetos para o ano selecionado.')
      } finally {
        setLoadingList(false)
      }
    }

    loadProjetos()
  }, [selectedYear, selectedShift])

  const isLoading = loadingYears || loadingShifts || loadingList
  const errorMessage = filtersError || listError

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
            Gerencie os projetos de conclusao de curso.
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
          <AdminListFilters
            yearId="ano-projetos"
            shiftId="turno-projetos"
            years={years}
            shifts={shifts}
            selectedYear={selectedYear}
            selectedShift={selectedShift}
            searchTerm={searchTerm}
            total={filteredProjetos.length}
            searchPlaceholder="Buscar por projeto, professor ou categoria..."
            loadingYears={loadingYears}
            loadingShifts={loadingShifts}
            onYearChange={value => {
              setSelectedYear(value)
              setSearchTerm('')
            }}
            onShiftChange={value => {
              setSelectedShift(value)
              setSearchTerm('')
            }}
            onSearchChange={setSearchTerm}
          />
        </CardHeader>
        <CardContent>
          {!selectedYear ? (
            <AdminListState
              title="Selecione um ano"
              description="Escolha um ano para visualizar os projetos cadastrados."
            />
          ) : isLoading ? (
            <AdminListState loading title="" description="Carregando projetos..." />
          ) : errorMessage ? (
            <AdminListState title="Falha ao carregar" description={errorMessage} />
          ) : filteredProjetos.length === 0 ? (
            <AdminListState
              icon={<Layout className="h-8 w-8 text-muted-foreground" />}
              title="Nenhum projeto encontrado"
              description="Tente ajustar sua busca ou cadastrar um novo TCC."
              actionLabel="Limpar busca"
              onAction={() => setSearchTerm('')}
            />
          ) : (
            <div className="rounded-md border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-[300px]">Projeto</TableHead>
                    <TableHead>Categoria / Ano</TableHead>
                    <TableHead>Professor / Integrantes</TableHead>
                    <TableHead>Links</TableHead>
                    <TableHead className="text-right">Acoes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjetos.map(projeto => (
                    <TableRow key={projeto.id} className="admin-table-row">
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-bold text-sm">{projeto.nome}</span>
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
                        <Button asChild variant="outline" size="sm" className="mr-2">
                          <Link href={`/projetos/${projeto.id}`} className="gap-1">
                            <Edit className="h-3.5 w-3.5" />
                            Editar
                          </Link>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuLabel>Acoes</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild className="gap-2">
                              <Link href={`/projetos/${projeto.id}`}>
                                <Edit className="h-4 w-4" /> Editar Projeto
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <ExternalLink className="h-4 w-4" /> Ver na Galeria
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
