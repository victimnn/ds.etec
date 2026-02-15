'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/src/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import {
  Calendar,
  Code,
  Users,
  Award,
  ExternalLink,
  Instagram,
  ArrowRight,
  Clock,
  Building,
  BookOpen,
  Target,
  Star,
  CheckCircle,
  Play,
  Github,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroButtons } from '@/src/components/ui/hero-buttons'
import { Counter } from '@/src/components/tcc/ui/counter'
import { Typewriter } from '@/src/components/main/ui/typewriter'
import { institutionContact } from '@/src/constants/institution'

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

export function MainHomeClient() {
  const estatisticas = [
    {
      titulo: 400,
      descricao: 'Alunos Formados',
      icon: Star,
      cor: 'text-yellow-500',
      bg: 'bg-yellow-500/10',
      suffix: '+',
    },
    {
      titulo: 6,
      descricao: 'Laboratórios de Informática',
      icon: Building,
      cor: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      titulo: 3,
      descricao: 'Anos de Formação',
      icon: Calendar,
      cor: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      titulo: 120,
      descricao: 'Computadores Disponíveis',
      icon: Code,
      cor: 'text-blue-600',
      bg: 'bg-blue-100',
    },
  ]

  const diferenciais = [
    {
      titulo: 'Laboratórios Modernos',
      descricao:
        '6 laboratórios equipados com 120 computadores de última geração',
      icon: Building,
    },
    {
      titulo: 'Professores Especialistas',
      descricao:
        'Corpo docente qualificado com experiência no mercado de trabalho',
      icon: Users,
    },
    {
      titulo: 'Parcerias com Empresas',
      descricao:
        'Oportunidades de estágio e emprego através de parcerias locais',
      icon: Target,
    },
    {
      titulo: 'Formação Completa',
      descricao: 'Ensino médio + formação técnica em um só curso',
      icon: BookOpen,
    },
  ]

  const projetosDestaque = [
    {
      titulo: 'Disable Youtube Comments',
      descricao: 'Projeto para desabilitar comentários no Youtube',
      tecnologia: 'JavaScript + HTML + CSS',
      imagem: '/projetos/disableComents.png',
      categoria: 'Web',
      implementado: true,
      demo: 'https://chrome.google.com/webstore/detail/disable-youtube-comments/iogfdkjhecolapobdolaollphpmjojck',
      github: 'https://github.com/FerStation/disable-youtube-comments',
    },
    {
      titulo: 'Capivaras.com',
      descricao: 'Site de conscientização sobre Capivaras',
      imagem: '/projetos/capivara.png',
      tecnologia: 'React + Next.js',
      categoria: 'Web',
      implementado: true,
      demo: 'https://capivara-app.vercel.app',
      github: 'https://github.com/victimnn/capivara-app',
    },
    {
      titulo: 'Mão Robótica',
      descricao: 'Mão Robótica para ensinar conceitos básicos de programação',
      tecnologia: 'Arduino + Python',
      imagem: '/projetos/maoRobotica.png',
      categoria: 'Hardware',
      demo: 'https://www.youtube.com/watch?v=Ac7zUeninqw',
      github: 'https://github.com/VitorCordS/Mechanic-Hand-Tracking',
    },
  ]

  const horarios = [
    {
      periodo: 'Matutino',
      horario: '7h10 às 14h',
      vagas: '40 alunos',
      status: 'Disponível',
    },
    {
      periodo: 'Vespertino',
      horario: '13h10 às 19h20',
      vagas: '40 alunos',
      status: 'Disponível',
    },
  ]

  return (
    <div className="min-h-screen bg-background bg-grid-slate">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 pt-24 lg:pt-36 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge className="bg-secondary text-secondary-foreground">
                Curso Técnico Integrado ao Ensino Médio
              </Badge>
              <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                Desenvolvimento de <br />
                <Typewriter words={['Sistemas', 'Ideias', 'Futuros']} />
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
                Forme-se na Etec João Belarmino. Uma formação completa que
                integra ensino médio e capacitação profissional de alta
                qualidade.
              </p>
              <HeroButtons
                primaryText="Inscreva-se Agora"
                secondaryText="Conheça o Curso"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/escola/students-coding.png"
                alt="Alunos programando"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl border-4 border-white/10 transition-all duration-500 hover:scale-105"
              />
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="flex justify-center mt-12">
            <Link href="/personal">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-full px-8"
              >
                <Users className="w-5 h-5 mr-2" />
                Conheça o Desenvolvedor
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Números
            </h2>
            <p className="text-xl text-muted-foreground">
              Resultados que comprovam nossa excelência.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {estatisticas.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center glass hover-lift shadow-glow group border-border/50">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <stat.icon className={`w-8 h-8 ${stat.cor}`} />
                    </div>
                    <CardTitle className="text-3xl font-bold">
                      <Counter end={stat.titulo} suffix={stat.suffix} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-medium">
                      {stat.descricao}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sobre o Curso - Cards Originais */}
      <section className="py-20 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Sobre o Curso</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              O curso capacita você a analisar, projetar e manter sistemas
              computacionais modernos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Programação',
                icon: Code,
                desc: 'Linguagens modernas: PHP, JS, Kotlin, C#.',
              },
              {
                title: 'Equipe',
                icon: Users,
                desc: 'Projetos reais simulando o ambiente profissional.',
              },
              {
                title: 'Certificação',
                icon: Award,
                desc: 'Diploma técnico reconhecido pelo MEC.',
              },
              {
                title: 'Duração',
                icon: Calendar,
                desc: '3 anos de formação técnica integrada.',
              },
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <Card className="text-center glass h-full hover:border-primary/50 transition-all">
                  <CardHeader>
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horários */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Horários de Aula</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {horarios.map((horario, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass hover-lift border-border/50 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {horario.periodo}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {horario.horario}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">{horario.status}</Badge>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold">
                Nossos Diferenciais
              </h2>
              {diferenciais.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-background/50 transition-all"
                >
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.titulo}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.descricao}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border"
            >
              <Image
                src="/escola/modern-computer-lab.png"
                alt="Lab"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground">
              O talento dos nossos alunos em prática.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetosDestaque.map((projeto, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-lift border-border/50 group h-full flex flex-col">
                  <div className="relative aspect-video">
                    <Image
                      src={projeto.imagem}
                      alt={projeto.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary">
                      {projeto.categoria}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>{projeto.titulo}</CardTitle>
                    <CardDescription>{projeto.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-[10px]">
                        {projeto.tecnologia}
                      </Badge>
                      <div className="flex gap-2">
                        {projeto.demo && (
                          <Link
                            href={projeto.demo}
                            target="_blank"
                            className="p-2 hover:text-primary transition-colors"
                          >
                            <Play className="w-4 h-4" />
                          </Link>
                        )}
                        {projeto.github && (
                          <Link
                            href={projeto.github}
                            target="_blank"
                            className="p-2 hover:text-primary transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8"
            >
              <Link href="/projetos">
                Ver Todos os Projetos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Siga-nos no Instagram
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform rounded-full"
            >
              <Link
                href={institutionContact.socialLinks.instagramCourse}
                target="_blank"
              >
                <Instagram className="w-5 h-5 mr-2" /> @ds.etec
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/insta/instaUm.png',
              '/insta/instaDois.png',
              '/insta/instaTres.png',
              '/insta/instaQuatro.png',
            ].map((src, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="aspect-square relative rounded-2xl overflow-hidden shadow-lg border"
              >
                <Image
                  src={src}
                  alt="Insta"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative space-y-6">
          <h2 className="text-4xl font-bold">Pronto para Começar?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Inscreva-se no vestibulinho e faça parte da próxima turma.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full h-14 px-10 font-bold text-lg shadow-xl"
          >
            <Link href="/vestibulinho">Inscrever-se Agora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
