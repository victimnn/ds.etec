'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { FolderPlus, Loader2, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/src/components/ui/card'
import {
  NovoTccForm,
  type TccFormInitialData,
} from '@/src/components/admin/forms/novo-tcc-form'
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert'
import { AdminPageHeader } from '@/src/components/admin/admin-page-header'

export default function AdminEditarTccPage() {
  const params = useParams<{ id: string }>()
  const projectId = Number.parseInt(params.id || '', 10)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [initialData, setInitialData] = useState<TccFormInitialData | null>(
    null
  )

  useEffect(() => {
    if (!Number.isInteger(projectId) || projectId <= 0) {
      setError('ID de projeto inválido.')
      setLoading(false)
      return
    }

    async function loadProject() {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`/api/admin/projetos/${projectId}`, {
          cache: 'no-store',
        })
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.error || 'Falha ao carregar projeto.')
        }

        setInitialData({
          nome: data.nome || '',
          descricao: data.descricao || '',
          introducao: data.introducao || '',
          foto: data.foto || '',
          ano: data.ano || '',
          categoriaId: data.id_categoria || '',
          professorId: data.id_professor || '',
          github: data.github || '',
          deploy: data.deploy || '',
          video: data.video || '',
          memberIds: data.memberIds || [],
        })
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Erro ao carregar projeto.'
        setError(message)
      } finally {
        setLoading(false)
      }
    }

    loadProject()
  }, [projectId])

  return (
    <div className="w-full space-y-8">
      <AdminPageHeader
        icon={FolderPlus}
        title="Editar Projeto de TCC"
        description="Atualize os dados do projeto e seus integrantes."
        backHref="/projetos"
        backLabel="Voltar para listagem"
      />

      <Card className="glass-card border-primary/10">
        <CardContent className="pt-6">
          {loading ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Carregando dados do projeto...
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Falha ao carregar</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <NovoTccForm
              mode="edit"
              projectId={projectId}
              initialData={initialData}
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
