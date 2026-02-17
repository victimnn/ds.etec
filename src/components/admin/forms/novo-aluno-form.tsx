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
  User,
  GraduationCap,
  Link as LinkIcon,
  Trophy,
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

type CreateAlunoResponse = ApiResult<{ id: number }>
type OptionItem = { id: number; nome: string | null }
type OptionsResponse = {
  funcoes: OptionItem[]
  especializacoes: OptionItem[]
  habilidades: OptionItem[]
}

const OPTIONS_CACHE_KEY = 'admin:options'
const OPTIONS_CACHE_TTL_MS = 15 * 60 * 1000

export type AlunoFormInitialData = {
  nome?: string
  email?: string
  numero?: string
  cidade?: string
  carreira?: string
  turno?: string
  ano?: string
  linkedin?: string
  github?: string
  site?: string
  foto?: string
  descricao?: string
  conquistas?: string[]
  funcoes?: string[]
  especializacoes?: string[]
  habilidades?: string[]
}

type NovoAlunoFormProps = {
  mode?: 'create' | 'edit'
  alunoId?: number
  initialData?: AlunoFormInitialData | null
  cancelHref?: string
}

const STEPS = [
  { id: 1, title: 'Dados Pessoais', icon: User },
  { id: 2, title: 'Acadêmico', icon: GraduationCap },
  { id: 3, title: 'Links & Bio', icon: LinkIcon },
  { id: 4, title: 'Competências', icon: Trophy },
]

export function NovoAlunoForm({
  mode = 'create',
  alunoId,
  initialData = null,
  cancelHref = '/alunos',
}: NovoAlunoFormProps) {
  const formRef = React.useRef<HTMLFormElement>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoadingOptions, setIsLoadingOptions] = useState(true)
  const [options, setOptions] = useState<OptionsResponse | null>(null)

  const [optionsError, setOptionsError] = useState<string | null>(null)
  const [submitResult, setSubmitResult] = useState<CreateAlunoResponse | null>(
    null
  )

  const [selectedFuncoes, setSelectedFuncoes] = useState<string[]>([])
  const [selectedEspecializacoes, setSelectedEspecializacoes] = useState<
    string[]
  >([])
  const [selectedHabilidades, setSelectedHabilidades] = useState<string[]>([])

  const [phone, setPhone] = useState('')
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
      } catch (error) {
        console.error('Failed to load options:', error)
        setOptionsError(
          'Não foi possível carregar as listas de Habilidades/Funções. Recarregue a página.'
        )
      } finally {
        setIsLoadingOptions(false)
      }
    }
    loadOptions()
  }, [])

  useEffect(() => {
    if (!initialData) return

    setSelectedFuncoes(initialData.funcoes || [])
    setSelectedEspecializacoes(initialData.especializacoes || [])
    setSelectedHabilidades(initialData.habilidades || [])
    setPhone(formatPhone(initialData.numero || ''))
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

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').substring(0, 11)
    let formatted = digits
    if (digits.length > 0) {
      formatted = `(${digits.substring(0, 2)}`
      if (digits.length > 2) {
        formatted += `) ${digits.substring(2, 7)}`
        if (digits.length > 7) {
          formatted += `-${digits.substring(7, 11)}`
        }
      }
    }
    return formatted
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const formatted = formatPhone(rawValue)
    setPhone(formatted)

    // Validação em tempo real para o balão do navegador
    const digits = rawValue.replace(/\D/g, '')
    if (digits.length > 0 && digits.length < 11) {
      e.target.setCustomValidity(
        'O telefone deve ter exatamente 11 dígitos (DDD + 9 + número).'
      )
    } else {
      e.target.setCustomValidity('')
    }
  }

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

    // Validação específica para o telefone no Passo 1
    if (currentStep === 1) {
      const phoneDigits = phone.replace(/\D/g, '')
      const phoneInput = formRef.current.querySelector(
        '#numero'
      ) as HTMLInputElement
      if (phoneDigits.length > 0 && phoneDigits.length !== 11) {
        phoneInput?.setCustomValidity(
          'O telefone deve ter exatamente 11 dígitos.'
        )
        phoneInput?.reportValidity()
        return false
      }
      phoneInput?.setCustomValidity('')
    }

    inputs.forEach(input => {
      const el = input as HTMLInputElement
      if (!el.checkValidity()) {
        el.reportValidity()
        isStepValid = false
      }
    })

    if (currentStep === 4) {
      if (
        selectedFuncoes.length === 0 ||
        selectedEspecializacoes.length === 0 ||
        selectedHabilidades.length === 0
      ) {
        setSubmitResult({
          success: false,
          error:
            'Selecione ao menos uma opção em Funções, Especializações e Habilidades.',
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
      if (currentStep < STEPS.length) nextStep()
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
      funcoes: selectedFuncoes,
      especializacoes: selectedEspecializacoes,
      habilidades: selectedHabilidades,
      conquistas: String(formData.get('conquistas') || ''),
      numero: phone.replace(/\D/g, ''),
    }

    try {
      const endpoint =
        mode === 'edit' && alunoId
          ? `/api/admin/alunos/${alunoId}`
          : '/api/admin/alunos'
      const method = mode === 'edit' ? 'PATCH' : 'POST'
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as CreateAlunoResponse

      if (!response.ok || !data.success) {
        const message = data.success
          ? 'Falha ao salvar no Supabase.'
          : data.error
        throw new Error(message)
      }

      setSubmitResult({ success: true, data: data.data })
      invalidateCacheByPrefix('admin:options')
      invalidateCacheByPrefix('admin:alunos:list')
      invalidateCacheByPrefix('admin:projetos:list')
      invalidateCacheByPrefix('admin:filters:anos')
      invalidateCacheByPrefix('admin:filters:turnos')
      setHasUnsavedChanges(false)
      if (mode === 'create') {
        form.reset()
        setPhone('')
        setSelectedFuncoes([])
        setSelectedEspecializacoes([])
        setSelectedHabilidades([])
        setCurrentStep(1)
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro de conexão.'
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
        {/* Step 1: Dados Pessoais */}
        <div
          data-step="1"
          className={cn(
            'space-y-6 animate-in fade-in slide-in-from-right-4 duration-300',
            currentStep !== 1 && 'hidden'
          )}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <RequiredLabel htmlFor="nome">Nome Completo</RequiredLabel>
              <Input
                id="nome"
                name="nome"
                required
                className="admin-input h-11"
                placeholder="Ex: Victor Ramos"
                defaultValue={initialData?.nome || ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                className="admin-input h-11"
                placeholder="aluno@etec.sp.gov.br"
                defaultValue={initialData?.email || ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="numero" className="text-sm font-semibold">
                WhatsApp / Telefone
              </Label>
              <Input
                id="numero"
                name="numero"
                className="admin-input h-11"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={15}
              />
              <p className="text-[10px] text-muted-foreground italic">
                Exatamente 11 dígitos com DDD
              </p>
            </div>
            <div className="space-y-2">
              <RequiredLabel htmlFor="cidade">Cidade</RequiredLabel>
              <Input
                id="cidade"
                name="cidade"
                required
                className="admin-input h-11"
                placeholder="Ex: Americana"
                defaultValue={initialData?.cidade || ''}
              />
            </div>
          </div>
        </div>

        {/* Step 2: Acadêmico */}
        <div
          data-step="2"
          className={cn(
            'space-y-6 animate-in fade-in slide-in-from-right-4 duration-300',
            currentStep !== 2 && 'hidden'
          )}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="carreira">Carreira Alvo</Label>
              <Input
                id="carreira"
                name="carreira"
                className="admin-input h-11"
                placeholder="Ex: Desenvolvedor Fullstack"
                defaultValue={initialData?.carreira || ''}
                maxLength={500}
              />
            </div>
            <div className="space-y-2">
              <RequiredLabel htmlFor="turno">Turno</RequiredLabel>
              <select
                id="turno"
                name="turno"
                required
                className="admin-input bg-background h-11 w-full rounded-md border px-3 text-sm focus:ring-2 focus:ring-primary/20"
                defaultValue={initialData?.turno || ''}
              >
                <option value="" disabled>
                  Selecionar turno
                </option>
                <option value="Matutino">Matutino</option>
                <option value="Vespertino">Vespertino</option>
              </select>
            </div>
            <div className="space-y-2">
              <RequiredLabel htmlFor="ano">Ano</RequiredLabel>
              <Input
                id="ano"
                name="ano"
                required
                className="admin-input h-11"
                placeholder="Ex: 3º M-DS"
                defaultValue={initialData?.ano || ''}
              />
            </div>
          </div>
        </div>

        {/* Step 3: Links & Bio */}
        <div
          data-step="3"
          className={cn(
            'space-y-6 animate-in fade-in slide-in-from-right-4 duration-300',
            currentStep !== 3 && 'hidden'
          )}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                name="linkedin"
                type="url"
                className="admin-input h-11"
                placeholder="https://linkedin.com/in/..."
                defaultValue={initialData?.linkedin || ''}
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
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="site">Portfolio / Website</Label>
              <Input
                id="site"
                name="site"
                type="url"
                className="admin-input h-11"
                placeholder="https://meusite.com"
                defaultValue={initialData?.site || ''}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="foto" className="text-sm font-semibold">
                URL da Foto
              </Label>
              <Input
                id="foto"
                name="foto"
                type="text"
                className="admin-input h-11"
                placeholder="https://... ou /alunos/foto.jpg"
                defaultValue={initialData?.foto || ''}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="descricao">Descrição / Bio</Label>
              <Textarea
                id="descricao"
                name="descricao"
                rows={6}
                className="admin-input resize-none"
                placeholder="Conte um pouco sobre suas experiências e objetivos..."
                defaultValue={initialData?.descricao || ''}
              />
            </div>
          </div>
        </div>

        {/* Step 4: Competências */}
        <div
          data-step="4"
          className={cn(
            'space-y-6 animate-in fade-in slide-in-from-right-4 duration-300',
            currentStep !== 4 && 'hidden'
          )}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                Funções <span className="text-destructive">*</span>{' '}
                <Info className="h-3 w-3 text-muted-foreground" />
              </Label>
              <MultiSelect
                options={(options?.funcoes || []).map(f => ({
                  value: f.nome || '',
                  label: f.nome || '',
                }))}
                selected={selectedFuncoes}
                onChange={setSelectedFuncoes}
                placeholder="Selecione as funções..."
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                Especializações <span className="text-destructive">*</span>{' '}
                <Info className="h-3 w-3 text-muted-foreground" />
              </Label>
              <MultiSelect
                options={(options?.especializacoes || []).map(e => ({
                  value: e.nome || '',
                  label: e.nome || '',
                }))}
                selected={selectedEspecializacoes}
                onChange={setSelectedEspecializacoes}
                placeholder="Selecione as especializações..."
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold flex items-center gap-2">
                Habilidades <span className="text-destructive">*</span>{' '}
                <Info className="h-3 w-3 text-muted-foreground" />
              </Label>
              <MultiSelect
                options={(options?.habilidades || []).map(h => ({
                  value: h.nome || '',
                  label: h.nome || '',
                }))}
                selected={selectedHabilidades}
                onChange={setSelectedHabilidades}
                placeholder="Selecione as habilidades..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="conquistas">Conquistas</Label>
              <Input
                id="conquistas"
                name="conquistas"
                className="admin-input h-11"
                placeholder="Feira de ciências, Hackathon, Monitoria"
                defaultValue={initialData?.conquistas?.join(', ') || ''}
              />
              <p className="text-[10px] text-muted-foreground">
                Separe por vírgula
              </p>
            </div>
          </div>
        </div>

        {/* Alerta de Resultado da Submissão */}
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
                ? 'Aluno atualizado com sucesso!'
                : 'Aluno criado com sucesso!'}
            </AlertTitle>
            <AlertDescription>
              {mode === 'edit'
                ? 'As alterações do perfil foram salvas.'
                : 'O perfil já está disponível para vinculação a projetos.'}
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
