'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { UserPlus, Loader2, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/src/components/ui/card'
import {
  NovoAlunoForm,
  type AlunoFormInitialData,
} from '@/src/components/admin/forms/novo-aluno-form'
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert'
import { AdminPageHeader } from '@/src/components/admin/admin-page-header'

export default function AdminEditarAlunoPage() {
  const params = useParams<{ id: string }>()
  const alunoId = Number.parseInt(params.id || '', 10)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [initialData, setInitialData] = useState<AlunoFormInitialData | null>(
    null
  )

  useEffect(() => {
    if (!Number.isInteger(alunoId) || alunoId <= 0) {
      setError('ID de aluno inválido.')
      setLoading(false)
      return
    }

    async function loadAluno() {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`/api/admin/alunos/${alunoId}`, {
          cache: 'no-store',
        })
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.error || 'Falha ao carregar aluno.')
        }

        setInitialData({
          nome: data.nome || '',
          descricao: data.descricao || '',
          foto: data.foto || '',
          carreira: data.carreira || '',
          cidade: data.cidade || '',
          turno: data.turno || '',
          ano: data.ano || '',
          linkedin: data.linkedin || '',
          email: data.email || '',
          numero: data.numero || '',
          github: data.github || '',
          site: data.site || '',
          conquistas: data.conquistas || [],
          funcoes: data.funcoes || [],
          especializacoes: data.especializacoes || [],
          habilidades: data.habilidades || [],
        })
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Erro ao carregar aluno.'
        setError(message)
      } finally {
        setLoading(false)
      }
    }

    loadAluno()
  }, [alunoId])

  return (
    <div className="w-full space-y-8">
      <AdminPageHeader
        icon={UserPlus}
        title="Editar Aluno"
        description="Atualize os dados do perfil do aluno."
        backHref="/alunos"
        backLabel="Voltar para listagem"
      />

      <Card className="glass-card border-primary/10">
        <CardContent className="pt-6">
          {loading ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Carregando dados do aluno...
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Falha ao carregar</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <NovoAlunoForm
              mode="edit"
              alunoId={alunoId}
              initialData={initialData}
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
