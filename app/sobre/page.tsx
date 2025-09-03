"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Users, Award, Building, Clock, Monitor, Code, Database, Globe, Smartphone, Shield, Cpu, TestTube, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroButtons } from "@/components/ui/hero-buttons"

export default function SobrePage() {
  const matrizCurricular = [
    {
      ano: "1º Ano",
      disciplinas: [
        { nome: "TÉCNICAS DE PROGRAMAÇÃO E ALGORITMOS", descricao: "Fundamentos da programação, lógica e algoritmos", icon: Code },
        { nome: "PROGRAMAÇÃO WEB I", descricao: "Desenvolvimento web com HTML, CSS", icon: Globe },
        { nome: "FUNDAMENTOS DA INFORMÁTICA", descricao: "Conceitos básicos de computação e sistemas", icon: Monitor },
        { nome: "DESIGN DIGITAL", descricao: "Design de interfaces e experiência do usuário", icon: Award },
        { nome: "BANCO DE DADOS I", descricao: "Introdução ao banco de dados", icon: Database }
      ]
    },
    {
      ano: "2º Ano",
      disciplinas: [
        { nome: "PROGRAMAÇÃO WEB II", descricao: "Desenvolvimento web avançado com PHP", icon: Globe },
        { nome: "PROGRAMAÇÃO DE APLICATIVOS MOBILE I", descricao: "Desenvolvimento de aplicativos móveis", icon: Smartphone },
        { nome: "DESENVOLVIMENTO DE SISTEMAS", descricao: "Desenvolvimento de sistemas com programação orientada a objetos", icon: Code },
        { nome: "BANCO DE DADOS II", descricao: "Administração e implementação de bancos de dados", icon: Database }
      ]
    },
    {
      ano: "3º Ano",
      disciplinas: [
        { nome: "TCC EM DESENVOLVIMENTO DE SISTEMAS", descricao: "Trabalho de Conclusão de Curso", icon: Award },
        { nome: "INTERNET, PROTOCOLOS E SEGURANÇA DE SISTEMAS DA INFORMAÇÃO", descricao: "Redes, protocolos e segurança da informação", icon: Shield },
        { nome: "PROGRAMAÇÃO DE APLICATIVOS MOBILE II", descricao: "Desenvolvimento mobile avançado", icon: Smartphone },
        { nome: "SISTEMAS EMBARCADOS", descricao: "Programação de sistemas embarcados com Arduino", icon: Cpu },
        { nome: "QUALIDADE E TESTE DE SOFTWARE", descricao: "Testes e garantia de qualidade", icon: TestTube },
        { nome: "PROGRAMAÇÃO WEB III", descricao: "Desenvolvimento web avançado com frameworks modernos", icon: Globe }
      ]
    }
  ]

  const professores = [
    { nome: "Coord. Laine Zanin", especialidade: "Desenvolvimento Web e Banco de Dados", experiencia: "10 anos", area: "Programação", orientadorTCC: false },
    { nome: "Prof. Rubens Castaldelli", especialidade: "Banco de Dados e Algoritmos", experiencia: "13 anos", area: "Banco de Dados", orientadorTCC: true },
    { nome: "Dr. Emerson Rodrigo", especialidade: "Algoritmos e Sistemas Embarcados", experiencia: "25 anos", area: "Algoritmos", orientadorTCC: true },
    { nome: "Prof. Giuliano Catteli", especialidade: "Programação e Segurança da Informação", experiencia: "42 anos", area: "Programação", orientadorTCC: false },
    { nome: "Prof. Fernando Bartholomeu", especialidade: "Desenvolvimento Web e Mobile", experiencia: "12 anos", area: "Programação", orientadorTCC: false },
    { nome: "Prof. Sérgio Roberto", especialidade: "Redes e Sistemas", experiencia: "14 anos", area: "Redes", orientadorTCC: false },
    { nome: "Profa. Vânia Brunetto", especialidade: "Algoritmos e Programação", experiencia: "12 anos", area: "Algoritmos", orientadorTCC: false }
  ]

  const infraestrutura = [
    {
      titulo: "6 Laboratórios de Informática",
      descricao: "Laboratórios modernos e equipados",
      detalhes: [
        "20 computadores por laboratório",
        "Configuração atualizada com processadores AMD Ryzen 5",
        "8GB de RAM e SSDs",
        "Monitores LED de 21 polegadas",
        "Softwares de desenvolvimento instalados",
        "Conexão de internet de alta velocidade"
      ],
      icon: Monitor,
      total: "120 computadores"
    },
    {
      titulo: "Sala Maker",
      descricao: "Ambiente para projetos e pesquisas",
      detalhes: [
        "Televisão LED de 65 polegadas",
        "Notebooks para projetos",
        "Impressora 3D"
      ],
      icon: Building,
      total: "1 sala"
    },
    {
      titulo: "Biblioteca",
      descricao: "Acervo especializado em tecnologia e literatura",
      detalhes: [
        "Livros técnicos atualizados",
        "Revistas especializadas",
        "Ambiente de estudo",
        "Computadores para pesquisa"
      ],
      icon: BookOpen,
      total: "100+ títulos"
    }
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
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
              Formação Técnica Integrada
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Sobre o Curso
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Conheça em detalhes o curso Técnico em Desenvolvimento de Sistemas da Etec João Belarmino. 
              Uma formação completa que integra ensino médio e capacitação profissional de qualidade.
            </p>
            <div className="flex justify-center">
              <HeroButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Nossa Missão</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  O curso Técnico em Desenvolvimento de Sistemas da Etec João Belarmino tem como missão 
                  formar profissionais capacitados para atuar no mercado de tecnologia da informação, 
                  desenvolvendo competências técnicas e comportamentais necessárias para o sucesso profissional.
                </p>
                <p>
                  Nossa formação integrada ao Ensino Médio proporciona uma base sólida tanto nos conhecimentos 
                  propedêuticos quanto nas competências técnicas específicas, preparando o aluno para os 
                  desafios do mercado de trabalho ou para a continuidade dos estudos em nível superior.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-muted rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground font-medium">Anos de Curso</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">80</div>
                  <div className="text-sm text-muted-foreground font-medium">Vagas por Ano</div>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="/computer-classroom-students.png"
                alt="Sala de aula de informática"
                width={500}
                height={400}
                className="rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
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
              Duas turmas por ano com horários matutino e vespertino para atender diferentes necessidades
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

      {/* Matriz Curricular */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Matriz Curricular
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Disciplinas técnicas distribuídas ao longo dos 3 anos de formação
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {matrizCurricular.map((ano, index) => (
                <AccordionItem key={index} value={`ano-${index}`} className="bg-background rounded-lg border shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline cursor-pointer">
                    <span className="text-left font-semibold text-lg flex items-center">
                      <BookOpen className="w-5 h-5 mr-3 text-primary" />
                      {ano.ano} - {ano.disciplinas.length} disciplinas técnicas
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {ano.disciplinas.map((disciplina, discIndex) => {
                        const IconComponent = disciplina.icon
                        return (
                          <Card key={discIndex} className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/50 group">
                            <CardHeader className="pb-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                                  <IconComponent className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <CardTitle className="text-sm group-hover:text-primary transition-colors duration-200">
                                    {disciplina.nome}
                                  </CardTitle>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <CardDescription className="text-xs">
                                {disciplina.descricao}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Infraestrutura
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Laboratórios modernos e equipamentos atualizados para uma formação de qualidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infraestrutura.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="transition-all duration-200 group-hover:scale-105">
                        {item.total}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                      {item.titulo}
                    </CardTitle>
                    <CardDescription>
                      {item.descricao}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.detalhes.map((detalhe, detIndex) => (
                        <li key={detIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {detalhe}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Corpo Docente */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Corpo Docente
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professores especialistas com experiência no mercado de trabalho
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {professores.map((professor, index) => (
               <Card key={index} className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group relative">
                 {professor.orientadorTCC && (
                   <div className="absolute top-3 right-3">
                     <Badge variant="default" className="text-xs bg-purple-400 transition-all duration-300 hover:bg-purple-500">
                       Orientador TCC
                     </Badge>
                   </div>
                 )}
                 <CardHeader>
                   <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                     <Users className="w-10 h-10 text-primary transition-all duration-300 group-hover:scale-110" />
                   </div>
                   <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                     {professor.nome}
                   </CardTitle>
                   <CardDescription className="text-sm">
                     {professor.especialidade}
                   </CardDescription>
                 </CardHeader>
                 <CardContent>
                   <div className="flex flex-wrap gap-2 justify-center">
                     <Badge variant="secondary" className="text-xs">
                       {professor.experiencia} de experiência
                     </Badge>
                     <Badge variant="outline" className="text-xs">
                       {professor.area}
                     </Badge>
                   </div>
                 </CardContent>
               </Card>
             ))}
          </div>
        </div>
      </section>

      {/* Perfil do Egresso */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perfil do Egresso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O que você será capaz de fazer após a conclusão do curso
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                  Desenvolvimento de Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Criar aplicações desktop, web e mobile utilizando diferentes linguagens e frameworks modernos
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                  Banco de Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Projetar, implementar e administrar sistemas de banco de dados relacionais e não relacionais
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                  Análise de Sistemas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Analisar requisitos e especificar soluções tecnológicas para problemas reais
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <TestTube className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                  Testes de Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Planejar e executar testes para garantir a qualidade e confiabilidade do software
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                  Segurança da Informação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Implementar medidas de segurança e proteger sistemas contra vulnerabilidades
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                  Sistemas Embarcados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Desenvolver software para sistemas embarcados e dispositivos IoT
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
