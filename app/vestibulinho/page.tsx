"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, Users, FileText, AlertCircle, CheckCircle, ExternalLink, Download, ArrowRight, GraduationCap, BookOpen, Target, Award } from 'lucide-react'
import { HeroButtons, ContactButtons } from "@/components/ui/hero-buttons"

export default function VestibulinhoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())

  // Atualizar a data atual a cada minuto
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 60000) // Atualizar a cada minuto

    return () => clearInterval(interval)
  }, [])

  // Função para converter data brasileira para objeto Date
  const parseData = (dataStr: string) => {
    const meses = {
      'Janeiro': 0, 'Fevereiro': 1, 'Março': 2, 'Abril': 3, 'Maio': 4, 'Junho': 5,
      'Julho': 6, 'Agosto': 7, 'Setembro': 8, 'Outubro': 9, 'Novembro': 10, 'Dezembro': 11
    }
    
    // Extrair dia e mês da string
    const match = dataStr.match(/(\d+)\s+de\s+(\w+)/)
    if (match) {
      const dia = parseInt(match[1])
      const mes = meses[match[2] as keyof typeof meses]
      // Se for janeiro ou fevereiro, usar 2026, senão 2025
      const ano = mes <= 1 ? 2026 : 2025
      return new Date(ano, mes, dia)
    }
    
    // Para datas com intervalo (ex: "19 a 20 de Janeiro")
    const matchIntervalo = dataStr.match(/(\d+)\s+a\s+(\d+)\s+de\s+(\w+)/)
    if (matchIntervalo) {
      const diaInicio = parseInt(matchIntervalo[1])
      const diaFim = parseInt(matchIntervalo[2])
      const mes = meses[matchIntervalo[3] as keyof typeof meses]
      // Se for janeiro ou fevereiro, usar 2026, senão 2025
      const ano = mes <= 1 ? 2026 : 2025
      return new Date(ano, mes, diaFim) // Usar o último dia do intervalo
    }
    
    return null
  }

  // Função para determinar o status baseado na data atual
  const getStatus = (dataStr: string) => {
    const dataEvento = parseData(dataStr)
    if (!dataEvento) return "pendente"
    
    const diffTime = dataEvento.getTime() - currentDate.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays < 0) {
      return "concluido"
    } else if (diffDays <= 7) {
      return "proximo"
    } else {
      return "pendente"
    }
  }

  const cronograma = [
    { evento: "Abertura das Inscrições", data: "10 de Setembro", status: getStatus("10 de Setembro") },
    { evento: "Encerramento das Inscrições", data: "3 de Novembro", status: getStatus("3 de Novembro") },
    { evento: "Divulgação dos Locais de Prova", data: "25 de Novembro", status: getStatus("25 de Novembro") },
    { evento: "Aplicação da Prova", data: "30 de Novembro", status: getStatus("30 de Novembro") },
    { evento: "Divulgação do Gabarito", data: "3 de Dezembro", status: getStatus("3 de Dezembro") },
    { evento: "Resultado Final", data: "15 de Janeiro", status: getStatus("15 de Janeiro") },
    { evento: "Convocação para matrícula", data: "16 de Janeiro", status: getStatus("16 de Janeiro") },
    { evento: "Matrícula dos Aprovados da Primeira Chamada", data: "19 a 20 de Janeiro", status: getStatus("19 a 20 de Janeiro") },
    { evento: "Convocação para matrícula da Segunda Chamada", data: "23 de Janeiro", status: getStatus("23 de Janeiro") },
    { evento: "Matrícula dos Aprovados da Segunda Chamada", data: "26 a 27 de Fevereiro", status: getStatus("26 a 27 de Fevereiro") },
  ]

  const faqs = [
    {
      pergunta: "Quais são os pré-requisitos para se inscrever?",
      resposta: "Para se inscrever no curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio, é necessário ter concluído o Ensino Fundamental (9º ano) ou estar cursando o 9º ano em 2025."
    },
    {
      pergunta: "Como é a prova do vestibulinho?",
      resposta: "A prova é composta por 50 questões de múltipla escolha, abrangendo conhecimentos de Língua Portuguesa, Matemática, História, Geografia, Ciências Físicas e Biológicas, com base no currículo do Ensino Fundamental."
    },
    {
      pergunta: "Quantas vagas são oferecidas?",
      resposta: "São oferecidas 80 vagas para o curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio, sendo 40 para a turma matutina e 40 para a turma vespertina, com início das aulas em fevereiro de 2025."
    },
    {
      pergunta: "O curso é gratuito?",
      resposta: "Sim, o curso é totalmente gratuito. A Etec é uma instituição pública estadual vinculada ao Centro Paula Souza, não cobrando mensalidades ou taxas de matrícula."
    },
    {
      pergunta: "Qual é a duração do curso?",
      resposta: "O curso tem duração de 3 anos, sendo oferecido na modalidade integrada ao Ensino Médio, em período matutino e vespertino."
    },
    {
      pergunta: "Posso fazer o curso trabalhando?",
      resposta: "O curso é oferecido em período matutino e vespertino, das 7h10 às 14h e as 13h10 às 19h20, o que pode dificultar a conciliação com trabalho. Recomendamos avaliar sua disponibilidade antes da inscrição."
    },
    {
      pergunta: "Como funciona a matrícula após aprovação?",
      resposta: "Após a convocação, os aprovados devem comparecer à escola no período determinado para efetuar a matrícula, apresentando todos os documentos necessários listados no edital."
    },
    {
      pergunta: "Há material didático incluso?",
      resposta: "Sim! Todo material didático é fornecido gratuitamente pela escola, incluindo apostilas, acesso a plataformas online e licenças de software necessárias para o curso."
    }
  ]

  const handleInscricao = () => {
    setIsSubmitting(true)
    // Simular redirecionamento
    setTimeout(() => {
      window.open('https://vestibulinho.etec.sp.gov.br/home/', '_blank')
      setIsSubmitting(false)
    }, 1000)
  }

  const handleDownloadEdital = () => {
    // Abrir página de documentos do vestibulinho
    window.open('https://vestibulinho.etec.sp.gov.br/documentos/default.asp', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
              Processo Seletivo 2026
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Vestibulinho 2026
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Inscreva-se no curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio. 
              Uma oportunidade única de formação profissional gratuita e de qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleInscricao}
                disabled={isSubmitting}
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 dark:from-yellow-500 dark:to-yellow-600 dark:hover:from-yellow-400 dark:hover:to-yellow-500 text-gray-900 dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2" />
                    Redirecionando...
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                      <span>Fazer Inscrição</span>
                    </div>
                    {/* Efeito de brilho */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </>
                )}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDownloadEdital}
                className="group relative overflow-hidden border-2 border-white/40 dark:border-slate-200/40 text-black dark:text-black hover:bg-white dark:hover:bg-slate-100 hover:text-gray-900 dark:hover:text-slate-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center">
                  <FileText className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  <span>Ver Documentos</span>
                </div>
                          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-slate-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Gerais */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Informações do Curso
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça os detalhes do curso e do processo seletivo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">80 Vagas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Disponíveis para 2026</p>
              </CardContent>
            </Card>
            
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">3 Anos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Duração do curso</p>
              </CardContent>
            </Card>
            
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">7h10 às 14h e as 13h10 às 19h20</p>
              </CardContent>
            </Card>
            
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">Gratuito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sem mensalidades</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cronograma */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Cronograma do Processo Seletivo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acompanhe todas as etapas importantes do vestibulinho
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {cronograma.map((item, index) => (
              <div key={index} className="flex items-center mb-6 p-6 bg-background rounded-lg border shadow-sm transition-all duration-200 hover:shadow-lg hover:border-primary/50 group">
                <div className="flex-shrink-0 mr-6">
                  {item.status === 'concluido' ? (
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  ) : item.status === 'proximo' ? (
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                      <AlertCircle className="w-6 h-6 text-orange-600" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                      <Clock className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">{item.evento}</h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-muted-foreground font-medium">{item.data}</span>
                      <Badge 
                        variant={
                          item.status === 'concluido' ? 'default' : 
                          item.status === 'proximo' ? 'destructive' : 'secondary'
                        }
                        className="transition-all duration-200 group-hover:scale-105"
                      >
                        {item.status === 'concluido' ? 'Concluído' : 
                         item.status === 'proximo' ? 'Próximo' : 'Pendente'}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como se Inscrever */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Como se Inscrever
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Siga estes passos simples para participar do processo seletivo
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <span className="text-primary font-bold text-2xl">1</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">Acesse o Site</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Acesse o site oficial do vestibulinho do Centro Paula Souza e clique em "Fazer Inscrição"
                  </p>
                  <Button 
                    onClick={handleInscricao}
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ir para o Site
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <span className="text-primary font-bold text-2xl">2</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">Preencha os Dados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Complete o formulário com suas informações pessoais e escolha o curso Técnico em Desenvolvimento de Sistemas
                  </p>
                  <Badge variant="outline" className="text-sm">Documentos Necessários</Badge>
                </CardContent>
              </Card>
              
              <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <span className="text-primary font-bold text-2xl">3</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">Confirme a Inscrição</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Imprima o comprovante de inscrição e aguarde as informações sobre local e horário da prova
                  </p>
                  <Badge variant="secondary" className="text-sm">Inscrição Gratuita</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos Necessários */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Documentos Necessários
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Para efetuar a matrícula após aprovação no processo seletivo
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Documentos Pessoais
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">RG (original e cópia)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">CPF (original e cópia)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Certidão de Nascimento (cópia)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Histórico Escolar do Ensino Fundamental</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Documentos Complementares
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Comprovante de Residência</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">2 Fotos 3x4 recentes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Cartão de Vacinação (cópia)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Declaração de Quitação Eleitoral (se maior de 18 anos)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais do Curso */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Por que Escolher Nosso Curso?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça os diferenciais que fazem do nosso curso uma excelente escolha
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">Formação Completa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensino médio integrado com capacitação técnica profissional
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">Material Gratuito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Todo material didático e software incluídos sem custo
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">Mercado Atual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tecnologias e metodologias alinhadas com o mercado
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80" />
                <CardTitle className="group-hover:text-primary transition-colors duration-200">Reconhecimento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Diploma reconhecido pelo MEC e valorizado pelo mercado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tire suas dúvidas sobre o processo seletivo e o curso
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-left font-semibold">{faq.pergunta}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.resposta}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
