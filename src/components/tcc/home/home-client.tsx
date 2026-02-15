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
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
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
              No dia 28 de novembro, os alunos apresentam seus Trabalhos de
              Conclusão de Curso. Uma oportunidade para conhecer projetos
              inovadores e soluções criativas. Venha prestigiar o futuro da
              tecnologia!
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

      {/* Coordenadora do Curso */}
      <section className="py-20 px-4 bg-muted/30 border-y overflow-hidden">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Coordenadora do Curso</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Liderança responsável pela gestão e excelência pedagógica do
              curso.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="max-w-4xl mx-auto"
          >
            <AdvisorPopup advisor={coordinator}>
              <Card className="glass hover-lift shadow-glow cursor-pointer border-primary/10 group overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative shrink-0">
                      <img
                        src={coordinator.photo || '/placeholder-user.jpg'}
                        alt={coordinator.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-xl transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2.5">
                        <UserCheck className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold">
                          {coordinator.name}
                        </h3>
                        <p className="text-primary font-medium">
                          {coordinator.title}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {coordinator.achievements?.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed italic">
                        &quot;{coordinator.about}&quot;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AdvisorPopup>
          </motion.div>
        </div>
      </section>

      {/* Professores Orientadores */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Professores Orientadores
            </h2>
            <p className="text-muted-foreground">
              Conheça os docentes que apoiam o desenvolvimento técnico dos
              projetos.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {advisors.length > 0 ? (
              advisors.map(advisor => (
                <motion.div
                  key={advisor.id}
                  variants={fadeInUp}
                  className="h-full"
                >
                  <AdvisorPopup advisor={advisor}>
                    <Card className="glass hover-lift shadow-glow cursor-pointer h-full border-border/50 transition-all group overflow-hidden">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-6">
                          <div className="relative shrink-0">
                            <img
                              src={advisor.photo || '/placeholder-user.jpg'}
                              alt={advisor.name}
                              className="w-20 h-20 rounded-full object-cover border-4 border-primary/10 shadow-lg transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1.5">
                              <GraduationCap className="h-3 w-3" />
                            </div>
                          </div>

                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">
                              {advisor.name}
                            </h3>
                            <p className="text-sm text-primary mb-3 font-medium uppercase tracking-wider">
                              {advisor.expertise}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {advisor.achievements
                                ?.slice(0, 3)
                                .map((ach, i) => (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className="text-[10px] px-2 py-0"
                                  >
                                    {ach}
                                  </Badge>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                              {advisor.about}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AdvisorPopup>
                </motion.div>
              ))
            ) : (
              <p className="text-center col-span-2 text-muted-foreground italic">
                Carregando corpo docente...
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
                label: 'Stack Tecnológica',
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

      {/* Featured Projects Preview */}
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
