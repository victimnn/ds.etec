'use client'

import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { ExternalLink, Github, Play, Code, Smartphone, Monitor, Gamepad2, ArrowRight, Users, Award, Star, Calendar, Search, Filter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { HeroButtons } from "@/src/components/ui/hero-buttons"
import { Counter } from "@/src/components/tcc/ui/counter"
import { cn } from "@/src/lib/utils"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.05
    }
  },
  viewport: { once: true }
}

export function ProjetosMainClient() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos")

  const projetos = [
    {
      titulo: "BusHere! - Web",
      descricao: "Aplicação web completa para gestão de transporte escolar para empresas e passageiros",
      tecnologias: ["React", "Node.js"],
      imagem: "/projetos/bushere.png",
      alunos: ["Victor Ramos", "Renan Andrade", "Sarah Porsch", "Marcelo Camillo", "Luiz Souza"],
      ano: "2025",
      categoria: "Web",
      destaque: true,
    },
    {
      titulo: "Capivaras.com",
      descricao: "Site sobre conscientização de Capivaras",
      tecnologias: ["React", "Next.js"],
      imagem: "/projetos/capivara.png",
      alunos: ["Victor Ramos", "Samy Maiorini", "Giovani Francisco", "Atilio de Andrade"],
      ano: "2025",
      categoria: "Web",
      implementado: true,
      destaque: true,
      demo: "https://capivara-app.vercel.app",
      github: "https://github.com/victimnn/capivara-app"
    },
    {
      titulo: "Mão Robótica",
      descricao: "Mão Robótica para ensinar conceitos básicos de programação",
      tecnologias: ["Arduino", "Python"],
      imagem: "/projetos/maoRobotica.png",
      alunos: ["Vitor Cordeiro"],
      ano: "2024",
      categoria: "Hardware",
      destaque: true,
      premio: "Melhor Projeto Educacional",
      demo: "https://www.youtube.com/watch?v=Ac7zUeninqw",
      github: "https://github.com/VitorCordS/Mechanic-Hand-Tracking"
    },
    {
      titulo: "Disable Youtube Comments",
      descricao: "Projeto para desabilitar comentários no Youtube",
      tecnologias: ["JavaScript", "HTML", "CSS"],
      imagem: "/projetos/disableComents.png",
      alunos: ["Fernando Bartholomeu"],
      ano: "2020",
      categoria: "Web",
      destaque: false,
      implementado: true,
      demo: "https://chrome.google.com/webstore/detail/disable-youtube-comments/iogfdkjhecolapobdolaollphpmjojck",
      github: "https://github.com/FerStation/disable-youtube-comments"
    }
  ]

  const categorias = [
    { id: "Todos", nome: "Todos", icon: Code },
    { id: "Web", nome: "Web", icon: Monitor },
    { id: "Mobile", nome: "Mobile", icon: Smartphone },
    { id: "Hardware", nome: "Hardware", icon: Cpu },
  ]

  const estatisticas = [
    { titulo: 50, label: "Desenvolvidos", icon: Code, color: "text-primary", bg: "bg-primary/10", suffix: "+" },
    { titulo: 15, label: "Tecnologias", icon: Award, color: "text-accent", bg: "bg-accent/10", suffix: "+" },
    { titulo: 3, label: "Implementados", icon: Star, color: "text-emerald-500", bg: "bg-emerald-500/10", suffix: "+" },
    { titulo: 100, label: "Portfólio", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", suffix: "%" }
  ]

  const projetosFiltrados = categoriaAtiva === "Todos" 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === categoriaAtiva)

  return (
    <div className="min-h-screen bg-background bg-grid-slate">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24 lg:py-36">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
              Portfólio em Evolução
            </Badge>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
              Projetos dos <span className="text-secondary">Alunos</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto text-pretty">
              Conheça as aplicações reais, hardwares e soluções construídas durante a jornada acadêmica no DS Etec.
            </p>
            <div className="flex justify-center pt-4">
              <HeroButtons />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {estatisticas.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center space-y-1">
                <div className="flex items-center justify-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
                  <stat.icon className={cn("h-3.5 w-3.5", stat.color)} /> {stat.label}
                </div>
                <div className="text-3xl md:text-4xl font-black text-foreground tracking-tighter">
                  <Counter end={stat.titulo} suffix={stat.suffix} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Galeria de <span className="text-primary">Inovação</span></h2>
              <p className="text-muted-foreground">Filtre por tecnologia e explore o potencial de cada grupo.</p>
            </div>

            <div className="flex bg-muted/50 p-1.5 rounded-2xl border border-border/50 backdrop-blur-sm">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaAtiva(cat.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2",
                    categoriaAtiva === cat.id 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.05]" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  <cat.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{cat.nome}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            layout
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {projetosFiltrados.map((projeto, index) => (
                <motion.div 
                  key={projeto.titulo}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="overflow-hidden hover-lift border-border/50 group h-full flex flex-col rounded-[2.5rem] bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all">
                    <div className="relative aspect-video">
                      <Image 
                        src={projeto.imagem} 
                        alt={projeto.titulo} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <Badge className="bg-primary/90 backdrop-blur-md border-none">{projeto.categoria}</Badge>
                        {projeto.destaque && <Badge className="bg-yellow-500 text-yellow-950 font-bold border-none"><Star className="w-3 h-3 mr-1 fill-current" /> Destaque</Badge>}
                      </div>
                    </div>
                    
                    <CardHeader className="p-8 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{projeto.titulo}</CardTitle>
                        <div className="flex items-center gap-1 text-[10px] font-black uppercase text-muted-foreground/60">
                          <Calendar className="h-3 w-3" /> {projeto.ano}
                        </div>
                      </div>
                      <CardDescription className="line-clamp-2 leading-relaxed">{projeto.descricao}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-8 pt-0 mt-auto space-y-6">
                      <div className="flex flex-wrap gap-1.5">
                        {projeto.tecnologias.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-[10px] bg-primary/5 text-primary border-primary/10">{tech}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        {projeto.demo && (
                          <Button asChild size="sm" variant="outline" className="flex-1 rounded-xl font-bold h-10 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                            <Link href={projeto.demo} target="_blank"><Play className="w-4 h-4 mr-2" /> Demo</Link>
                          </Button>
                        )}
                        {projeto.github && (
                          <Button asChild size="sm" variant="outline" className="flex-1 rounded-xl font-bold h-10 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                            <Link href={projeto.github} target="_blank"><Github className="w-4 h-4 mr-2" /> GitHub</Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="relative rounded-[3.5rem] bg-muted/50 border border-border/50 p-12 md:p-24 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate opacity-40" />
            <div className="relative space-y-8 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Seu Projeto no <span className="text-primary text-glow">DS Etec?</span></h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                Nossa metodologia foca na criação de portfólios reais que abrem portas nas maiores empresas de tecnologia.
              </p>
              <div className="flex justify-center">
                <HeroButtons primaryText="Inscrever-se Agora" secondaryText="Grade Curricular" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const Cpu = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
)
