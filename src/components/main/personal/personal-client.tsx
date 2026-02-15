'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import { Button } from '@/src/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet'
import {
  Mail,
  Linkedin,
  Github,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Award,
  Star,
  ExternalLink,
  Play,
  BookOpen,
  Target,
  TrendingUp,
  Menu,
  Home,
  Sparkles,
  MapPin,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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

export function PersonalClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'inicio',
        'sobre',
        'habilidades',
        'experiencia',
        'projetos',
        'contato',
      ]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const dadosPessoais = {
    nome: 'Victor Ramos',
    cargo: 'Desenvolvedor Full Stack',
    foto: '/victor.jpg',
    email: 'victor.ramosp19@gmail.com',
    linkedin: 'https://www.linkedin.com/in/victor-pramos19/',
    github: 'https://github.com/victimnn',
    bio: 'Apaixonado por tecnologia e formado em Desenvolvimento de Sistemas pela Etec João Belarmino. Especialista em construir interfaces modernas e arquiteturas robustas.',
    localizacao: 'Jaguariúna, SP',
    idade: '17 anos',
  }

  const habilidades = [
    {
      cat: 'Front-End',
      items: ['React', 'Next.js', 'Tailwind', 'TS'],
      icon: Code,
    },
    {
      cat: 'Back-End',
      items: ['Node.js', 'Python', 'C#', 'APIs'],
      icon: Briefcase,
    },
    {
      cat: 'Database',
      items: ['MySQL', 'SQL Server', 'Supabase'],
      icon: Database,
    },
    { cat: 'Tools', items: ['Git', 'Docker', 'Figma', 'Vercel'], icon: Award },
  ]

  const projetos = [
    {
      titulo: 'BusHere!',
      desc: 'Gestão inteligente de logística escolar.',
      img: '/projetos/bushere.png',
      techs: ['React', 'Node.js', 'MySQL'],
      cat: 'Fullstack',
    },
    {
      titulo: 'Hub DS Etec',
      desc: 'Plataforma institucional e acadêmica.',
      img: '/projetos/dsetec.png',
      techs: ['Next.js', 'TypeScript', 'Tailwind'],
      cat: 'Web',
    },
  ]

  return (
    <div className="min-h-screen bg-background bg-grid-slate selection:bg-primary/20">
      {/* Floating Personal Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-background/60 backdrop-blur-xl border border-border/50 px-6 py-3 rounded-full shadow-2xl flex items-center gap-8"
        >
          <button
            onClick={() => scrollToSection('inicio')}
            className="font-black tracking-tighter text-lg hover:text-primary transition-colors"
          >
            VR.
          </button>
          <div className="hidden md:flex items-center gap-6">
            {['sobre', 'habilidades', 'experiencia', 'projetos'].map(s => (
              <button
                key={s}
                onClick={() => scrollToSection(s)}
                className={cn(
                  'text-xs font-bold uppercase tracking-widest transition-all',
                  activeSection === s
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {s}
              </button>
            ))}
          </div>
          <Button asChild size="sm" className="rounded-full font-bold">
            <Link href="/">Site Principal</Link>
          </Button>
        </motion.div>
      </nav>

      {/* Hero */}
      <section
        id="inicio"
        className="relative pt-48 pb-32 px-4 overflow-hidden"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <Badge
                variant="outline"
                className="px-4 py-1 rounded-full border-primary/30 text-primary bg-primary/5 uppercase text-[10px] font-bold tracking-widest"
              >
                Available for hire
              </Badge>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8]">
                {dadosPessoais.nome.split(' ')[0]}
                <br />
                <span className="text-primary">
                  {dadosPessoais.nome.split(' ')[1]}
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed max-w-md">
                {dadosPessoais.cargo} focado em experiências digitais de alta
                performance.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 font-bold shadow-xl shadow-primary/20"
                  onClick={() =>
                    (window.location.href = `mailto:${dadosPessoais.email}`)
                  }
                >
                  Hire Me
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => window.open(dadosPessoais.github, '_blank')}
                  >
                    <Github className="size-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() =>
                      window.open(dadosPessoais.linkedin, '_blank')
                    }
                  >
                    <Linkedin className="size-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="relative aspect-square max-w-md mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <Image
                  src={dadosPessoais.foto}
                  alt={dadosPessoais.nome}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-32 px-4 bg-muted/30 border-y">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeInUp} className="space-y-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Um pouco sobre mim
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
              "{dadosPessoais.bio}"
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-1">
                <div className="text-primary font-black text-3xl">17</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  Anos de Idade
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-primary font-black text-3xl">
                  Jaguariúna
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  Localização
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-primary font-black text-3xl">Líder</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  Mindset
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="habilidades" className="py-32 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hard Skills
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {habilidades.map((s, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="glass hover-lift border-border/50 rounded-[2rem] overflow-hidden group">
                  <CardHeader className="p-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <s.icon className="size-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-bold">{s.cat}</CardTitle>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {s.items.map((item, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-[10px] font-bold bg-muted/50"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projetos"
        className="py-32 px-4 bg-foreground text-background rounded-[4rem]"
      >
        <div className="container mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
              Projetos em
              <br />
              <span className="text-primary">Evidência</span>
            </h2>
            <p className="max-w-xs text-muted-foreground font-medium uppercase tracking-widest text-[10px]">
              Trabalhos que definem minha qualidade técnica e visão de produto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {projetos.map((p, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.2 }}>
                <Card className="bg-transparent border-border/20 group cursor-pointer">
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-border/20">
                    <Image
                      src={p.img}
                      alt={p.titulo}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardHeader className="px-0 py-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold text-white tracking-tight">
                        {p.titulo}
                      </h3>
                      <Badge className="bg-primary text-white">{p.cat}</Badge>
                    </div>
                    <p className="text-muted-foreground text-lg">{p.desc}</p>
                    <div className="flex gap-2">
                      {p.techs.map(t => (
                        <span
                          key={t}
                          className="text-[10px] font-black uppercase tracking-widest text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contato" className="py-32 px-4 text-center">
        <motion.div {...fadeInUp} className="space-y-12">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none">
            VAMOS
            <br />
            CRIAR JUNTOS?
          </h2>
          <div className="flex flex-col items-center gap-6">
            <a
              href={`mailto:${dadosPessoais.email}`}
              className="text-xl md:text-3xl font-medium hover:text-primary transition-colors underline underline-offset-8 decoration-primary/30"
            >
              {dadosPessoais.email}
            </a>
            <div className="flex gap-8">
              <Link
                href={dadosPessoais.github}
                target="_blank"
                className="font-bold hover:text-primary transition-colors"
              >
                GITHUB
              </Link>
              <Link
                href={dadosPessoais.linkedin}
                target="_blank"
                className="font-bold hover:text-primary transition-colors"
              >
                LINKEDIN
              </Link>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.3em] pt-20">
            © 2025 VICTOR RAMOS • MADE WITH NEXT.JS
          </p>
        </motion.div>
      </footer>
    </div>
  )
}

const Database = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
)
