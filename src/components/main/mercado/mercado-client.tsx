'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion"
import { 
  Building, TrendingUp, Users, Star, Quote, Briefcase, 
  DollarSign, Target, Award, ExternalLink, ArrowRight, 
  Code, Globe, Sparkles, Rocket
} from 'lucide-react'
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

export function MercadoClient() {
  const empresas = [
    { 
      nome: "Acerola Produção Criativa e Audiovisual", 
      tipo: "Produtora/estúdio", 
      setor: "Audiovisual e economia criativa",
      localizacao: "Amparo, SP",
      logo: "/empresas/acerola.png",
      website: "https://www.acerolaaudiovisual.com.br/"
    },
    { 
      nome: "Assist Soluções", 
      tipo: "Desenvolvimento de software", 
      setor: "TI/Software",
      localizacao: "Jaguariúna, SP",
      logo: "/empresas/assist.png",
      website: "https://assistsolucoes.com.br"
    },
    { 
      nome: "Avantpro", 
      tipo: "Desenvolvimento de software", 
      setor: "TI/Software",
      localizacao: "Amparo, Campinas, SP",
      logo: "/empresas/avantpro.png",
      website: "https://avantpro.com.br"
    },
    { 
      nome: "Build Solutions", 
      tipo: "Desenvolvimento de software", 
      setor: "TI/Software",
      localizacao: "Pedreira, SP",
      logo: "/empresas/build.png",
      website: "https://buildsolutions.com.br"
    },
    { 
      nome: "CASP", 
      tipo: "Equipamentos/estruturas", 
      setor: "Indústria",
      localizacao: "Amparo, SP",
      logo: "/empresas/casp.png",
      website: "https://casp.com.br"
    },
    { 
      nome: "Fernandez", 
      tipo: "Indústria de Papel", 
      setor: "Indústria",
      localizacao: "Amparo, SP",
      logo: "/empresas/fernandez.png",
      website: "https://fernandezpapel.com.br"
    },
    { 
      nome: "HTM", 
      tipo: "Indústria Eletrônica", 
      setor: "Indústria",
      localizacao: "Amparo, SP",
      logo: "/empresas/htm.png",
      website: "https://htmeletronica.com.br"
    },
    {
      nome: "InFive",
      tipo: "Desenvolvimento de software",
      setor: "Automação",
      localizacao: "Amparo, Campinas, SP",
      logo: "/empresas/infive.png",
      website: "https://infive.com.br"
    },
    { 
      nome: "Infoluck", 
      tipo: "Serviços de TI", 
      setor: "Suporte/consultoria",
      localizacao: "Amparo, SP",
      logo: "/empresas/infoluck.png",
      website: "https://infoluck.com.br"
    },
    { 
      nome: "JRS Computação", 
      tipo: "Varejo/serviços de informática", 
      setor: "Assistência técnica",
      localizacao: "Jaguariúna, SP",
      logo: "/empresas/jrs.png",
      website: "https://jrscomputacao.com.br"
    },
    { 
      nome: "Matera", 
      tipo: "Multinacional", 
      setor: "TI/Software e Finanças",
      localizacao: "Campinas, SP",
      logo: "/empresas/matera.png",
      website: "https://matera.com"
    },
    { 
      nome: "Motherson Group", 
      tipo: "Multinacional", 
      setor: "Autopeças e manufatura",
      localizacao: "Jaguariúna e Limeira, SP",
      logo: "/empresas/motherson.png",
      website: "https://motherson.com"
    },
    { 
      nome: "Prime Solution", 
      tipo: "Desenvolvimento de software", 
      setor: "TI/Software",
      localizacao: "Pedreira, SP",
      logo: "/empresas/primesolution.webp",
      website: "https://www.p1s.com.br"
    },
    { 
      nome: "Perfix", 
      tipo: "Consultoria", 
      setor: "Gestão e tecnologia",
      localizacao: "Amparo, SP",
      logo: "/empresas/perfix.png",
      website: "https://perfixconsultoria.com.br"
    },
    { 
      nome: "RS Solutions", 
      tipo: "Desenvolvimento de software", 
      setor: "TI/Software",
      localizacao: "Pedreira, Campinas, SP",
      logo: "/empresas/rs.png",
      website: "https://rssolutions.com.br"
    },
    {
      nome: "Salus Brasil",
      tipo: "Indústria",
      setor: "Fabricação de Móveis",
      localizacao: "Amparo, SP",
      logo: "/empresas/salus.png",
      website: "https://salusbrasil.com.br/"
    },
    { 
      nome: "Sistema RAM", 
      tipo: "Desenvolvimento de software", 
      setor: "Gestão pública/privada",
      localizacao: "Amparo, SP",
      logo: "/empresas/ram.webp",
      website: "https://sistemaram.com.br"
    },
    {
      nome: "Tagimf",
      tipo: "Infraestrutura",
      setor: "TI/Financeiro",
      localizacao: "São Paulo, SP",
      logo: "/empresas/tag.png",
      website: "https://www.taginfraestrutura.com.br/"
    },
    { 
      nome: "Wise Software Sistemas", 
      tipo: "Desenvolvimento de software", 
      setor: "Tecnologia para varejo",
      localizacao: "Serra Negra, SP",
      logo: "/empresas/wise.png",
      website: "https://www.instagram.com/wisesoftsistemas/"
    },
    {
      nome: "YGS Softwares",
      tipo: "Desenvolvimento de software",
      setor: "TI/Software",
      localizacao: "Jaguariúna, SP",
      logo: "/empresas/ygs.png",
      website: "https://ygs.com.br/"
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
              <Sparkles className="h-3 w-3" />
              Oportunidades Globais
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter">
              Mercado de <span className="text-secondary">Trabalho</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Conectamos talentos às melhores empresas da região e do mundo. O DS Etec é o seu primeiro passo para uma carreira de sucesso.
            </p>
            <div className="flex justify-center pt-4">
              <HeroButtons />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estatísticas de Mercado */}
      <section className="py-12 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { t: 100, l: "Oportunidades", i: TrendingUp, s: "%", c: "text-emerald-500" },
              { t: 20, l: "Empresas Parceiras", i: Building, s: "+", c: "text-primary" },
              { t: 15, l: "Projetos / Ano", i: Rocket, s: "+", c: "text-blue-500" },
              { t: 5, l: "Polos Tech", i: Globe, s: "", c: "text-accent" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center space-y-1">
                <div className="flex items-center justify-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
                  <stat.i className={cn("h-3.5 w-3.5", stat.c)} /> {stat.l}
                </div>
                <div className="text-3xl md:text-4xl font-black text-foreground tracking-tighter">
                  <Counter end={stat.t} suffix={stat.s} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Empresas Parceiras */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Onde Nossos <span className="text-primary">Alunos Estão</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty px-4">Organizações que confiam e contratam profissionais formados no curso de Desenvolvimento de Sistemas.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {empresas.map((empresa, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card 
                  className="group hover-lift h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all cursor-pointer overflow-hidden rounded-2xl flex flex-col"
                  onClick={() => window.open(empresa.website, '_blank')}
                >
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center flex-1 space-y-4">
                    <div className="relative w-20 h-20 grayscale group-hover:grayscale-0 transition-all duration-500 bg-muted/30 rounded-xl p-2 flex items-center justify-center">
                      <Image 
                        src={empresa.logo} 
                        alt={empresa.nome} 
                        width={80}
                        height={80}
                        className="object-contain" 
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-black text-base line-clamp-2 leading-tight group-hover:text-primary transition-colors">{empresa.nome}</h3>
                      <div className="space-y-1">
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{empresa.localizacao}</p>
                        <Badge variant="secondary" className="text-[9px] uppercase tracking-tighter bg-primary/5 text-primary border-none">
                          {empresa.setor}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dicas de Carreira */}
      <section className="py-24 px-4 bg-muted/30 border-y">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Construa um <span className="text-primary">Futuro Sólido</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Não basta apenas saber codar. No DS Etec, preparamos você para as tendências mais recentes do mercado global de tecnologia.
              </p>
              
              <div className="space-y-4">
                {[
                  { t: "Networking Ativo", d: "Conexão direta com profissionais da área." },
                  { t: "Portfólio de Impacto", d: "Projetos reais para apresentar em entrevistas." },
                  { t: "Soft Skills", d: "Comunicação, liderança e trabalho em equipe." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-background/50 rounded-2xl border border-border/50">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.t}</h4>
                      <p className="text-sm text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto w-full"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "Quais tecnologias aprender?", a: "Focamos em React, Node.js, Cloud Computing e Inteligência Artificial para garantir sua empregabilidade." },
                  { q: "Como conseguir estágio?", a: "Através de nossas parcerias exclusivas e do desenvolvimento de um portfólio sólido desde o primeiro semestre." },
                  { q: "Média salarial da área?", a: "O mercado de TI oferece os salários mais altos do país, com iniciantes ganhando acima da média nacional." }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-background rounded-2xl border px-8 shadow-sm">
                    <AccordionTrigger className="font-bold text-left py-6 hover:no-underline">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-pretty">{item.a}</AccordionContent>
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
