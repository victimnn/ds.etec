'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/src/components/tcc/layout/navigation'
import { Button } from '@/src/components/ui/button'
import { Card, CardContent } from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import { ProjectCard } from '@/src/components/tcc/project/project-card'
import { Carousel } from '@/src/components/tcc/ui/carousel'
import Link from 'next/link'
import {
  ArrowRight,
  Code,
  Users,
  Trophy,
  BookOpen,
  GraduationCap,
  Linkedin,
  Mail,
  Sparkles,
  UserCheck,
} from 'lucide-react'
import { AdvisorPopup } from '@/src/components/tcc/team/advisor-popup'
import { Footer } from '@/src/components/tcc/layout/footer'
import { Counter } from '@/src/components/tcc/ui/counter'
import { MAIN_SITE_URL } from '@/src/lib/site-urls'
import type { Advisor, TCCProject } from '@/src/lib/types'

interface HomeClientProps {
  projects: TCCProject[]
  advisors: Advisor[]
  coordinator: Advisor
  totalProjects: number
  totalStudents: number
  totalTechnologies: number
}

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
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
}

export function HomeClient({
  projects,
  advisors,
  coordinator,
  totalProjects,
  totalStudents,
  totalTechnologies,
}: HomeClientProps) {
  const advisorCount = advisors.length

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-30" />

        <div className="relative container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="flex items-center justify-center gap-4 sm:gap-8 mb-12"
          >
            <div className="glass p-4 rounded-xl shadow-glow hover-lift">
              <img
                src="/etec-logo.png"
                alt="ETEC Logo"
                className="h-12 sm:h-16 w-auto object-contain logo-white"
              />
            </div>
            <div className="glass p-4 rounded-xl shadow-glow hover-lift">
              <img
                src="/cps-logo.png"
                alt="CPS Logo"
                className="h-12 sm:h-16 w-auto object-contain logo-white"
              />
            </div>
            <div className="glass p-4 rounded-xl shadow-glow hover-lift">
              <img
                src="/sp-logo.png"
                alt="SP Logo"
                className="h-12 sm:h-16 w-auto object-contain logo-white"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-primary">Hub de TCC&apos;s</span>
              <span className="block text-foreground mt-2 font-extrabold">
                Desenvolvimento de Sistemas
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
              No dia 28 de novembro, os alunos apresentam seus trabalhos de
              conclusao de curso. Conheca os projetos e os docentes que guiam
              essa jornada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 shadow-glow hover-lift group"
              >
                <Link href="/projetos">
                  Ver Projetos{' '}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 glass hover-lift"
                asChild
              >
                <a href={MAIN_SITE_URL}>Portal Principal</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30 border-y overflow-hidden">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Coordenador(a) do Curso</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lideranca responsavel pela gestao e excelencia pedagogica do
              curso tecnico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="max-w-5xl mx-auto"
          >
            <AdvisorPopup advisor={coordinator}>
              <Card className="glass hover-lift shadow-glow cursor-pointer border-primary/20 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
                    <div className="gradient-bg p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r">
                      <div className="relative mb-5">
                        <div className="absolute -inset-2 rounded-full bg-primary/10 blur-xl" />
                        <img
                          src={coordinator.photo || '/placeholder-user.jpg'}
                          alt={coordinator.name}
                          className="relative w-36 h-36 rounded-full object-cover border-4 border-primary/20 shadow-xl transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2.5 shadow-md">
                          <UserCheck className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">{coordinator.name}</h3>
                      <p className="text-primary font-semibold mt-1">
                        {coordinator.title}
                      </p>
                    </div>

                    <div className="p-8 space-y-5">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="gap-1.5">
                          <Sparkles className="h-3.5 w-3.5" />
                          Coordenacao
                        </Badge>
                        {coordinator.department && (
                          <Badge variant="outline">{coordinator.department}</Badge>
                        )}
                      </div>

                      <p className="text-muted-foreground leading-relaxed italic">
                        &quot;{coordinator.about}&quot;
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {coordinator.achievements?.slice(0, 4).map((item, index) => (
                          <Badge key={index} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {coordinator.linkedin && (
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={coordinator.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Linkedin className="h-4 w-4 mr-1.5" />
                              LinkedIn
                            </a>
                          </Button>
                        )}
                        {coordinator.email && (
                          <Button asChild variant="outline" size="sm">
                            <a href={`mailto:${coordinator.email}`}>
                              <Mail className="h-4 w-4 mr-1.5" />
                              E-mail
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AdvisorPopup>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professores Orientadores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Corpo docente que acompanha os projetos de TCC da turma.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              {advisorCount} orientador(es)
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {advisorCount > 0 ? (
              advisors.map(advisor => (
                <motion.div key={advisor.id} variants={fadeInUp} className="h-full">
                  <AdvisorPopup advisor={advisor}>
                    <Card className="glass hover-lift shadow-glow cursor-pointer h-full border-border/50 transition-all group overflow-hidden">
                      <CardContent className="p-0">
                        <div className="p-6 border-b bg-gradient-to-r from-primary/5 to-transparent">
                          <div className="flex items-center gap-4">
                            <div className="relative shrink-0">
                              <img
                                src={advisor.photo || '/placeholder-user.jpg'}
                                alt={advisor.name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 shadow-lg transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1">
                                <GraduationCap className="h-3 w-3" />
                              </div>
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-lg font-bold truncate">{advisor.name}</h3>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {advisor.title}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <p className="text-sm text-primary font-medium line-clamp-2">
                            {advisor.expertise}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                            {advisor.about}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {advisor.achievements?.slice(0, 2).map((ach, i) => (
                              <Badge key={i} variant="outline" className="text-[11px]">
                                {ach}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-1">
                            <span className="text-xs uppercase tracking-wide text-muted-foreground">
                              Ver perfil completo
                            </span>
                            <div className="flex items-center gap-1.5">
                              {advisor.linkedin && (
                                <Linkedin className="h-4 w-4 text-muted-foreground" />
                              )}
                              {advisor.email && (
                                <Mail className="h-4 w-4 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AdvisorPopup>
                </motion.div>
              ))
            ) : (
              <p className="text-center col-span-full text-muted-foreground italic">
                Carregando corpo docente...
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 gradient-bg border-y">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Code, end: totalProjects, label: 'Projetos Ativos' },
              {
                icon: Users,
                end: totalStudents,
                label: 'Alunos Inscritos',
                suffix: '+',
              },
              {
                icon: Trophy,
                end: totalTechnologies,
                label: 'Stack Tecnologica',
                suffix: '+',
              },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="text-center glass hover-lift shadow-glow">
                  <CardContent className="p-10">
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        delay: 0.2,
                      }}
                      className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
                    >
                      <stat.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-5xl font-bold mb-2 text-primary">
                      <Counter end={stat.end} suffix={stat.suffix} />
                    </h3>
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore os trabalhos mais inovadores desenvolvidos pelos nossos
              estudantes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Carousel
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
              showArrows={true}
              showDots={true}
              autoplay={true}
              autoplayInterval={5000}
              gap={24}
              className="mb-16"
            >
              {projects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variant="detailed"
                  inCarousel={true}
                />
              ))}
            </Carousel>
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-10 hover:bg-primary hover:text-white transition-all shadow-lg"
            >
              <Link href="/projetos">
                Explorar Galeria Completa <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
