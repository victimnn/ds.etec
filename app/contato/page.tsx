"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Clock, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { HeroButtons } from "@/components/ui/hero-buttons"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
              Fale Conosco
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Tire suas dúvidas sobre o curso, processo seletivo ou qualquer outra informação. 
              Nossa equipe está pronta para ajudar você a dar o próximo passo na sua carreira.
            </p>
            <div className="flex justify-center">
              <HeroButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Grid Principal - 3 Colunas */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Coluna 1: Formulário */}
            <div className="lg:col-span-2">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Envie sua Mensagem
                </h2>
                <p className="text-muted-foreground text-lg">
                  Preencha o formulário abaixo e responderemos o mais breve possível
                </p>
              </div>

              <Card className="transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-sm font-medium">
                          Nome Completo *
                        </Label>
                        <Input
                          id="nome"
                          value={formData.nome}
                          onChange={(e) => handleInputChange('nome', e.target.value)}
                          placeholder="Seu nome completo"
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="seu@email.com"
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-sm font-medium">
                          Telefone
                        </Label>
                        <Input
                          id="telefone"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange('telefone', e.target.value)}
                          placeholder="(19) 99999-9999"
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="assunto" className="text-sm font-medium">
                          Assunto *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('assunto', value)} required>
                          <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vestibulinho">Vestibulinho</SelectItem>
                            <SelectItem value="curso">Informações sobre o Curso</SelectItem>
                            <SelectItem value="matricula">Matrícula</SelectItem>
                            <SelectItem value="infraestrutura">Infraestrutura</SelectItem>
                            <SelectItem value="estagio">Estágios</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="text-sm font-medium">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange('mensagem', e.target.value)}
                        placeholder="Digite sua mensagem aqui..."
                        rows={6}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-800">Erro ao enviar mensagem. Tente novamente.</p>
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Coluna 2: Informações de Contato */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Informações de Contato
                </h2>
                <p className="text-muted-foreground text-lg">
                  Entre em contato conosco através dos canais abaixo
                </p>
              </div>

              <div className="space-y-4">
                {/* Telefones */}
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg group-hover:text-primary transition-colors duration-200">
                      <Phone className="w-5 h-5 mr-2 text-primary transition-all duration-300 group-hover:scale-110" />
                      Telefones
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg transition-all duration-200 hover:bg-primary/10">
                      <div>
                        <p className="font-medium text-sm">Secretaria</p>
                        <p className="text-muted-foreground text-xs">Atendimento geral</p>
                      </div>
                      <a 
                        href="tel:+551938081016" 
                        className="text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200"
                      >
                        (19) 3808-1016
                      </a>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg transition-all duration-200 hover:bg-primary/10">
                      <div>
                        <p className="font-medium text-sm">Coordenação</p>
                        <p className="text-muted-foreground text-xs">Informações gerais</p>
                      </div>
                      <a 
                        href="tel:+551938072288" 
                        className="text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200"
                      >
                        (19) 3807-2288
                      </a>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg transition-all duration-200 hover:bg-primary/10">
                      <div>
                        <p className="font-medium text-sm">Suporte</p>
                        <p className="text-muted-foreground text-xs">Assistência técnica</p>
                      </div>
                      <a 
                        href="tel:+551938078982" 
                        className="text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200"
                      >
                        (19) 3807-8982
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* E-mails */}
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg group-hover:text-primary transition-colors duration-200">
                      <Mail className="w-5 h-5 mr-2 text-primary transition-all duration-300 group-hover:scale-110" />
                      E-mails
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg transition-all duration-200 hover:bg-primary/10">
                      <p className="font-medium text-sm mb-1">Acadêmico</p>
                      <a 
                        href="mailto:e067acad@cps.sp.gov.br" 
                        className="text-primary hover:text-primary/80 text-xs transition-colors duration-200 break-all"
                      >
                        e067acad@cps.sp.gov.br
                      </a>
                    </div>
                    <div className="p-3 bg-muted rounded-lg transition-all duration-200 hover:bg-primary/10">
                      <p className="font-medium text-sm mb-1">Administrativo</p>
                      <a 
                        href="mailto:e067adm@cps.sp.gov.br" 
                        className="text-primary hover:text-primary/80 text-xs transition-colors duration-200 break-all"
                      >
                        e067adm@cps.sp.gov.br
                      </a>
                    </div>
                    <div className="p-3 bg-muted rounded-lg transition-all duration-200 hover:bg-primary/10">
                      <p className="font-medium text-sm mb-1">APM</p>
                      <a 
                        href="mailto:apmjb@yahoo.com.br" 
                        className="text-primary hover:text-primary/80 text-xs transition-colors duration-200 break-all"
                      >
                        apmjb@yahoo.com.br
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Horário de Atendimento */}
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg group-hover:text-primary transition-colors duration-200">
                      <Clock className="w-5 h-5 mr-2 text-primary transition-all duration-300 group-hover:scale-110" />
                      Horário de Atendimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                        <span className="font-medium text-sm">Segunda a Sexta</span>
                        <span className="text-primary font-semibold text-sm">7h às 23h</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                        <span className="font-medium text-sm">Sábado</span>
                        <span className="text-primary font-semibold text-sm">7h às 12h</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                        <span className="font-medium text-sm">Domingo</span>
                        <span className="text-muted-foreground text-sm">Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Redes Sociais */}
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg group-hover:text-primary transition-colors duration-200">
                      <Instagram className="w-5 h-5 mr-2 text-primary transition-all duration-300 group-hover:scale-110" />
                      Redes Sociais
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                      <a href="https://instagram.com/ds.etec" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4 mr-2" />
                        Seguir @ds.etec
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Acompanhe o dia a dia do curso
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização e FAQ em Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Localização */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Nossa Localização
                </h2>
                <p className="text-muted-foreground text-lg">
                  Venha nos visitar e conhecer nossa infraestrutura
                </p>
              </div>

              <Card className="transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-primary" />
                    Etec João Belarmino
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Rua Sete de Setembro, 299</strong><br />
                    Centro - Amparo, SP<br />
                    CEP: 13900-372
                  </p>
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center transition-all duration-300 hover:bg-primary/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14722.41243506315!2d-46.76570223809814!3d-22.705814173334975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c92147d6b7f687%3A0x47221efa058bc901!2sEscola%20T%C3%A9cnica%20Estadual%20Jo%C3%A3o%20Belarmino!5e0!3m2!1spt-BR!2sus!4v1756689672853!5m2!1spt-BR!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dúvidas Frequentes */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Dúvidas Frequentes
                </h2>
                <p className="text-muted-foreground text-lg">
                  Antes de entrar em contato, veja se sua dúvida já foi respondida
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="item-1" className="bg-background rounded-lg border shadow-sm">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline text-sm">
                    <span className="text-left font-semibold">Qual é o horário das aulas?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      As aulas acontecem em dois períodos, das 7h10 às 12h30 e das 13h10 às 19h30, de segunda a sexta-feira. 
                      O curso é integrado ao ensino médio, proporcionando uma formação completa.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-background rounded-lg border shadow-sm">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline text-sm">
                    <span className="text-left font-semibold">O material didático é fornecido pela escola?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Sim! Todo material didático é fornecido gratuitamente pela escola, incluindo apostilas, 
                      acesso a plataformas online e licenças de software necessárias para o curso.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-background rounded-lg border shadow-sm">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline text-sm">
                    <span className="text-left font-semibold">Como funcionam os estágios?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A escola possui parcerias com empresas locais e da região para facilitar a colocação 
                      dos alunos em estágios remunerados.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-background rounded-lg border shadow-sm">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline text-sm">
                    <span className="text-left font-semibold">Quais linguagens de programação são ensinadas?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      O curso abrange linguagens modernas como PHP, Kotlin, JavaScript, SQL, C# e outras tecnologias 
                      relevantes para o mercado atual, incluindo frameworks e ferramentas de desenvolvimento.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-background rounded-lg border shadow-sm">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline text-sm">
                    <span className="text-left font-semibold">Há laboratórios de informática disponíveis?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Sim! A escola possui laboratórios modernos equipados com computadores de última geração, 
                      projetores e toda infraestrutura necessária para o desenvolvimento de projetos práticos.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-background rounded-lg border shadow-sm">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline text-sm">
                    <span className="text-left font-semibold">O diploma é reconhecido pelo MEC?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Absolutamente! O diploma técnico é reconhecido pelo MEC e pelo mercado de trabalho, 
                      permitindo que o aluno atue profissionalmente na área de desenvolvimento de sistemas.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
