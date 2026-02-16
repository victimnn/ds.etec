'use client'

import { useEffect, useState, type FormEvent } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  User,
  Trophy,
  Tag,
  Briefcase,
  GraduationCap,
  Code,
  Trash2,
  Plus,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/src/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'

type OptionItem = { id: number; nome: string | null }

type OptionsResponse = {
  professores: OptionItem[]
  categorias: OptionItem[]
  funcoes: OptionItem[]
  especializacoes: OptionItem[]
  habilidades: OptionItem[]
}

type SubmitState = {
  success: boolean
  message: string
}

export function BaseCadastros() {
  const [options, setOptions] = useState<OptionsResponse | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<string | null>(null)
  const [state, setState] = useState<SubmitState | null>(null)

  async function loadOptions({
    silentError = false,
  }: { silentError?: boolean } = {}) {
    try {
      const response = await fetch('/api/admin/options', { cache: 'no-store' })
      if (!response.ok) {
        throw new Error('Falha ao carregar opcoes.')
      }
      setOptions((await response.json()) as OptionsResponse)
    } catch {
      if (!silentError) {
        setState({
          success: false,
          message: 'Nao foi possivel carregar opcoes do banco.',
        })
      }
    }
  }

  useEffect(() => {
    loadOptions()
  }, [])

  async function submitForm(
    formId: string,
    endpoint: string,
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()
    const form = event.currentTarget
    setIsSubmitting(formId)
    setState(null)

    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const rawBody = await response.text()
      let body: { error?: string; success?: boolean } = {}
      if (rawBody) {
        try {
          body = JSON.parse(rawBody) as { error?: string; success?: boolean }
        } catch {
          body = {}
        }
      }

      if (!response.ok) {
        setState({
          success: false,
          message: body.error || 'Falha ao salvar registro.',
        })
        return
      }

      setState({ success: true, message: 'Cadastro realizado com sucesso.' })
      form.reset()
    } catch {
      setState({ success: false, message: 'Erro de rede ao salvar registro.' })
    } finally {
      setIsSubmitting(null)
    }

    await loadOptions({ silentError: true })
  }

  async function deleteItem(endpoint: string, id: number) {
    if (!confirm('Tem certeza que deseja excluir este item?')) return

    try {
      const response = await fetch(`${endpoint}?id=${id}`, { method: 'DELETE' })
      if (response.ok) {
        setState({ success: true, message: 'Item excluído com sucesso.' })
        await loadOptions()
      } else {
        setState({
          success: false,
          message: 'Falha ao excluir item. Ele pode estar sendo usado.',
        })
      }
    } catch {
      setState({ success: false, message: 'Erro de rede ao excluir.' })
    }
  }

  const namedForms = [
    {
      id: 'categoria',
      title: 'Categoria',
      endpoint: '/api/admin/categorias',
      icon: Tag,
      description: 'Categorias de projetos (Web, Mobile, etc)',
      data: options?.categorias,
    },
    {
      id: 'funcao',
      title: 'Função',
      endpoint: '/api/admin/funcoes',
      icon: Briefcase,
      description: 'Papéis dos alunos nos grupos',
      data: options?.funcoes,
    },
    {
      id: 'especializacao',
      title: 'Especialização',
      endpoint: '/api/admin/especializacoes',
      icon: GraduationCap,
      description: 'Áreas de atuação acadêmica',
      data: options?.especializacoes,
    },
    {
      id: 'habilidade',
      title: 'Habilidade',
      endpoint: '/api/admin/habilidades',
      icon: Code,
      description: 'Tecnologias e soft skills',
      data: options?.habilidades,
    },
  ]

  return (
    <div className="space-y-8 pb-12">
      {state && (
        <Alert
          variant={state.success ? 'default' : 'destructive'}
          className="animate-in fade-in slide-in-from-top-2 duration-300"
        >
          {state.success ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <AlertTitle>{state.success ? 'Sucesso' : 'Erro'}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Professor</CardTitle>
                <CardDescription>
                  Cadastre orientadores para os projetos de TCC.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form
              className="grid md:grid-cols-2 gap-4"
              onSubmit={event =>
                submitForm('professor', '/api/admin/professores', event)
              }
            >
              <div className="space-y-2">
                <Input
                  name="nome"
                  placeholder="Nome completo"
                  required
                  className="admin-input"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email institucional"
                  className="admin-input"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="area"
                  placeholder="Área de atuação"
                  className="admin-input"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="linkedin"
                  type="url"
                  placeholder="URL do LinkedIn"
                  className="admin-input"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Input
                  name="foto"
                  type="url"
                  placeholder="URL da foto (perfil)"
                  className="admin-input"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Input
                  name="conquistas"
                  placeholder="Conquistas (Ex: Mestre, Doutor, Certificações - Separe por vírgula)"
                  className="admin-input"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Textarea
                  name="descricao"
                  placeholder="Breve biografia ou descrição profissional"
                  rows={3}
                  className="admin-input"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting === 'professor'}
                className="md:col-span-2"
              >
                {isSubmitting === 'professor' && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Salvar Professor
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/10 rounded-lg">
                <Trophy className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <CardTitle>Dica de Conquistas</CardTitle>
                <CardDescription>Como formatar conquistas</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              As conquistas devem ser inseridas como texto separado por
              vírgulas. Elas aparecerão como tags nos perfis.
            </p>
            <div className="p-3 bg-accent/50 rounded-lg text-xs font-mono">
              &quot;Mestre em Computação, 10 anos de Etec, Especialista React&quot;
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {namedForms.map(item => (
          <Card key={item.id} className="glass-card flex flex-col">
            <CardHeader className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="h-4 w-4 text-primary" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </div>
              <CardDescription className="text-xs">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-3 mb-4"
                onSubmit={event => submitForm(item.id, item.endpoint, event)}
              >
                <div className="flex gap-2">
                  <Input
                    name="nome"
                    placeholder={`Nova ${item.title.toLowerCase()}`}
                    required
                    className="admin-input text-sm"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting === item.id}
                    size="sm"
                  >
                    {isSubmitting === item.id ? (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    ) : (
                      <Plus className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </form>

              <div className="space-y-1 max-h-[200px] overflow-y-auto pr-2 scrollbar-thin">
                {item.data?.map(val => (
                  <div
                    key={val.id}
                    className="flex items-center justify-between p-2 rounded bg-accent/30 hover:bg-accent/50 transition-colors group"
                  >
                    <span className="text-xs">{val.nome}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity text-destructive"
                      onClick={() => deleteItem(item.endpoint, val.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
