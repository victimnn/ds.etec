'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion'
import {
  Award,
  Monitor,
  Code,
  Database,
  Globe,
  Smartphone,
  Cpu,
  TestTube,
  ArrowRight,
  BookMarked,
  Rocket,
  Target,
  Lightbulb,
  CheckCircle2,
  MessageSquare,
  Laptop,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/src/components/ui/button'
import { Navigation } from '@/src/components/tcc/layout/navigation'
import { Footer } from '@/src/components/tcc/layout/footer'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

export default function SobrePage() {
  const fasesTCC = [
    {
      fase: 'Fase 1: Concepção & Ideação',
      descricao:
        'O nascimento da solução através da identificação de problemas reais.',
      atividades: [
        {
          nome: 'Levantamento de Requisitos',
          descricao: 'Entrevistas com stakeholders e definição de dores.',
          icon: Lightbulb,
        },
        {
          nome: 'Análise de Viabilidade',
          descricao: 'Estudo técnico e mercadológico da proposta.',
          icon: Target,
        },
        {
          nome: 'Metodologias Ágeis',
          descricao:
            'Configuração do backlog e fluxo de trabalho (Scrum/Kanban).',
          icon: Rocket,
        },
      ],
    },
    {
      fase: 'Fase 2: Arquitetura & UX',
      descricao: 'Planejamento da estrutura e experiência do usuário.',
      atividades: [
        {
          nome: 'Modelagem de Dados',
          descricao: 'Projetando bancos de dados escaláveis e seguros.',
          icon: Database,
        },
        {
          nome: 'UX/UI Design',
          descricao: 'Criação de wireframes e protótipos de alta fidelidade.',
          icon: Monitor,
        },
        {
          nome: 'Definição da Stack',
          descricao: 'Escolha das tecnologias mais adequadas para o produto.',
          icon: Cpu,
        },
      ],
    },
    {
      fase: 'Fase 3: Desenvolvimento Alpha',
      descricao:
        'Codificação intensa e construção das funcionalidades principais.',
      atividades: [
        {
          nome: 'Coding & Backend',
          descricao: 'Implementação das APIs e lógica de negócio.',
          icon: Code,
        },
        {
          nome: 'Integração Mobile/Web',
          descricao: 'Construção das interfaces responsivas e apps.',
          icon: Globe,
        },
        {
          nome: 'Versionamento',
          descricao: 'Uso rigoroso de Git e GitHub para colaboração em equipe.',
          icon: Smartphone,
        },
      ],
    },
    {
      fase: 'Fase 4: Qualidade & Defesa',
      descricao: 'Testes finais e apresentação para banca de especialistas.',
      atividades: [
        {
          nome: 'QA & Bug Fix',
          descricao: 'Testes unitários, de integração e usabilidade.',
          icon: TestTube,
        },
        {
          nome: 'Documentação Técnica',
          descricao:
            'Elaboração de manual do sistema e documentação oficial.',
          icon: BookMarked,
        },
        {
          nome: 'Pitch & Demo',
          descricao:
            'Apresentação estratégica e demonstração do produto ao vivo.',
          icon: Award,
        },
      ],
    },
  ]

  const pilaresAvaliacao = [
    {
      titulo: 'Execução Técnica',
      descricao:
        'Qualidade do código, arquitetura limpa e performance do sistema.',
      status: 'Essencial',
      icon: Code,
    },
    {
      titulo: 'Inovação',
      descricao: 'Diferencial competitivo e originalidade da solução proposta.',
      status: 'Diferencial',
      icon: Lightbulb,
    },
  ]

  const ecossistema = [
    {
      titulo: 'Incubadoras de Projetos',
      descricao: 'Laboratórios equipados para desenvolvimento intensivo.',
      detalhes: [
        'Infraestrutura AMD Ryzen de alta performance',
        'Ambientes isolados para testes de rede e segurança',
        'Acesso total a frameworks e ferramentas Pro',
      ],
      icon: Laptop,
      total: '6 Labs',
    },
    {
      titulo: 'Mentoria Especializada',
      descricao: 'Apoio direto de profissionais atuantes no mercado.',
      detalhes: [
        'Orientação focada em padrões da indústria',
        'Code Reviews periódicos com os mentores',
        'Workshops de Soft Skills e Apresentação',
      ],
      icon: Users,
      total: 'Corpo Docente',
    },
    {
      titulo: 'Certificação de Qualidade',
      descricao: 'Selo de aprovação por banca examinadora externa.',
      detalhes: [
        'Avaliação por profissionais convidados',
        'Feedback detalhado para evolução do MVP',
        'Reconhecimento institucional DS Etec',
      ],
      icon: Award,
      total: 'Banca Final',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden border-b">
        <div className="absolute inset-0 gradient-bg opacity-30" />
        <div className="relative container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <Badge
              variant="outline"
              className="px-4 py-1 rounded-full border-primary/30 text-primary bg-primary/5 uppercase tracking-widest text-[10px] font-bold"
            >
              Hub de Inovação & Tecnologia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              A Jornada do <span className="text-primary">TCC no DS Etec</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              O Trabalho de Conclusão de Curso não é o fim, é o começo. Conheça
              como nossos alunos transformam 3 anos de aprendizado em produtos
              reais prontos para o mercado.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 shadow-lg group"
              >
                <Link href="/projetos">
                  Explorar Vitrine de Projetos{' '}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nossa Metodologia */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Metodologia de Mercado
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-pretty text-justify">
                <p>
                  O processo de desenvolvimento dos TCCs no curso de
                  Desenvolvimento de Sistemas segue os mais altos padrões da
                  indústria de software. Não produzimos apenas documentação
                  acadêmica; construímos soluções escaláveis.
                </p>
                <p>
                  Utilizamos <strong>Metodologias Ágeis</strong>, garantindo que
                  cada equipe entregue valor incremental através de ciclos de
                  feedback constantes, code reviews e prototipagem rápida. O
                  objetivo é simular o dia a dia de uma software house de alto
                  desempenho.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border/50">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span className="text-sm font-bold uppercase tracking-tight">
                    Desenvolvimento Fullstack
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border/50">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span className="text-sm font-bold uppercase tracking-tight">
                    UI/UX Design Focus
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border bg-muted"
            >
              <img
                src="/escola/students-coding.png"
                alt="Alunos desenvolvendo TCC"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pilares de Avaliação */}
      <section className="py-20 px-4 bg-muted/30 border-y">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pilares de Qualidade
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todo projeto é submetido a um rigoroso processo de avaliação por
              uma banca examinadora.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pilaresAvaliacao.map((pilar, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass hover-lift shadow-glow border-border/50 group">
                  <CardHeader className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <pilar.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold">
                            {pilar.titulo}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {pilar.descricao}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-primary/5 text-primary border-primary/10 text-[9px] font-bold"
                      >
                        {pilar.status}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ciclo de Inovação */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              O Ciclo de Inovação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A jornada de 12 meses que transforma estudantes em desenvolvedores
              de produtos.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {fasesTCC.map((fase, index) => (
                <AccordionItem
                  key={index}
                  value={`fase-${index}`}
                  className="border-none"
                >
                  <motion.div {...fadeInUp}>
                    <AccordionTrigger className="px-8 py-6 bg-card border rounded-2xl hover:no-underline hover:bg-muted/50 transition-all shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Rocket className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-bold text-xl">{fase.fase}</span>
                      </div>
                    </AccordionTrigger>
                  </motion.div>
                  <AccordionContent className="pt-4 px-2">
                    <div className="grid md:grid-cols-3 gap-4">
                      {fase.atividades.map((atividade, actIndex) => {
                        const Icon = atividade.icon
                        return (
                          <Card
                            key={actIndex}
                            className="bg-muted/30 border-border/50 hover:bg-background transition-colors"
                          >
                            <CardHeader className="p-5 space-y-3">
                              <div className="p-2 bg-background rounded-lg border shadow-sm w-fit">
                                <Icon className="w-4 h-4 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <CardTitle className="text-sm font-bold">
                                  {atividade.nome}
                                </CardTitle>
                                <CardDescription className="text-xs">
                                  {atividade.descricao}
                                </CardDescription>
                              </div>
                            </CardHeader>
                          </Card>
                        )
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Ecossistema */}
      <section className="py-20 px-4 bg-muted/30 border-y">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ecossistema de Apoio
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecossistema.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass h-full border-border/50 group overflow-hidden">
                    <CardHeader className="p-8 pb-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="font-bold">
                          {item.total}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold">
                        {item.titulo}
                      </CardTitle>
                      <CardDescription>{item.descricao}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <ul className="space-y-3">
                        {item.detalhes.map((detalhe, detIndex) => (
                          <li
                            key={detIndex}
                            className="flex items-start text-sm text-muted-foreground leading-snug"
                          >
                            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                            {detalhe}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Entregáveis Técnicos */}
      <section className="py-20 px-4 border-t">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              O que é Entregue?
            </h2>
            <p className="text-muted-foreground">
              Cada TCC resulta em um conjunto de artefatos profissionais.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                title: 'Software MVP',
                icon: Laptop,
                text: 'Produto funcional e testado.',
              },
              {
                title: 'Repositório',
                icon: Code,
                text: 'Código-fonte documentado (GitHub).',
              },
              {
                title: 'Protótipo UX',
                icon: Monitor,
                text: 'Estudo de interface e usabilidade.',
              },
              {
                title: 'Manual Técnico',
                icon: BookMarked,
                text: 'Documentação de arquitetura.',
              },
              {
                title: 'Pitch',
                icon: MessageSquare,
                text: 'Apresentação de impacto de mercado.',
              },
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover:bg-primary/5 transition-colors border-border/50 text-center">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-bold text-xs uppercase tracking-tighter">
                      {item.title}
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-tight">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
