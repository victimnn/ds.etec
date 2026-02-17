'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Plus,
  Search,
  MoreHorizontal,
  Mail,
  Phone,
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

export default function AlunosListPage() {
  const [alunos, setAlunos] = useState<any[]>([])
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
    context: 'alunos',
    defaultShift: 'Matutino',
  })

  useEffect(() => {
    if (!selectedYear) {
      setAlunos([])
      return
    }

    async function loadAlunos() {
      try {
        setLoadingList(true)
        setListError(null)

        const params = new URLSearchParams({ ano: selectedYear })
        if (selectedShift) {
          params.set('turno', selectedShift)
        }

        const response = await fetch(`/api/admin/alunos?${params.toString()}`)
        const payload = await response.json()
        if (!response.ok) {
          throw new Error(payload?.error || 'Erro ao carregar alunos.')
        }
        setAlunos(payload)
      } catch (error) {
        console.error('Failed to load students', error)
        setListError('Nao foi possivel carregar alunos para o ano selecionado.')
      } finally {
        setLoadingList(false)
      }
    }

    loadAlunos()
  }, [selectedYear, selectedShift])

  const isLoading = loadingYears || loadingShifts || loadingList
  const errorMessage = filtersError || listError

  const filteredAlunos = alunos.filter(
    aluno =>
      aluno.nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aluno.email?.toLowerCase().includes(searchTerm.toLowerCase())
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
          <AdminListFilters
            yearId="ano-alunos"
            shiftId="turno-alunos"
            years={years}
            shifts={shifts}
            selectedYear={selectedYear}
            selectedShift={selectedShift}
            searchTerm={searchTerm}
            total={filteredAlunos.length}
            searchPlaceholder="Buscar por nome, email ou carreira..."
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
              description="Escolha um ano para visualizar os alunos cadastrados."
            />
          ) : isLoading ? (
            <AdminListState loading title="" description="Carregando alunos..." />
          ) : errorMessage ? (
            <AdminListState title="Falha ao carregar" description={errorMessage} />
          ) : filteredAlunos.length === 0 ? (
            <AdminListState
              icon={<Search className="h-8 w-8 text-muted-foreground" />}
              title="Nenhum aluno encontrado"
              description="Tente ajustar sua busca ou cadastrar um novo aluno."
              actionLabel="Limpar busca"
              onAction={() => setSearchTerm('')}
            />
          ) : (
            <div className="rounded-md border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-[300px]">Aluno</TableHead>
                    <TableHead>Turma</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Habilidades</TableHead>
                    <TableHead className="text-right">Acoes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAlunos.map(aluno => (
                    <TableRow key={aluno.id} className="admin-table-row">
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-bold text-sm">{aluno.nome}</span>
                          <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                            {aluno.cidade || 'Cidade nao inf.'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-muted-foreground">
                            {aluno.ano || 'S/ Turma'} - {aluno.turno || 'S/ Turno'}
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
                        <Button asChild variant="outline" size="sm" className="mr-2">
                          <Link href={`/alunos/${aluno.id}`} className="gap-1">
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
                              <Link href={`/alunos/${aluno.id}`}>
                                <Edit className="h-4 w-4" /> Editar Aluno
                              </Link>
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
