"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, Code, Smartphone, Monitor, Gamepad2, ArrowRight, Users, Award, Star, Calendar } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { HeroButtons } from "@/components/ui/hero-buttons"

export default function ProjetosPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos")

  const projetos = [
    {
      titulo: "Sistema de Gestão de Transporte Escolar",
      descricao: "Aplicação web completa para gestão de transporte escolar para empresas e passageiros",
      tecnologias: ["React", "Node.js"],
      imagem: "/bushere.png",
      alunos: ["Victor Ramos", "Renan Andrade", "Sarah Porsch", "Marcelo Camillo", "Luiz Souza"],
      ano: "2025",
      categoria: "Web",
      destaque: true,
    },
    {
      titulo: "Site sobre conscientização de Capivaras",
      descricao: "Site sobre conscientização de Capivaras",
      tecnologias: ["React", "Next.js"],
      imagem: "/capivara.png",
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
      imagem: "/maoRobotica.png",
      alunos: ["Vitor Cordeiro"],
      ano: "2024",
      categoria: "Game",
      destaque: true,
      premio: "Melhor Projeto Educacional",
      demo: "https://www.youtube.com/watch?v=Ac7zUeninqw",
      github: "https://github.com/VitorCordS/Mechanic-Hand-Tracking"
    },
    {
      titulo: "Jogo Educativo de Programação",
      descricao: "Game 2D para ensinar conceitos básicos de programação para crianças do ensino fundamental.",
      tecnologias: ["Unity", "C#", "SQLite"],
      imagem: "/educational-programming-game.png",
      alunos: ["Gabriel Alves", "Isabela Martins"],
      ano: "2023",
      categoria: "Game",
      destaque: true,
      premio: "Melhor Projeto Educacional",
    },
    {
      titulo: "Sistema de Controle de Estoque",
      descricao: "Aplicação desktop para pequenas empresas controlarem estoque, vendas e relatórios financeiros.",
      tecnologias: ["Java", "JavaFX", "MySQL"],
      imagem: "/inventory-management-app.png",
      alunos: ["Fernando Castro", "Juliana Pereira", "Marcos Vieira"],
      ano: "2023",
      categoria: "Desktop",
      destaque: false,
      implementado: true,
    },
    {
      titulo: "App de Transporte Escolar",
      descricao: "Aplicativo para monitoramento de transporte escolar com GPS e notificações para pais.",
      tecnologias: ["Flutter", "Firebase", "Google Maps API"],
      imagem: "/school-transport-tracking-app.png",
      alunos: ["Beatriz Gomes", "Diego Santos"],
      ano: "2024",
      categoria: "Mobile",
      destaque: false,
      implementado: false,
    },
    {
      titulo: "Plataforma de Cursos Online",
      descricao: "Sistema completo para criação e gestão de cursos online com vídeos, exercícios e certificados.",
      tecnologias: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
      imagem: "/modern-ecommerce-website.png",
      alunos: ["Rafael Mendes", "Carolina Silva"],
      ano: "2024",
      categoria: "Web",
      destaque: true,
      premio: "Destaque em Inovação",
    },
    {
      titulo: "App de Gestão Financeira",
      descricao: "Aplicativo mobile para controle de gastos pessoais com gráficos e relatórios detalhados.",
      tecnologias: ["React Native", "Redux", "SQLite", "Chart.js"],
      imagem: "/mobile-app-interface.png",
      alunos: ["Thiago Costa", "Amanda Lima"],
      ano: "2023",
      categoria: "Mobile",
      destaque: false,
      implementado: false,
    }
  ]

  const categorias = [
    { id: "Todos", nome: "Todos os Projetos", icon: Code, count: projetos.length },
    { id: "Web", nome: "Aplicações Web", icon: Monitor, count: projetos.filter(p => p.categoria === "Web").length },
    { id: "Mobile", nome: "Apps Mobile", icon: Smartphone, count: projetos.filter(p => p.categoria === "Mobile").length },
    { id: "Desktop", nome: "Sistemas Desktop", icon: Monitor, count: projetos.filter(p => p.categoria === "Desktop").length },
    { id: "Game", nome: "Jogos", icon: Gamepad2, count: projetos.filter(p => p.categoria === "Game").length }
  ]

  const estatisticas = [
    {
      titulo: "50+",
      descricao: "Projetos Desenvolvidos",
      icon: Code,
      cor: "text-primary",
      bg: "bg-primary/10"
    },
    {
      titulo: "15+",
      descricao: "Tecnologias Utilizadas",
      icon: Award,
      cor: "text-accent",
      bg: "bg-accent/10"
    },
    {
      titulo: "3+",
      descricao: "Projetos Implementados",
      icon: Star,
      cor: "text-green-600",
      bg: "bg-green-100"
    },
    {
      titulo: "100%",
      descricao: "Alunos com Portfólio",
      icon: Users,
      cor: "text-blue-600",
      bg: "bg-blue-100"
    }
  ]

  const projetosFiltrados = categoriaAtiva === "Todos" 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === categoriaAtiva)

  const handleDemo = (projeto: any) => {
    if (projeto.demo) {
      window.open(projeto.demo, '_blank', 'noopener,noreferrer')
    }
  }

  const handleCodigo = (projeto: any) => {
    if (projeto.github) {
      window.open(projeto.github, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
              Portfólio dos Alunos
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Projetos dos Alunos
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Conheça os projetos desenvolvidos pelos nossos estudantes durante o curso. 
              Aplicações reais que demonstram a qualidade da nossa formação técnica e profissionalizante.
            </p>
            <div className="flex justify-center">
              <HeroButtons />
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
              Resultados que comprovam a qualidade dos projetos desenvolvidos
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

      {/* Filtros */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Explore os Projetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Filtre por categoria e descubra projetos incríveis desenvolvidos pelos nossos alunos
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categorias.map((categoria) => {
              const IconComponent = categoria.icon
              return (
                <Button
                  key={categoria.id}
                  variant={categoriaAtiva === categoria.id ? "default" : "outline"}
                  onClick={() => setCategoriaAtiva(categoria.id)}
                  className="flex items-center space-x-2 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{categoria.nome}</span>
                  <Badge variant="secondary" className="ml-2">
                    {categoria.count}
                  </Badge>
                </Button>
              )
            })}
          </div>

          {/* Grid de Projetos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetosFiltrados.map((projeto, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <div className="relative">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Badge className="bg-primary">
                      {projeto.categoria}
                    </Badge>
                    {projeto.destaque && (
                      <Badge className="bg-yellow-500 text-yellow-900">
                        <Star className="w-3 h-3 mr-1" />
                        Destaque
                      </Badge>
                    )}
                    {projeto.implementado && (
                      <Badge className="bg-green-500 text-green-900">
                        <Award className="w-3 h-3 mr-1" />
                        Implementado
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                      {projeto.titulo}
                    </CardTitle>
                    <Badge variant="outline">
                      <Calendar className="w-3 h-3 mr-1" />
                      {projeto.ano}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {projeto.descricao}
                  </CardDescription>
                  {projeto.premio && (
                    <Badge variant="secondary" className="w-fit">
                      <Award className="w-3 h-3 mr-1" />
                      {projeto.premio}
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Tecnologias */}
                    <div>
                      <h4 className="font-medium text-sm mb-2 flex items-center">
                        <Code className="w-4 h-4 mr-1" />
                        Tecnologias:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {projeto.tecnologias.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Alunos */}
                    <div>
                      <h4 className="font-medium text-sm mb-2 flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        Desenvolvido por:
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {projeto.alunos.join(", ")}
                      </p>
                    </div>
                    
                    {/* Botões */}
                    {(projeto.demo || projeto.github) && (
                      <div className={`flex gap-2 pt-2 ${projeto.demo && projeto.github ? '' : 'justify-center'}`}>
                        {projeto.demo && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleDemo(projeto)}
                            className={`transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground ${projeto.demo && projeto.github ? 'flex-1' : ''}`}
                            title="Ver Demo"
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Demo
                          </Button>
                        )}
                        {projeto.github && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleCodigo(projeto)}
                            className={`transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground ${projeto.demo && projeto.github ? 'flex-1' : ''}`}
                            title="Ver Código"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Código
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Destaque */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Seu Projeto Pode Estar Aqui!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Durante o curso, você desenvolverá projetos reais que poderão ser apresentados 
              em feiras de ciências, concursos e até mesmo implementados por empresas parceiras. 
              Nossa metodologia prática garante que você saia do curso com um portfólio sólido.
            </p>
            <div className="flex justify-center">
              <HeroButtons />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
