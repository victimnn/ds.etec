"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Code, Briefcase, GraduationCap, User, Award, Star, ExternalLink, Play, BookOpen, Target, TrendingUp } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { HeroButtons } from "@/components/ui/hero-buttons"

export default function PersonalPage() {
  // Dados pessoais - você pode personalizar aqui
  const dadosPessoais = {
    nome: "Seu Nome Completo",
    cargo: "Desenvolvedor Full Stack",
    foto: "/placeholder-user.jpg",
    email: "seuemail@example.com",
    linkedin: "https://linkedin.com/in/seu-perfil",
    github: "https://github.com/seu-usuario",
    bio: "Desenvolvedor apaixonado por tecnologia, formado em Desenvolvimento de Sistemas pela Etec João Belarmino. Especializado em criar soluções web modernas e eficientes utilizando as melhores práticas do mercado.",
    localizacao: "Amparo, SP",
    idade: "18 anos"
  }

  const sobre = {
    resumo: "Sou um profissional dedicado e apaixonado por tecnologia, com foco em desenvolvimento de software. Formado pela Etec João Belarmino, onde adquiri sólida formação técnica em programação, banco de dados e desenvolvimento web/mobile. Busco constantemente aprender novas tecnologias e aplicar boas práticas no desenvolvimento de soluções.",
    objetivo: "Atuar como desenvolvedor em uma empresa inovadora que valorize criatividade, aprendizado contínuo e trabalho em equipe, contribuindo com minhas habilidades técnicas e dedicação para criar produtos de qualidade."
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
      items: ["Node.js", "Python", "PHP", "APIs REST", "Express"],
      icon: Briefcase,
      cor: "text-green-600",
      bg: "bg-green-100"
    },
    { 
      categoria: "Database", 
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
      icon: BookOpen,
      cor: "text-purple-600",
      bg: "bg-purple-100"
    },
    { 
      categoria: "Ferramentas", 
      items: ["Git", "GitHub", "VS Code", "Figma", "Docker"],
      icon: Award,
      cor: "text-orange-600",
      bg: "bg-orange-100"
    }
  ]

  const experiencia = [
    {
      empresa: "Empresa Exemplo Tech",
      cargo: "Desenvolvedor Junior",
      periodo: "2024 - Presente",
      descricao: "Desenvolvimento de aplicações web utilizando React e Node.js. Participação em projetos de modernização de sistemas legados e implementação de novas funcionalidades.",
      tecnologias: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      tipo: "Estágio"
    },
    {
      empresa: "Projeto Freelance",
      cargo: "Desenvolvedor Web",
      periodo: "2023 - 2024",
      descricao: "Desenvolvimento de sites institucionais e e-commerce para pequenas empresas da região. Foco em design responsivo e performance.",
      tecnologias: ["HTML", "CSS", "JavaScript", "PHP"],
      tipo: "Freelance"
    }
  ]

  const educacao = [
    {
      instituicao: "Etec João Belarmino",
      curso: "Técnico em Desenvolvimento de Sistemas Integrado ao Ensino Médio",
      periodo: "2022 - 2024",
      descricao: "Formação técnica completa em desenvolvimento de software, incluindo programação, banco de dados, desenvolvimento web e mobile.",
      destaque: true
    }
  ]

  const projetos = [
    {
      titulo: "Sistema de Gestão Escolar",
      descricao: "Aplicação web completa para gestão de alunos, professores e notas. Desenvolvido como TCC.",
      imagem: "/projetos/bushere.png",
      tecnologias: ["React", "Node.js", "MySQL"],
      categoria: "Web",
      destaque: true,
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

  const certificacoes = [
    { nome: "Desenvolvimento Web Completo", instituicao: "Etec", ano: "2024" },
    { nome: "JavaScript Avançado", instituicao: "Online", ano: "2023" },
    { nome: "React Fundamentals", instituicao: "Online", ano: "2023" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Portfolio Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Foto e Info Básica */}
              <div className="text-center lg:text-left">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
                  Portfólio Profissional
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                  {dadosPessoais.nome}
                </h1>
                <p className="text-2xl lg:text-3xl text-primary-foreground/90 mb-6">
                  {dadosPessoais.cargo}
                </p>
                <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                  {dadosPessoais.bio}
                </p>
                
                {/* Botões de Contato */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="cursor-pointer transition-all duration-200 hover:scale-105"
                    onClick={() => window.location.href = `mailto:${dadosPessoais.email}`}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Email
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:scale-105"
                    onClick={() => window.open(dadosPessoais.linkedin, '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer transition-all duration-200 hover:scale-105"
                    onClick={() => window.open(dadosPessoais.github, '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>

              {/* Foto de Perfil */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-30"></div>
                  <Image
                    src={dadosPessoais.foto}
                    alt={dadosPessoais.nome}
                    width={400}
                    height={400}
                    className="relative rounded-full border-8 border-primary-foreground/20 shadow-2xl transition-all duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Sobre Mim
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça mais sobre minha trajetória e objetivos profissionais
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologias e ferramentas que domino
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Experiência Profissional
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Minha trajetória no mercado de trabalho
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meus Projetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alguns dos trabalhos que desenvolvi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
      <section className="py-16 bg-muted">
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
      </section>

      {/* Call to Action Final */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Estou sempre aberto a novos desafios e oportunidades. 
              Se você está procurando um desenvolvedor dedicado e apaixonado por tecnologia, 
              entre em contato!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="cursor-pointer transition-all duration-200 hover:scale-105"
                onClick={() => window.location.href = `mailto:${dadosPessoais.email}`}
              >
                <Mail className="w-5 h-5 mr-2" />
                Entre em Contato
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="cursor-pointer transition-all duration-200 hover:scale-105"
                onClick={() => window.open(dadosPessoais.github, '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                Ver Repositórios
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

