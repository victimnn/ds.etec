'use client'

import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/src/components/ui/button'
import { Badge } from '@/src/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion'
import {
  Calendar,
  Clock,
  Users,
  FileText,
  CheckCircle,
  ExternalLink,
  Download,
  ArrowRight,
  Award,
  HelpCircle,
} from 'lucide-react'
import { cn } from '@/src/lib/utils'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  viewport: { once: true },
}

export function VestibulinhoClient() {
  const [currentDate] = useState(new Date())

  const parseData = (dataStr: string) => {
    const meses = {
      Janeiro: 0,
      Fevereiro: 1,
      Março: 2,
      Abril: 3,
      Maio: 4,
      Junho: 5,
      Julho: 6,
      Agosto: 7,
      Setembro: 8,
      Outubro: 9,
      Novembro: 10,
      Dezembro: 11,
    }
    const match = dataStr.match(/(\d+)\s+de\s+(\w+)/)
    if (match) {
      const dia = parseInt(match[1])
      const mes = meses[match[2] as keyof typeof meses]
      const ano = mes <= 1 ? 2026 : 2025
      return new Date(ano, mes, dia)
    }
    const matchIntervalo = dataStr.match(/(\d+)\s+a\s+(\d+)\s+de\s+(\w+)/)
    if (matchIntervalo) {
      const diaFim = parseInt(matchIntervalo[2])
      const mes = meses[matchIntervalo[3] as keyof typeof meses]
      const ano = mes <= 1 ? 2026 : 2025
      return new Date(ano, mes, diaFim)
    }
    return null
  }

  const getStatus = (dataStr: string) => {
    const dataEvento = parseData(dataStr)
    if (!dataEvento) return 'pendente'
    const diffTime = dataEvento.getTime() - currentDate.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    if (diffDays < 0) return 'concluido'
    if (diffDays <= 7) return 'proximo'
    return 'pendente'
  }

  const cronograma = [
    {
      evento: 'Abertura das Inscrições',
      data: '10 de Setembro',
      status: getStatus('10 de Setembro'),
    },
    {
      evento: 'Encerramento das Inscrições',
      data: '3 de Novembro',
      status: getStatus('3 de Novembro'),
    },
    {
      evento: 'Aplicação da Prova',
      data: '30 de Novembro',
      status: getStatus('30 de Novembro'),
    },
    {
      evento: 'Resultado Final',
      data: '15 de Janeiro',
      status: getStatus('15 de Janeiro'),
    },
    {
      evento: 'Matrícula 1ª Chamada',
      data: '19 a 20 de Janeiro',
      status: getStatus('19 a 20 de Janeiro'),
    },
  ]

  const faqs = [
    {
      q: 'Quais os requisitos?',
      a: 'Ter concluído o Ensino Fundamental (9º ano) ou estar cursando em 2025.',
    },
    {
      q: 'Como é a prova?',
      a: '50 questões de múltipla escolha sobre Português, Matemática, Ciências, História e Geografia.',
    },
    {
      q: 'O curso é gratuito?',
      a: 'Sim, totalmente gratuito. Sem taxas de matrícula ou mensalidades.',
    },
    {
      q: 'Duração do curso?',
      a: '3 anos em período integral (Matutino ou Vespertino).',
    },
  ]

  return (
    <div className="min-h-screen bg-background bg-grid-slate selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
              <Calendar className="h-3 w-3" />
              Inscrições 2026
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter">
              Vestibulinho <span className="text-secondary">2026</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto text-pretty">
              Sua carreira em tecnologia começa agora. Garanta sua vaga em uma
              das melhores escolas técnicas do estado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    'https://vestibulinho.etec.sp.gov.br/home/',
                    '_blank'
                  )
                }
                className="h-14 px-10 rounded-full bg-white text-primary font-black shadow-xl hover:scale-105 transition-all"
              >
                Fazer Inscrição <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 rounded-full border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() =>
                  window.open(
                    'https://vestibulinho.etec.sp.gov.br/documentos/default.asp',
                    '_blank'
                  )
                }
              >
                Ver Edital <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { t: '80 Vagas', i: Users, d: 'Matutino/Vespertino' },
              { t: '3 Anos', i: Clock, d: 'Integrado ao Médio' },
              { t: '100% Grátis', i: Award, d: 'Ensino Público' },
              { t: 'Provas', i: FileText, d: 'Novembro 2025' },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center space-y-1"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <card.i className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-black text-lg tracking-tight">{card.t}</h3>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                  {card.d}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cronograma */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Cronograma <span className="text-primary">Oficial</span>
            </h2>
            <p className="text-muted-foreground">
              Não perca os prazos mais importantes do processo.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {cronograma.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  'flex items-center gap-6 p-6 rounded-3xl border transition-all',
                  item.status === 'concluido'
                    ? 'bg-muted/30 opacity-60'
                    : 'bg-card shadow-sm hover:shadow-lg hover:border-primary/30'
                )}
              >
                <div
                  className={cn(
                    'w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-inner',
                    item.status === 'concluido'
                      ? 'bg-muted text-muted-foreground'
                      : item.status === 'proximo'
                        ? 'bg-orange-500/10 text-orange-600 animate-pulse'
                        : 'bg-primary/10 text-primary'
                  )}
                >
                  {item.status === 'concluido' ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <Clock className="h-6 w-6" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg leading-tight">
                    {item.evento}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.data}</p>
                </div>
                <Badge
                  variant={
                    item.status === 'concluido' ? 'secondary' : 'default'
                  }
                  className="hidden sm:flex"
                >
                  {item.status === 'concluido' ? 'Concluído' : 'Ativo'}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-muted/30 border-y">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="w-16 h-16 bg-primary/10 rounded-[2rem] flex items-center justify-center">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Dúvidas <span className="text-primary">Frequentes</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Preparamos uma lista com as principais perguntas para ajudar
                você a ingressar no curso de Desenvolvimento de Sistemas.
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-full h-12 px-8"
              >
                <Link href="/contato">
                  Ainda tenho dúvidas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-background rounded-3xl border px-8 shadow-sm"
                  >
                    <AccordionTrigger className="font-bold text-left py-6 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-pretty">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
