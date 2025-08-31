"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building, TrendingUp, Users, Star, Quote, Briefcase, DollarSign, Target, Award, ExternalLink, ArrowRight, Code, Smartphone, Database, Server, Wrench, Globe } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function MercadoPage() {
  const [activeTab, setActiveTab] = useState('areas')

  const areas = [
    {
      titulo: "Desenvolvimento Web",
      descricao: "Criação de sites, sistemas web e e-commerce",
      salario: "R$ 2.500 - R$ 8.000",
      demanda: "Alta",
      tecnologias: ["HTML/CSS", "JavaScript", "React", "Node.js"],
      icon: Globe,
      crescimento: "+15% ao ano"
    },
    {
      titulo: "Desenvolvimento Mobile",
      descricao: "Apps para Android e iOS",
      salario: "R$ 3.000 - R$ 9.000",
      demanda: "Muito Alta",
      tecnologias: ["React Native", "Flutter", "Java", "Swift"],
      icon: Smartphone,
      crescimento: "+25% ao ano"
    },
    {
      titulo: "Análise de Sistemas",
      descricao: "Análise de requisitos e especificação de sistemas",
      salario: "R$ 3.500 - R$ 10.000",
      demanda: "Alta",
      tecnologias: ["UML", "SQL", "Metodologias Ágeis"],
      icon: Target,
      crescimento: "+12% ao ano"
    },
    {
      titulo: "Banco de Dados",
      descricao: "Administração e desenvolvimento de BD",
      salario: "R$ 4.000 - R$ 12.000",
      demanda: "Alta",
      tecnologias: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      icon: Database,
      crescimento: "+18% ao ano"
    },
    {
      titulo: "DevOps",
      descricao: "Automação e infraestrutura",
      salario: "R$ 5.000 - R$ 15.000",
      demanda: "Muito Alta",
      tecnologias: ["Docker", "AWS", "Jenkins", "Kubernetes"],
      icon: Server,
      crescimento: "+30% ao ano"
    },
    {
      titulo: "Suporte Técnico",
      descricao: "Manutenção e suporte de sistemas",
      salario: "R$ 2.000 - R$ 5.000",
      demanda: "Média",
      tecnologias: ["Windows", "Linux", "Redes", "Hardware"],
      icon: Wrench,
      crescimento: "+8% ao ano"
    }
  ]

  const empresas = [
    { 
      nome: "TechSolutions Amparo", 
      tipo: "Software House", 
      vagas: "5-10 vagas/ano",
      setor: "Tecnologia",
      localizacao: "Amparo, SP"
    },
    { 
      nome: "Indústrias Reunidas", 
      tipo: "Indústria", 
      vagas: "2-5 vagas/ano",
      setor: "Industrial",
      localizacao: "Amparo, SP"
    },
    { 
      nome: "Prefeitura de Amparo", 
      tipo: "Setor Público", 
      vagas: "1-3 vagas/ano",
      setor: "Público",
      localizacao: "Amparo, SP"
    },
    { 
      nome: "Banco Regional", 
      tipo: "Financeiro", 
      vagas: "3-8 vagas/ano",
      setor: "Financeiro",
      localizacao: "Região de Campinas"
    },
    { 
      nome: "Hospital São Luiz", 
      tipo: "Saúde", 
      vagas: "2-4 vagas/ano",
      setor: "Saúde",
      localizacao: "Amparo, SP"
    },
    { 
      nome: "Cooperativa Agrícola", 
      tipo: "Agronegócio", 
      vagas: "1-2 vagas/ano",
      setor: "Agronegócio",
      localizacao: "Região de Amparo"
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
      titulo: "95%",
      descricao: "Taxa de Empregabilidade",
      icon: TrendingUp,
      cor: "text-green-600",
      bg: "bg-green-100"
    },
    {
      titulo: "50+",
      descricao: "Empresas Parceiras",
      icon: Building,
      cor: "text-primary",
      bg: "bg-primary/10"
    },
    {
      titulo: "6 meses",
      descricao: "Tempo Médio para 1º Emprego",
      icon: Users,
      cor: "text-primary",
      bg: "bg-primary/10"
    },
    {
      titulo: "R$ 3.200",
      descricao: "Salário Médio Inicial",
      icon: DollarSign,
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
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
              Oportunidades de Carreira
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Mercado de Trabalho
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Descubra as inúmeras oportunidades de carreira para técnicos em Desenvolvimento de Sistemas. 
              Um mercado em constante crescimento com salários atrativos e alta demanda por profissionais qualificados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Link href="/vestibulinho">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Inscreva-se Agora
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Ver Vagas
              </Button>
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
              Resultados que comprovam o sucesso dos nossos alunos no mercado de trabalho
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

      {/* Áreas de Atuação */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Principais campos de trabalho para técnicos em Desenvolvimento de Sistemas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Card key={index} className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge 
                        variant={area.demanda === 'Muito Alta' ? 'default' : area.demanda === 'Alta' ? 'secondary' : 'outline'} 
                        className="transition-all duration-200 group-hover:scale-105"
                      >
                        {area.demanda}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                      {area.titulo}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {area.descricao}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="font-bold text-green-700 text-lg">{area.salario}</p>
                        <p className="text-sm text-green-600">Faixa salarial mensal</p>
                      </div>
                      
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="font-bold text-blue-700 text-sm">{area.crescimento}</p>
                        <p className="text-xs text-blue-600">Crescimento do mercado</p>
                      </div>
                      
                      <div>
                        <p className="font-medium mb-2 text-sm">Principais tecnologias:</p>
                        <div className="flex flex-wrap gap-1">
                          {area.tecnologias.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs transition-all duration-200 hover:scale-105">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Empresas Parceiras */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Empresas Parceiras
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Organizações que oferecem oportunidades de estágio e emprego para nossos alunos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {empresas.map((empresa, index) => (
              <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                        {empresa.nome}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {empresa.tipo} • {empresa.localizacao}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="transition-all duration-200 group-hover:scale-105">
                      {empresa.setor}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-medium">{empresa.vagas}</span>
                    <Button variant="outline" size="sm" className="transition-all duration-200 hover:scale-105">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Ver Vagas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Histórias de Sucesso */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Depoimentos de ex-alunos que se destacaram no mercado de trabalho
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <div className="flex items-center space-x-2 mt-1">
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
        <div className="container mx-auto px-4">
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
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
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
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
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
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
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

      {/* CTA Final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para Começar sua Carreira?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            O mercado de tecnologia está esperando por você. Faça parte da próxima turma e construa um futuro promissor 
            com uma formação sólida e reconhecida pelo mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/vestibulinho">
                <ArrowRight className="w-4 h-4 mr-2" />
                Inscreva-se no Vestibulinho
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Conheça o Curso
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-6">
            Inscrições abertas para o processo seletivo 2024
          </p>
        </div>
      </section>
    </div>
  )
}
