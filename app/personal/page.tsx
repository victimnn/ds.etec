"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Mail, Linkedin, Github, Code, Briefcase, GraduationCap, User, Award, Star, ExternalLink, Play, BookOpen, Target, TrendingUp, Menu, Home } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function PersonalPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  // Smooth scroll para as seções
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  // Detecta a seção ativa durante o scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'habilidades', 'experiencia', 'projetos', 'certificacoes', 'contato']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Dados pessoais - você pode personalizar aqui
  const dadosPessoais = {
    nome: "Victor Ramos",
    cargo: "Desenvolvedor Full Stack",
    foto: "/victor.jpg",
    email: "victor.ramosp19@gmail.com",
    linkedin: "https://www.linkedin.com/in/victor-pramos19/",
    github: "https://github.com/victimnn",
    bio: "Apaixonado por tecnologia, formado em Desenvolvimento de Sistemas pela Etec João Belarmino. Especializado em criar soluções web modernas e eficientes utilizando as melhores práticas do mercado.",
    localizacao: "Jaguariúna, SP",
    idade: "17 anos"
  }

  const sobre = {
    resumo: "Atuo como líder e desenvolvedor do projeto BusHere! e outras aplicações web como este site, com foco em criar soluções escaláveis, seguras e de fácil manutenção. Tenho interesse em áreas como cloud computing, integração de sistemas, automação e inteligência artificial, visando unir prática acadêmica e profissional para entregar resultados de impacto",
    objetivo: "Atuar como desenvolvedor em uma empresa inovadora que valorize criatividade, aprendizado contínuo e trabalho em equipe, contribuindo com minhas habilidades técnicas e dedicação para criar soluções de qualidade."
  }

  const habilidades = [
    { 
      categoria: "Front-End", 
      items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TailwindCSS"],
      icon: Code,
      cor: "text-blue-600",
      bg: "bg-blue-100"
    },
    { 
      categoria: "Back-End", 
      items: ["Node.js", "Python", "C#", "APIs REST", "Express"],
      icon: Briefcase,
      cor: "text-green-600",
      bg: "bg-green-100"
    },
    { 
      categoria: "Database", 
      items: ["MySQL", "SQL Server"],
      icon: BookOpen,
      cor: "text-purple-600",
      bg: "bg-purple-100"
    },
    { 
      categoria: "Ferramentas", 
      items: ["Git", "GitHub", "Cursor", "Figma", "Docker", "Vercel", "ClickUp"],
      icon: Award,
      cor: "text-orange-600",
      bg: "bg-orange-100"
    }
  ]

  const experiencia = [
    {
      empresa: "BusHere!",
      cargo: "Líder e Desenvolvedor",
      periodo: "2025",
      descricao: "Desenvolvimento de aplicações web utilizando React e Node.js. Participação em projetos de modernização de sistemas legados e implementação de novas funcionalidades.",
      tecnologias: ["JavaScript", "React", "Node.js", "Bootstrap", "Express", "MySQL"],
      tipo: "TCC"
    },
    {
      empresa: "Projetos Freelancer",
      cargo: "Desenvolvedor Web",
      periodo: "2024 - Presente",
      descricao: "Desenvolvimento de sites para instituições da região. Foco em design responsivo e performance.",
      tecnologias: ["HTML", "JavaScript", "React", "Next.js", "TailwindCSS"],
      tipo: "Freelance"
    }
  ]

  const educacao = [
    {
      instituicao: "Etec João Belarmino",
      curso: "Técnico em Desenvolvimento de Sistemas Integrado ao Ensino Médio",
      periodo: "2023 - 2025",
      descricao: "Formação técnica completa em desenvolvimento de software, incluindo programação, banco de dados, desenvolvimento web e mobile.",
      destaque: false
    }
  ]

  const projetos = [
    {
      titulo: "Sistema de Gestão Escolar",
      descricao: "Aplicação web completa para gestão de alunos, professores e notas. Desenvolvido como TCC.",
      imagem: "/projetos/bushere.png",
      tecnologias: ["React", "Node.js", "MySQL"],
      categoria: "Web",
      destaque: false,
      github: "https://github.com/seu-usuario/projeto",
      demo: "#"
    },
    {
      titulo: "App de Delivery",
      descricao: "Aplicativo mobile para pedidos de delivery com interface intuitiva e sistema de rastreamento em tempo real.",
      imagem: "/projetos/capivara.png",
      tecnologias: ["React Native", "Firebase"],
      categoria: "Mobile",
      destaque: false,
      github: "#"
    },
    {
      titulo: "Portfolio Pessoal",
      descricao: "Site portfolio responsivo desenvolvido com Next.js e animações modernas.",
      imagem: "/projetos/disableComents.png",
      tecnologias: ["Next.js", "TailwindCSS", "TypeScript"],
      categoria: "Web",
      destaque: false,
      demo: "#"
    }
  ]


  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' },
  ]

  return (
    <div className="min-h-screen">
      {/* Navegação Fixa */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Nome */}
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer"
            >
              VictorRamos.DEV
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors cursor-pointer relative group ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              <Link href="/" className="ml-4">
                <Button variant="outline" size="sm" className="cursor-pointer">
                  <Home className="w-4 h-4 mr-2" />
                  Voltar ao Site
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[350px] p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu de Navegação - Victor Ramos</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="px-4 sm:px-6 pt-6 pb-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold truncate">VictorRamos.DEV</div>
                        <div className="text-xs text-muted-foreground truncate">Portfólio Profissional</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Links */}
                  <nav className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      {menuItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`px-3 py-2.5 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 text-left ${
                            activeSection === item.id 
                              ? 'text-primary bg-primary/10' 
                              : 'text-foreground hover:text-primary hover:bg-accent'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </nav>
                  
                  {/* Footer */}
                  <div className="px-4 sm:px-6 py-4 border-t bg-muted/30">
                    <div className="space-y-3">
                      <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-5">
                          <Home className="w-4 h-4 mr-2" />
                          Voltar ao Site
                        </Button>
                      </Link>
                      <div className="flex justify-center gap-6">
                        <button
                          onClick={() => {
                            window.open(dadosPessoais.github, '_blank')
                            setIsMenuOpen(false)
                          }}
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            window.open(dadosPessoais.linkedin, '_blank')
                            setIsMenuOpen(false)
                          }}
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            window.location.href = `mailto:${dadosPessoais.email}`
                            setIsMenuOpen(false)
                          }}
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          aria-label="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section - Portfolio Header */}
      <section id="inicio" className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground pt-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Foto de Perfil - Mobile First */}
              <div className="flex justify-center lg:justify-end lg:order-2">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-30"></div>
                  <Image
                    src={dadosPessoais.foto}
                    alt={dadosPessoais.nome}
                    width={400}
                    height={400}
                    className="relative w-full h-full rounded-full border-4 sm:border-8 border-primary-foreground/20 shadow-2xl object-cover"
                  />
                </div>
              </div>

              {/* Info Básica */}
              <div className="text-center lg:text-left lg:order-1">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 sm:mb-6 inline-block">
                  Portfólio Profissional
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                  {dadosPessoais.nome}
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 mb-4 sm:mb-6">
                  {dadosPessoais.cargo}
                </p>
                <p className="text-base sm:text-lg text-primary-foreground/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {dadosPessoais.bio}
                </p>
                
                {/* Botões de Contato */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="cursor-pointer transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                    onClick={() => window.location.href = `mailto:${dadosPessoais.email}`}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Enviar Email
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                    onClick={() => window.open(dadosPessoais.linkedin, '_blank')}
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                    onClick={() => window.open(dadosPessoais.github, '_blank')}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim */}
      <section id="sobre" className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Sobre Mim
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Conheça mais sobre minha trajetória e objetivos profissionais
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 lg:grid-cols-2">
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-200">
                    Quem Sou Eu
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {sobre.resumo}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Localização</p>
                    <p className="font-semibold">{dadosPessoais.localizacao}</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Idade</p>
                    <p className="font-semibold">{dadosPessoais.idade}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-200">
                    Objetivos
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {sobre.objetivo}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção Habilidades */}
      <section id="habilidades" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Tecnologias e ferramentas que domino
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {habilidades.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader>
                    <div className={`w-16 h-16 ${skill.bg} rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 mx-auto`}>
                      <IconComponent className={`w-8 h-8 ${skill.cor}`} />
                    </div>
                    <CardTitle className="text-center group-hover:text-primary transition-colors duration-200">
                      {skill.categoria}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Seção Mercado de Trabalho / Experiência */}
      <section id="experiencia" className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Experiência Profissional
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Minha trajetória no mercado de trabalho
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {experiencia.map((exp, index) => (
              <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                          {exp.cargo}
                        </CardTitle>
                        <Badge variant="secondary">{exp.tipo}</Badge>
                      </div>
                      <CardDescription className="text-lg font-medium">
                        {exp.empresa}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="transition-all duration-200 group-hover:scale-105">
                      {exp.periodo}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.descricao}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tecnologias.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Educação */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Formação Acadêmica
            </h3>
            {educacao.map((edu, index) => (
              <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                          {edu.curso}
                        </CardTitle>
                        {edu.destaque && (
                          <Badge className="bg-yellow-500 text-yellow-900">
                            <Star className="w-3 h-3 mr-1" />
                            Destaque
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-lg font-medium">
                        {edu.instituicao}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{edu.periodo}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.descricao}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Meus Projetos
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Alguns dos trabalhos que desenvolvi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {projetos.map((projeto, index) => (
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
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                    {projeto.titulo}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {projeto.descricao}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
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
                    
                    <div className="flex gap-2 pt-2">
                      {projeto.demo && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                          onClick={() => window.open(projeto.demo, '_blank')}
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      )}
                      {projeto.github && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                          onClick={() => window.open(projeto.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Código
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Certificações */}
      {/* <section id="certificacoes" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Certificações
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cursos e certificações obtidos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certificacoes.map((cert, index) => (
              <Card key={index} className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                    {cert.nome}
                  </CardTitle>
                  <CardDescription>
                    {cert.instituicao}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{cert.ano}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action Final */}
      <section id="contato" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
              Estou sempre aberto a novos desafios e oportunidades. 
              Se você está procurando um desenvolvedor dedicado e apaixonado por tecnologia, 
              entre em contato!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none">
              <Button 
                size="lg"
                className="cursor-pointer transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                onClick={() => window.location.href = `mailto:${dadosPessoais.email}`}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Entre em Contato
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="cursor-pointer transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                onClick={() => window.open(dadosPessoais.github, '_blank')}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Ver Repositórios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="bg-muted border-t py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground text-xs sm:text-sm">
              © {new Date().getFullYear()} {dadosPessoais.nome}. Todos os direitos reservados.
            </p>
            <div className="flex justify-center gap-4 sm:gap-6 mt-3 sm:mt-4">
              <button
                onClick={() => window.open(dadosPessoais.github, '_blank')}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open(dadosPessoais.linkedin, '_blank')}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.location.href = `mailto:${dadosPessoais.email}`}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

