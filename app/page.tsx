"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Code, Users, Award, ExternalLink, Instagram, ArrowRight, Clock, Building, BookOpen, Target, Star, CheckCircle, Play, Github } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { HeroButtons, ContactButtons } from "@/components/ui/hero-buttons"

export default function HomePage() {
  const estatisticas = [
    {
      titulo: "+400",
      descricao: "Alunos Formados",
      icon: Star,
      cor: "text-green-600",
      bg: "bg-green-100"
    },
    {
      titulo: "6",
      descricao: "Laboratórios de Informática",
      icon: Building,
      cor: "text-primary",
      bg: "bg-primary/10"
    },
    {
      titulo: "3",
      descricao: "Anos de Formação",
      icon: Calendar,
      cor: "text-accent",
      bg: "bg-accent/10"
    },
    {
      titulo: "120",
      descricao: "Computadores Disponíveis",
      icon: Code,
      cor: "text-blue-600",
      bg: "bg-blue-100"
    }
  ]

  const diferenciais = [
    {
      titulo: "Laboratórios Modernos",
      descricao: "6 laboratórios equipados com 120 computadores de última geração",
      icon: Building,
      numero: "1"
    },
    {
      titulo: "Professores Especialistas",
      descricao: "Corpo docente qualificado com experiência no mercado de trabalho",
      icon: Users,
      numero: "2"
    },
    {
      titulo: "Parcerias com Empresas",
      descricao: "Oportunidades de estágio e emprego através de parcerias locais",
      icon: Target,
      numero: "3"
    },
    {
      titulo: "Formação Completa",
      descricao: "Ensino médio + formação técnica em um só curso",
      icon: BookOpen,
      numero: "4"
    }
  ]

  const projetosDestaque = [
    {
      titulo: "Disable Youtube Comments",
      descricao: "Projeto para desabilitar comentários no Youtube",
      tecnologia: "JavaScript + HTML + CSS",
      imagem: "/disableComents.png",
      alunos: ["Fernando Bartholomeu"],
      categoria: "Web",
      implementado: true,
      demo: "https://chrome.google.com/webstore/detail/disable-youtube-comments/iogfdkjhecolapobdolaollphpmjojck",
      github: "https://github.com/FerStation/disable-youtube-comments"
    },
    {
      titulo: "Capivaras.com",
      descricao: "Site de conscientização sobre Capivaras",
      imagem: "/capivara.png",
      tecnologia: "React + Next.js",
      categoria: "Web",
      implementado: true,
      demo: "https://capivara-app.vercel.app",
      github: "https://github.com/victimnn/capivara-app"
    },
    {
      titulo: "Mão Robótica",
      descricao: "Mão Robótica para ensinar conceitos básicos de programação",
      tecnologia: "Arduino + Python",
      imagem: "/maoRobotica.png",
      categoria: "Game",
      demo: "https://www.youtube.com/watch?v=Ac7zUeninqw",
      github: "https://github.com/VitorCordS/Mechanic-Hand-Tracking"
    },
  ]

  const horarios = [
    {
      periodo: "Matutino",
      horario: "7h10 às 14h",
      vagas: "40 alunos",
      status: "Disponível"
    },
    {
      periodo: "Vespertino",
      horario: "13h10 às 19h20",
      vagas: "40 alunos", 
      status: "Disponível"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-secondary/80">
                Curso Técnico Integrado ao Ensino Médio
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Desenvolvimento de Sistemas
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Forme-se como técnico em desenvolvimento de sistemas na Etec João Belarmino de Amparo. 
                Uma formação completa que integra ensino médio e capacitação profissional de qualidade.
              </p>
              <HeroButtons 
                primaryText="Inscreva-se no Vestibulinho"
                secondaryText="Conheça o Curso"
              />
            </div>
            <div className="relative">
              <Image
                src="/students-coding.png"
                alt="Alunos programando no laboratório"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Números
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Resultados que comprovam a qualidade da nossa formação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Sobre o Curso */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Sobre o Curso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O curso técnico em Desenvolvimento de Sistemas capacita você a analisar, projetar, 
              documentar, testar e manter sistemas computacionais de informação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <Code className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">Programação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aprenda linguagens modernas como PHP, JavaScript, Kotlin, C++ e C#.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">Projetos em Equipe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Desenvolva projetos reais em equipe, simulando o ambiente profissional
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">Certificação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diploma técnico reconhecido pelo MEC e pelo mercado de trabalho
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">3 Anos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Formação integrada ao ensino médio em período integral
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Horários */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Horários de Aula
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Duas turmas por ano com horários flexíveis para atender diferentes necessidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {horarios.map((horario, index) => (
              <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                          {horario.periodo}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium">
                          {horario.horario}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="transition-all duration-200 group-hover:scale-105">
                      {horario.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">
                    {horario.vagas} por turma
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O que torna nosso curso único e especial
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {diferenciais.map((diferencial, index) => {
                const IconComponent = diferencial.icon
                return (
                  <div key={index} className="flex items-start space-x-4 group hover:bg-muted/50 p-4 rounded-lg transition-all duration-200">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-200 group-hover:scale-110 group-hover:bg-primary/80">
                      <IconComponent className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                        {diferencial.titulo}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {diferencial.descricao}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div>
              <Image
                src="/modern-computer-lab.png"
                alt="Laboratório de informática moderno"
                width={500}
                height={400}
                className="rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça alguns dos projetos desenvolvidos pelos nossos estudantes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetosDestaque.map((projeto, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <div className="relative">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Badge className="bg-primary">
                      {projeto.categoria}
                    </Badge>
                    {projeto.implementado && (
                      <Badge className="bg-green-500 text-green-900">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Implementado
                      </Badge>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {projeto.titulo}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {projeto.descricao}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{projeto.tecnologia}</Badge>
                    <div className="flex gap-2">
                      {projeto.demo && (
                        <Button 
                          asChild
                          variant="ghost" 
                          size="sm" 
                          className="hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                          title="Ver Demo"
                        >
                          <Link href={projeto.demo} target="_blank" rel="noopener noreferrer">
                            <Play className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                      {projeto.github && (
                        <Button 
                          asChild
                          variant="ghost" 
                          size="sm" 
                          className="hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                          title="Ver Código"
                        >
                          <Link href={projeto.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="lg" className="transition-all duration-200 hover:scale-105 hover:shadow-lg">
              <Link href="/projetos">
                <ArrowRight className="w-4 h-4 mr-2" />
                Ver Todos os Projetos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Siga-nos no Instagram
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Acompanhe o dia a dia do curso @ds.etec
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Link href="https://instagram.com/ds.etec" target="_blank">
                <Instagram className="w-5 h-5 mr-2" />
                Seguir @ds.etec
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/instaUm.png", alt: "Terceiro DS 2025" },
              { src: "/instaDois.png", alt: "Aluna com caneca do terceiro DS 2025" },
              { src: "/instaTres.png", alt: "Alunos na CI&T" },
              { src: "/instaQuatro.png", alt: "Post do Instagram" }
            ].map((post, i) => (
              <Link 
                key={i} 
                href="https://instagram.com/ds.etec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="aspect-square relative rounded-lg overflow-hidden group block"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para Começar sua Jornada?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Inscreva-se no vestibulinho e faça parte da próxima turma de desenvolvedores da Etec João Belarmino. 
            Uma oportunidade única de formação técnica de qualidade.
          </p>
          <p className="text-sm text-primary-foreground/70 mt-6">
            Inscrições abertas para o processo seletivo 2025
          </p>
        </div>
      </section>
    </div>
  )
}
