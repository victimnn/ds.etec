'use client'

import * as React from 'react'
import Link from 'next/link'
import { useEffect, useState, type FormEvent } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Info,
  ChevronRight,
  ChevronLeft,
  Layout,
  FileText,
  Users,
  Video,
} from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import { Textarea } from '@/src/components/ui/textarea'
import { Progress } from '@/src/components/ui/progress'
import { MultiSelect } from '@/src/components/ui/multi-select'
import { cn } from '@/src/lib/utils'
import type { ApiResult } from '@/src/lib/api-result'
import {
  getCachedOrFetch,
  invalidateCacheByPrefix,
} from '@/src/lib/client-cache'

type CreateProjectResponse = ApiResult<{ id: number }>
type OptionItem = { id: number; nome: string | null }
type OptionsResponse = {
  professores: OptionItem[]
  categorias: OptionItem[]
  alunos: OptionItem[]
}

const OPTIONS_CACHE_KEY = 'admin:options'
const OPTIONS_CACHE_TTL_MS = 15 * 60 * 1000

export type TccFormInitialData = {
  nome?: string
  descricao?: string
  introducao?: string
  ano?: number | string
  categoriaId?: number | string
  professorId?: number | string
  github?: string
  deploy?: string
  video?: string
  foto?: string
  memberIds?: number[]
}

type NovoTccFormProps = {
  mode?: 'create' | 'edit'
  projectId?: number
  initialData?: TccFormInitialData | null
  cancelHref?: string
}

const STEPS = [
  { id: 1, title: 'Identidade', icon: Layout },
  { id: 2, title: 'Detalhes', icon: FileText },
  { id: 3, title: 'Equipe', icon: Users },
  { id: 4, title: 'Mídia & Links', icon: Video },
]

export function NovoTccForm({
  mode = 'create',
  projectId,
  initialData = null,
  cancelHref = '/projetos',
}: NovoTccFormProps) {
  const formRef = React.useRef<HTMLFormElement>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoadingOptions, setIsLoadingOptions] = useState(true)
  const [options, setOptions] = useState<OptionsResponse | null>(null)

  const [optionsError, setOptionsError] = useState<string | null>(null)
  const [submitResult, setSubmitResult] =
    useState<CreateProjectResponse | null>(null)

  const [selectedMembers, setSelectedMembers] = useState<string[]>([])
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  useEffect(() => {
    async function loadOptions() {
      setIsLoadingOptions(true)
      setOptionsError(null)
      try {
        const data = await getCachedOrFetch<OptionsResponse>({
          key: OPTIONS_CACHE_KEY,
          ttlMs: OPTIONS_CACHE_TTL_MS,
          fetcher: async () => {
            const response = await fetch('/api/admin/options')
            const payload = await response.json()
            if (!response.ok) {
              throw new Error(payload.error || 'Erro desconhecido na API')
            }
            return payload as OptionsResponse
          },
        })
        setOptions(data as OptionsResponse)
      } catch (err: any) {
        setOptionsError(
          err.message || 'Não foi possível carregar as opções do banco.'
        )
      } finally {
        setIsLoadingOptions(false)
      }
    }
    loadOptions()
  }, [])

  useEffect(() => {
    if (!initialData?.memberIds?.length) return
    setSelectedMembers(initialData.memberIds.map(id => String(id)))
  }, [initialData])

  useEffect(() => {
    if (mode !== 'edit') return

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!hasUnsavedChanges) return
      event.preventDefault()
      event.returnValue = ''
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [hasUnsavedChanges, mode])

  const validateCurrentStep = () => {
    if (!formRef.current) return false

    const currentStepContainer = formRef.current.querySelector(
      `div[data-step="${currentStep}"]`
    )
    if (!currentStepContainer) return true

    const inputs = currentStepContainer.querySelectorAll(
      'input, textarea, select'
    )
    let isStepValid = true

    inputs.forEach(input => {
      const el = input as HTMLInputElement
      if (!el.checkValidity()) {
        el.reportValidity()
        isStepValid = false
      }
    })

    // Validação extra para a equipe
    if (currentStep === 3) {
      if (selectedMembers.length === 0) {
        setSubmitResult({
          success: false,
          error: 'Por favor, selecione ao menos um integrante para o grupo.',
        })
        isStepValid = false
      }
    }

    return isStepValid
  }

  const nextStep = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length))
    }
  }

  const prevStep = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
      e.preventDefault()
      if (currentStep < STEPS.length) {
        nextStep()
      }
    }
  }

  const handleFormChange = () => {
    if (mode === 'edit') {
      setHasUnsavedChanges(true)
    }
  }

  async function handleFinalSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (currentStep < STEPS.length) return
    if (!validateCurrentStep()) return

    const form = event.currentTarget
    setIsSubmitting(true)
    setSubmitResult(null)

    const formData = new FormData(form)
    const payload = {
      ...Object.fromEntries(formData.entries()),
      memberIds: selectedMembers
        .map(id => Number.parseInt(id, 10))
        .filter(id => !Number.isNaN(id)),
      conquistasProfessor: [],
    }

    try {
      const endpoint =
        mode === 'edit' && projectId
          ? `/api/admin/projetos/${projectId}`
          : '/api/admin/projetos'
      const method = mode === 'edit' ? 'PATCH' : 'POST'
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as CreateProjectResponse

      if (!response.ok || !data.success) {
        const message = data.success
          ? 'Falha ao salvar no Supabase.'
          : data.error
        throw new Error(message)
      }

      setSubmitResult({ success: true, data: data.data })
      invalidateCacheByPrefix('admin:projetos:list')
      invalidateCacheByPrefix('admin:filters:anos')
      invalidateCacheByPrefix('admin:filters:turnos')
      setHasUnsavedChanges(false)
      if (mode === 'create') {
        form.reset()
        setSelectedMembers([])
        setCurrentStep(1)
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Falha na comunicação com o banco.'
      setSubmitResult({
        success: false,
        error: message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const progress = (currentStep / STEPS.length) * 100

  const RequiredLabel = ({
    children,
    htmlFor,
  }: {
    children: React.ReactNode
    htmlFor: string
  }) => (
    <Label htmlFor={htmlFor} className="text-sm font-semibold">
      {children} <span className="text-destructive">*</span>
    </Label>
  )

  return (
    <div className="space-y-6">
      {optionsError && (
        <Alert variant="destructive" className="animate-bounce">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro de Inicialização</AlertTitle>
          <AlertDescription>{optionsError}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        <div className="flex justify-between text-sm font-medium text-muted-foreground">
          <span>
            Passo {currentStep} de {STEPS.length}
          </span>
          <span>{Math.round(progress)}% Completo</span>
        </div>
        <Progress value={progress} className="h-2" />
        {mode === 'edit' && hasUnsavedChanges ? (
          <p className="text-xs font-medium text-amber-600">
            Existem alteracoes nao salvas neste formulario.
          </p>
        ) : null}
        <div className="flex justify-between px-2">
          {STEPS.map(step => {
            const Icon = step.icon
            const isActive = step.id === currentStep
            const isCompleted = step.id < currentStep
            return (
              <div
                key={step.id}
                className={cn(
                  'flex flex-col items-center gap-2 transition-colors',
                  isActive
                    ? 'text-primary'
                    : isCompleted
                      ? 'text-primary/60'
                      : 'text-muted-foreground/50'
                )}
              >
                <div
                  className={cn(
                    'p-2 rounded-full border-2',
                    isActive
                      ? 'border-primary bg-primary/10'
                      : isCompleted
                        ? 'border-primary/60'
                        : 'border-muted-foreground/20'
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider hidden sm:block">
                  {step.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleFinalSubmit}
        onKeyDown={handleKeyDown}
        onChange={handleFormChange}
        className="space-y-8 min-h-[400px]"
      >
        {/* Step 1: Identidade */}
        <div
          data-step="1"
          className={cn(
            'space-y-6 animate-in fade-in slide-in-from-right-4 duration-300',
            currentStep !== 1 && 'hidden'
          )}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <RequiredLabel htmlFor="nome">Nome do Projeto</RequiredLabel>
              <Input
                id="nome"
                name="nome"
                required
                className="admin-input h-11"
                placeholder="Ex: Sistema de Gestão Escolar"
                defaultValue={initialData?.nome || ''}
              />
            </div>
            <div className="space-y-2">
              <RequiredLabel htmlFor="ano">Ano de Conclusão</RequiredLabel>
              <Input
                id="ano"
                name="ano"
                type="number"
                min="2000"
                max="2100"
                placeholder="2026"
                required
                className="admin-input h-11"
                defaultValue={initialData?.ano ? String(initialData.ano) : ''}
              />
            </div>
            <div className="space-y-2">
              <RequiredLabel htmlFor="categoriaId">Categoria</RequiredLabel>
              <select
                id="categoriaId"
                name="categoriaId"
                required
                className="admin-input bg-background h-11 w-full rounded-md border px-3 text-sm focus:ring-2 focus:ring-primary/20"
                defaultValue={
                  initialData?.categoriaId
                    ? String(initialData.categoriaId)
                    : ''
                }
                disabled={isLoadingOptions}
              >
                <option value="">Selecionar categoria</option>
                {(options?.categorias || []).map(item => (
                  <option key={item.id} value={item.id}>
                    {item.nome || `ID ${item.id}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step 2: Detalhes */}
        <div
          data-step="2"
          className={cn(
            'space-y-6 animate-in fade-in slide-in-from-right-4 duration-300',
            currentStep !== 2 && 'hidden'
          )}
        >
          <div className="grid gap-6">
            <div className="space-y-2">
              <RequiredLabel htmlFor="descricao">Descrição Curta</RequiredLabel>
              <Textarea
                id="descricao"
                name="descricao"
                required
                rows={3}
                className="admin-input resize-none"
                placeholder="Uma frase impactante que resume o projeto..."
                defaultValue={initialData?.descricao || ''}
              />
            </div>
            <div className="space-y-2">
              <RequiredLabel htmlFor="introducao">
                Introdução / Resumo Completo
              </RequiredLabel>
              <Textarea
                id="introducao"
                name="introducao"
                required
                rows={8}
                className="admin-input resize-none"
                placeholder="Explique o problema, a solução e as tecnologias utilizadas..."
                defaultValue={initialData?.introducao || ''}
              />
            </div>
          </div>
        </div>

        {/* Step 3: Equipe */}
        <div
          data-step="3"
          className={cn(
            'space-y-6 animate-in fade-in slide-in-from-right-4 duration-300',
            currentStep !== 3 && 'hidden'
          )}
        >
          <div className="grid gap-6">
            <div className="space-y-2">
              <RequiredLabel htmlFor="professorId">
                Professor Orientador
              </RequiredLabel>
              <select
                id="professorId"
                name="professorId"
                required
                className="admin-input bg-background h-11 w-full rounded-md border px-3 text-sm focus:ring-2 focus:ring-primary/20"
                defaultValue={
                  initialData?.professorId
                    ? String(initialData.professorId)
                    : ''
                }
                disabled={isLoadingOptions}
              >
                <option value="">Selecionar professor</option>
                {(options?.professores || []).map(item => (
                  <option key={item.id} value={item.id}>
                    {item.nome || `ID ${item.id}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                Integrantes do Grupo <span className="text-destructive">*</span>{' '}
                <Info className="h-3 w-3 text-muted-foreground" />
              </Label>
              <MultiSelect
                options={(options?.alunos || []).map(a => ({
                  value: String(a.id),
                  label: a.nome || `ID ${a.id}`,
                }))}
                selected={selectedMembers}
                onChange={setSelectedMembers}
                placeholder="Selecione os integrantes..."
              />
            </div>
          </div>
        </div>

        {/* Step 4: Mídia & Links */}
        <div
          data-step="4"
          className={cn(
            'space-y-6 animate-in fade-in slide-in-from-right-4 duration-300',
            currentStep !== 4 && 'hidden'
          )}
        >
          <div className="grid gap-6">
            <div className="space-y-2">
              <Label htmlFor="foto" className="text-sm font-semibold">
                URL da Imagem de Capa
              </Label>
              <Input
                id="foto"
                name="foto"
                type="text"
                className="admin-input h-11"
                placeholder="https://..."
                defaultValue={initialData?.foto || ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                name="github"
                type="url"
            
                className="admin-input h-11"
                placeholder="https://github.com/..."
                defaultValue={initialData?.github || ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deploy">Deploy / Demo</Label>
              <Input
                id="deploy"
                name="deploy"
                type="url"
                className="admin-input h-11"
                placeholder="https://projeto.vercel.app"
                defaultValue={initialData?.deploy || ''}
              />
            </div>
            <div className="space-y-2">
              <RequiredLabel htmlFor="video">
                URL do Vídeo (YouTube/Vimeo)
              </RequiredLabel>
              <Input
                id="video"
                name="video"
                type="url"
                required
                className="admin-input h-11"
                placeholder="https://youtube.com/watch?v=..."
                defaultValue={initialData?.video || ''}
              />
            </div>
          </div>
        </div>

        {submitResult && !submitResult.success && (
          <Alert
            variant="destructive"
            className="animate-in fade-in zoom-in duration-300"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erro no Formulário</AlertTitle>
            <AlertDescription>{submitResult.error}</AlertDescription>
          </Alert>
        )}

        {submitResult && submitResult.success && (
          <Alert className="animate-in fade-in zoom-in duration-300 border-emerald-500/50 bg-emerald-500/5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <AlertTitle className="text-emerald-700">
              {mode === 'edit'
                ? 'Projeto atualizado com sucesso!'
                : 'Projeto criado com sucesso!'}
            </AlertTitle>
            <AlertDescription>
              {mode === 'edit'
                ? 'As alterações do TCC foram salvas.'
                : 'O TCC já está listado na galeria de projetos.'}
            </AlertDescription>
          </Alert>
        )}

        <div className="flex justify-between border-t pt-6">
          <div className="flex items-center gap-2">
            {mode === 'edit' ? (
              <Button type="button" variant="ghost" asChild>
                <Link href={cancelHref}>Cancelar</Link>
              </Button>
            ) : null}
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Voltar
            </Button>
          </div>

          {currentStep < STEPS.length ? (
            <Button type="button" onClick={nextStep}>
              Próximo <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting || isLoadingOptions}
              className="px-8 font-semibold transition-all hover:scale-105 active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Salvando...
                </>
              ) : (
                mode === 'edit' ? 'Salvar Alterações' : 'Finalizar Cadastro'
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
