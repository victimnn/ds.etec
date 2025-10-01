"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building, TrendingUp, Users, Star, Quote, Briefcase, DollarSign, Target, Award, ExternalLink, ArrowRight, Code, Globe } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { HeroButtons } from "@/components/ui/hero-buttons"

export default function MercadoPage() {



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
      tipo: "Software House", 
      setor: "TI/Software",
      localizacao: "Jaguariúna, SP",
      logo: "/empresas/assist.png",
      website: "https://assistsolucoes.com.br"
    },
    { 
      nome: "Build Solutions", 
      tipo: "Software House", 
      setor: "TI/Software",
      localizacao: "Pedreira, SP",
      logo: "/empresas/build.png",
      website: "https://buildsolutions.com.br"
    },
    // { 
    //   nome: "Camino", 
    //   tipo: "Software House", 
    //   setor: "Tecnologia",
    //   localizacao: "Amparo, SP",
    //   logo: "/empresas/camino.png",
    //   website: "https://camino.com.br"
    // },
    { 
      nome: "CASP", 
      tipo: "Indústria", 
      setor: "Equipamentos/estruturas (setor industrial/agro)",
      localizacao: "Amparo, SP",
      logo: "/empresas/casp.png",
      website: "https://casp.com.br"
    },
    {
      nome: "InFive",
      tipo: "Software House",
      setor: "Automação",
      localizacao: "Amparo, Campinas, SP - Belo Horizonte, MG",
      logo: "/empresas/infive.png",
      website: "https://infive.com.br"
    },
    { 
      nome: "Infoluck", 
      tipo: "Serviços de TI", 
      setor: "Suporte/consultoria e soluções de informática",
      localizacao: "Amparo, SP",
      logo: "/empresas/infoluck.png",
      website: "https://infoluck.com.br"
    },
    { 
      nome: "JRS Computação", 
      tipo: "Varejo/serviços de informática", 
      setor: "Assistência técnica, vendas de TI",
      localizacao: "Jaguariúna, SP",
      logo: "/empresas/jrs.png",
      website: "https://jrscomputacao.com.br"
    },
    { 
      nome: "Motherson Group", 
      tipo: "Multinacional de manufatura", 
      setor: "Autopeças e componentes automotivos",
      localizacao: "Jaguariúna e Limeira, SP",
      logo: "/empresas/motherson.png",
      website: "https://motherson.com"
    },
    { 
      nome: "Prime Solution", 
      tipo: "Software House", 
      setor: "TI/Software",
      localizacao: "Pedreira, SP",
      logo: "/empresas/primesolution.webp",
      website: "https://www.p1s.com.br"
    },
    { 
      nome: "RS Solutions", 
      tipo: "Desenvolvimento de software", 
      setor: "TI/Software",
      localizacao: "Pedreira, Campinas, São Paulo, SP",
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
      tipo: "Software House", 
      setor: "Sistemas para gestão pública/privada",
      localizacao: "Amparo, SP",
      logo: "/empresas/ram.webp",
      website: "https://sistemaram.com.br"
    },
    {
      nome: "Tagimf",
      tipo: "Infraestrutura TI",
      setor: "TI/Financeiro",
      localizacao: "São Paulo, SP",
      logo: "/empresas/tag.png",
      website: "https://www.taginfraestrutura.com.br/"
    },
    { 
      nome: "Wise Software Sistemas", 
      tipo: "Software House", 
      setor: "Tecnologia para varejo",
      localizacao: "Serra Negra, SP",
      logo: "/empresas/wise.png",
      website: "https://www.instagram.com/wisesoftsistemas/"
    },
    {
      nome: "YGS Softwares",
      tipo: "Software House",
      setor: "TI/Software",
      localizacao: "Jaguariúna, SP",
      logo: "/empresas/ygs.png",
      website: "https://ygs.com.br/"
    }
  ]

  const depoimentos = [
    {
      nome: "João Silva",
      cargo: "Desenvolvedor Full Stack",
      empresa: "TechSolutions",
      ano: "Formado em 2022",
      depoimento: "O curso me deu uma base sólida para ingressar no mercado. Hoje trabalho com as tecnologias que aprendi na Etec e já fui promovido duas vezes.",
      foto: "/placeholder-user.jpg",
      salario: "R$ 6.500",
      tempo_emprego: "2 anos"
    },
    {
      nome: "Maria Santos",
      cargo: "Analista de Sistemas",
      empresa: "Banco Regional",
      ano: "Formada em 2021",
      depoimento: "A formação integrada foi fundamental. Consegui meu primeiro emprego ainda durante o curso e hoje sou responsável por projetos importantes no banco.",
      foto: "/placeholder-user.jpg",
      salario: "R$ 5.800",
      tempo_emprego: "3 anos"
    },
    {
      nome: "Pedro Oliveira",
      cargo: "Desenvolvedor Mobile",
      empresa: "Startup Local",
      ano: "Formado em 2023",
      depoimento: "Os projetos práticos do curso me prepararam para o mercado real. Hoje desenvolvo apps que são usados por milhares de pessoas.",
      foto: "/placeholder-user.jpg",
      salario: "R$ 4.200",
      tempo_emprego: "1 ano"
    }
  ]

  const estatisticas = [
    {
      titulo: "100%",
      descricao: "Oportunidades de Autodesenvolvimento",
      icon: TrendingUp,
      cor: "text-green-600",
      bg: "bg-green-100"
    },
    {
      titulo: "10+",
      descricao: "Empresas Parceiras",
      icon: Building,
      cor: "text-primary",
      bg: "bg-primary/10"
    },
    {
      titulo: "10+",
      descricao: "Empresas assistindo o TCC anualmente",
      icon: Users,
      cor: "text-primary",
      bg: "bg-primary/10"
    },
    {
      titulo: "15+",
      descricao: "Projetos desenvolvidos anualmente",
      icon: Code,
      cor: "text-accent",
      bg: "bg-accent/10"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6 w-fit">
              Oportunidades de Carreira
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Mercado de Trabalho
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Descubra as inúmeras oportunidades de carreira para técnicos em Desenvolvimento de Sistemas. 
              Um mercado em constante crescimento com salários atrativos e alta demanda por profissionais qualificados.
            </p>
            <div className="flex justify-center">
              <HeroButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Números
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Resultados que comprovam o sucesso dos nossos alunos no mercado de trabalho
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {estatisticas.map((stat, index) => (
              <Card key={index} className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <CardHeader>
                  <div className={`w-16 h-16 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <stat.icon className={`w-8 h-8 ${stat.cor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-200">
                    {stat.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">{stat.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    

      {/* Empresas Parceiras */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Empresas Parceiras
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Organizações que oferecem oportunidades de estágio e emprego para nossos alunos
            </p>
          </div>

          {/* Grid simples de todas as empresas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {empresas.map((empresa, index) => (
              <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group min-h-[220px] flex flex-col cursor-pointer" onClick={() => window.open(empresa.website, '_blank')}>
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
                      <Image
                        src={empresa.logo}
                        alt={`Logo ${empresa.nome}`}
                        width={64}
                        height={64}
                        className="object-contain max-w-full max-h-full transition-all duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement
                          if (fallback) {
                            fallback.style.display = 'flex'
                          }
                        }}
                      />
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200 line-clamp-2 flex items-center justify-center gap-2 mb-2">
                      {empresa.nome}
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0" />
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mb-3">
                      {empresa.localizacao}
                    </CardDescription>
                    <Badge variant="secondary" className="w-fit text-xs transition-all duration-200 group-hover:scale-105 mb-0">
                      {empresa.tipo}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-1 flex-1 flex items-end justify-center">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                      {empresa.setor}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Histórias de Sucesso */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Depoimentos de ex-alunos que se destacaram no mercado de trabalho
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={depoimento.foto}
                      alt={depoimento.nome}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-primary/20 transition-all duration-300 group-hover:border-primary/50"
                    />
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                        {depoimento.nome}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {depoimento.cargo} - {depoimento.empresa}
                      </CardDescription>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {depoimento.ano}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {depoimento.salario}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2">
                    <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm italic leading-relaxed">
                      {depoimento.depoimento}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dicas de Carreira */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Dicas para o Sucesso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Como se destacar no mercado de tecnologia e construir uma carreira sólida
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline cursor-pointer">
                  <span className="text-left font-semibold flex items-center">
                    <Code className="w-5 h-5 mr-3 text-primary" />
                    Durante o Curso
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Participe ativamente dos projetos práticos e hackathons</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Crie um portfólio online com seus trabalhos e projetos</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Busque estágios desde o segundo ano do curso</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Mantenha-se atualizado com novas tecnologias e tendências</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Participe de eventos e workshops da área</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline cursor-pointer">
                  <span className="text-left font-semibold flex items-center">
                    <Award className="w-5 h-5 mr-3 text-primary" />
                    Após a Formação
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Continue estudando e se especializando em áreas específicas</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Participe de comunidades de desenvolvedores e grupos técnicos</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Considere fazer um curso superior na área para crescimento</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Desenvolva habilidades de comunicação e trabalho em equipe</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Mantenha networking ativo com colegas e profissionais da área</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline cursor-pointer">
                  <span className="text-left font-semibold flex items-center">
                    <Target className="w-5 h-5 mr-3 text-primary" />
                    Tendências do Mercado
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Inteligência Artificial e Machine Learning</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Desenvolvimento de aplicações em nuvem (Cloud Computing)</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Segurança da informação e cibersegurança</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Internet das Coisas (IoT) e automação</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Desenvolvimento de aplicações mobile e PWA</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
