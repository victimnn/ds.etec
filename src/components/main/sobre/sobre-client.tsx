'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion"
import { BookOpen, Users, Award, Building, Clock, Monitor, Code, Database, Globe, Smartphone, Shield, Cpu, TestTube, ArrowRight, Sparkles, GraduationCap } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { HeroButtons } from "@/src/components/ui/hero-buttons"
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
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
}

export function SobreClient() {
  const matrizCurricular = [
    {
      ano: "1º Ano",
      disciplinas: [
        { nome: "BANCO DE DADOS I", icon: Database },
        { nome: "CONDUTA PROFISSIONAL", icon: Award },
        { nome: "PROGRAMAÇÃO E ALGORITMOS", icon: Code },
        { nome: "TIC PROJETOS", icon: Monitor },
        { nome: "PROGRAMAÇÃO WEB I", icon: Globe },
        { nome: "EMBARCADOS E IoT", icon: Cpu },
      ]
    },
    {
      ano: "2º Ano",
      disciplinas: [
        { nome: "ANALISE E PROJETO", icon: Monitor },
        { nome: "BANCO DE DADOS II", icon: Database },
        { nome: "DESENVOLVIMENTO I", icon: Code },
        { nome: "APP MOBILE I", icon: Smartphone },
        { nome: "PROGRAMAÇÃO WEB II", icon: Globe },
      ]
    },
    {
      ano: "3º Ano",
      disciplinas: [
        { nome: "NUVEM (CLOUD)", icon: Shield },
        { nome: "DESENVOLVIMENTO II", icon: Code },
        { nome: "APP MOBILE II", icon: Smartphone },
        { nome: "PROGRAMAÇÃO WEB III", icon: Globe },
        { nome: "TCC", icon: Award },
      ]
    }
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
              <GraduationCap className="h-3 w-3" />
              Excelência Acadêmica
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter">
              Sobre o Curso
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Descubra por que somos referência na formação de técnicos em Desenvolvimento de Sistemas em Amparo e região.
            </p>
            <div className="flex justify-center pt-4">
              <HeroButtons />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Nossa Missão</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-pretty text-justify">
                <p>
                  Formar profissionais capazes de atuar com protagonismo na economia digital, 
                  unindo teoria acadêmica rigorosa com prática de laboratório constante.
                </p>
                <p>
                  Preparamos nossos alunos para dominar as complexidades do desenvolvimento de software, 
                  garantindo uma transição fluida para o mercado de trabalho ou ensino superior.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-muted/50 rounded-3xl border border-border/50 text-center">
                  <div className="text-4xl font-black text-primary mb-1">3</div>
                  <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Anos de Curso</div>
                </div>
                <div className="p-8 bg-muted/50 rounded-3xl border border-border/50 text-center">
                  <div className="text-4xl font-black text-primary mb-1">80</div>
                  <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Vagas / Ano</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-background"
            >
              <Image
                src="/escola/computer-classroom-students.png"
                alt="Alunos"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Matriz Curricular */}
      <section className="py-24 px-4 bg-muted/30 border-y">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Matriz Curricular</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Disciplinas técnicas organizadas por anos letivos.</p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {matrizCurricular.map((ano, index) => (
                <AccordionItem key={index} value={`ano-${index}`} className="border-none">
                  <motion.div {...fadeInUp} transition={{ delay: index * 0.1 }}>
                    <AccordionTrigger className="px-10 py-8 bg-card border rounded-3xl hover:no-underline hover:bg-muted/50 transition-all shadow-sm group">
                      <div className="flex items-center gap-6">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
                          <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-black text-2xl tracking-tighter">{ano.ano}</span>
                      </div>
                    </AccordionTrigger>
                  </motion.div>
                  <AccordionContent className="pt-6 px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {ano.disciplinas.map((disc, dIndex) => (
                        <Card key={dIndex} className="bg-background/50 border-border/50 hover:border-primary/30 transition-all">
                          <CardHeader className="p-6 flex flex-row items-center gap-4">
                            <div className="p-2 bg-muted rounded-lg">
                              <disc.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-tight">{disc.nome}</span>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Perfil do Egresso */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20 space-y-4">
            <Badge variant="outline" className="px-4 py-1 rounded-full border-emerald-500/30 text-emerald-600 bg-emerald-500/5 uppercase text-[10px] font-bold">Carreira</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">O Que Você Aprende</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { t: "Software", i: Code, d: "Desenvolvimento de aplicações robustas." },
              { t: "Dados", i: Database, d: "Modelagem e administração de dados." },
              { t: "Mobile", i: Smartphone, d: "Apps nativos e híbridos para Android/iOS." },
              { t: "Segurança", i: Shield, d: "Proteção de dados e sistemas críticos." },
              { t: "QA", i: TestTube, d: "Garantia de qualidade e automação." },
              { t: "IoT", i: Cpu, d: "Integração de hardware e software." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="glass h-full hover:bg-primary/5 transition-all group border-border/50 rounded-[2.5rem]">
                  <CardHeader className="p-10 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <item.i className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{item.t}</CardTitle>
                    <CardDescription className="text-sm">{item.d}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
