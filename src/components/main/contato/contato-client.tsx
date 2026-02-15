'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import { Button } from '@/src/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion'
import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  Sparkles,
} from 'lucide-react'
import { HeroButtons } from '@/src/components/ui/hero-buttons'
import { institutionContact } from '@/src/constants/institution'
import { cn } from '@/src/lib/utils'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
}

export function ContatoClient() {
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
              <MessageCircle className="h-3 w-3" />
              Canais de Atendimento
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter">
              Fale com a <span className="text-secondary">Gente</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Dúvidas sobre o curso, vestibulinho ou parcerias? Nossa equipe
              está pronta para te ajudar a construir o seu futuro.
            </p>
            <div className="flex justify-center pt-4">
              <HeroButtons />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            <motion.div variants={fadeInUp}>
              <Card className="glass shadow-glow border-border/50 rounded-[2.5rem] overflow-hidden">
                <CardHeader className="p-10 pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-black tracking-tight">
                    Telefones
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-0 space-y-4">
                  {institutionContact.phoneContacts.map(phone => (
                    <div
                      key={phone.href}
                      className="flex justify-between items-center p-5 bg-muted/50 rounded-2xl border border-border/50 group hover:border-primary/30 transition-all"
                    >
                      <div>
                        <p className="font-bold text-foreground">
                          {phone.title}
                        </p>
                        <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
                          {phone.description}
                        </p>
                      </div>
                      <a
                        href={phone.href}
                        className="text-primary font-black hover:scale-105 transition-transform"
                      >
                        {phone.display}
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="glass shadow-glow border-border/50 rounded-[2.5rem] overflow-hidden">
                <CardHeader className="p-10 pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-black tracking-tight">
                    Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-0 space-y-4">
                  {[
                    { d: 'Segunda a Sexta', h: '07h às 23h', s: 'Completo' },
                    { d: 'Sábado', h: '07h às 12h', s: 'Parcial' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-5 bg-muted/50 rounded-2xl border border-border/50"
                    >
                      <div>
                        <p className="font-bold text-foreground">{item.d}</p>
                        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                          {item.s}
                        </p>
                      </div>
                      <span className="text-primary font-black">{item.h}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-24 px-4 bg-muted/30 border-y">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Onde <span className="text-primary">Estamos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Venha conhecer pessoalmente nossa infraestrutura e laboratórios.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl bg-card aspect-[16/9] lg:aspect-[21/9] relative"
          >
            <iframe
              src={institutionContact.address.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute bottom-8 left-8 p-8 glass-card border-white/20 rounded-3xl max-w-sm hidden md:block">
              <h3 className="font-black text-lg mb-2">
                {institutionContact.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {institutionContact.address.street},{' '}
                {institutionContact.address.district}
                <br />
                {institutionContact.address.cityState} - CEP{' '}
                {institutionContact.address.zip}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              {...fadeInUp}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <Send className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Respostas <span className="text-primary">Rápidas</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Compilamos as dúvidas mais comuns para agilizar seu atendimento.
              </p>
              <div className="flex flex-col gap-4">
                {institutionContact.emailContacts.map(email => (
                  <a
                    key={email.address}
                    href={`mailto:${email.address}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-primary/5 transition-all group"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {email.title}
                      </p>
                      <p className="font-bold text-sm group-hover:text-primary transition-colors">
                        {email.address}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    q: 'Qual o horário das aulas?',
                    a: 'As aulas ocorrem no período integral, com turmas no Matutino (07h10 às 14h) e Vespertino (13h10 às 19h20).',
                  },
                  {
                    q: 'O material é pago?',
                    a: 'Não. Por ser uma instituição pública (Etec/CPS), todo o ensino e material didático são 100% gratuitos.',
                  },
                  {
                    q: 'Como funcionam os estágios?',
                    a: 'Temos parcerias estratégicas com empresas da região que buscam talentos diretamente em nossos laboratórios.',
                  },
                ].map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-background rounded-[2rem] border px-8 shadow-sm"
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
