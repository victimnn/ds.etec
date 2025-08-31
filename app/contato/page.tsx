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
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Tire suas dúvidas sobre o curso, processo seletivo ou qualquer outra informação. 
              Nossa equipe está pronta para ajudar você a dar o próximo passo na sua carreira.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Envie sua Mensagem
                </h2>
                <p className="text-muted-foreground text-lg">
                  Preencha o formulário abaixo e responderemos o mais breve possível
                </p>
              </div>

              <Card className="transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
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
                    
                    <div className="grid md:grid-cols-2 gap-4">
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
                        rows={5}
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

            {/* Informações de Contato */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Informações de Contato
                </h2>
                <p className="text-muted-foreground text-lg">
                  Entre em contato conosco através dos canais abaixo
                </p>
              </div>

              <div className="space-y-6">
                {/* Localização */}
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors duration-200">
                      <MapPin className="w-6 h-6 mr-3 text-primary transition-all duration-300 group-hover:scale-110" />
                      Localização
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong>Etec João Belarmino</strong><br />
                      Rua Luiz Gonzaga Travassos, 1-59<br />
                      Centro - Amparo, SP<br />
                      CEP: 13900-000
                    </p>
                    <div className="bg-muted rounded-lg h-48 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1234567890123!2d-46.7654321!3d-22.7012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzA0LjQiUyA0NsKwNDUnNTUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
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

                {/* Telefones */}
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors duration-200">
                      <Phone className="w-6 h-6 mr-3 text-primary transition-all duration-300 group-hover:scale-110" />
                      Telefones
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg transition-all duration-200 hover:bg-primary/10">
                      <div>
                        <p className="font-medium">Secretaria</p>
                        <p className="text-muted-foreground text-sm">Atendimento geral</p>
                      </div>
                      <a 
                        href="tel:+551938079600" 
                        className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                      >
                        (19) 3807-9600
                      </a>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg transition-all duration-200 hover:bg-primary/10">
                      <div>
                        <p className="font-medium">Coordenação DS</p>
                        <p className="text-muted-foreground text-sm">Informações do curso</p>
                      </div>
                      <a 
                        href="tel:+551938079601" 
                        className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                      >
                        (19) 3807-9601
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* E-mails */}
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors duration-200">
                      <Mail className="w-6 h-6 mr-3 text-primary transition-all duration-300 group-hover:scale-110" />
                      E-mails
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg transition-all duration-200 hover:bg-primary/10">
                      <div>
                        <p className="font-medium">Secretaria</p>
                        <p className="text-muted-foreground text-sm">Atendimento geral</p>
                      </div>
                      <a 
                        href="mailto:secretaria@etecjoaobelarmino.com.br" 
                        className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                      >
                        secretaria@etecjoaobelarmino.com.br
                      </a>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg transition-all duration-200 hover:bg-primary/10">
                      <div>
                        <p className="font-medium">Coordenação DS</p>
                        <p className="text-muted-foreground text-sm">Informações do curso</p>
                      </div>
                      <a 
                        href="mailto:ds@etecjoaobelarmino.com.br" 
                        className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                      >
                        ds@etecjoaobelarmino.com.br
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Horário de Atendimento */}
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors duration-200">
                      <Clock className="w-6 h-6 mr-3 text-primary transition-all duration-300 group-hover:scale-110" />
                      Horário de Atendimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Segunda a Sexta</span>
                        <span className="text-primary font-semibold">7h às 22h</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Sábado</span>
                        <span className="text-primary font-semibold">7h às 12h</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Domingo</span>
                        <span className="text-muted-foreground">Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Redes Sociais */}
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 group">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors duration-200">
                      <Instagram className="w-6 h-6 mr-3 text-primary transition-all duration-300 group-hover:scale-110" />
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
                    <p className="text-sm text-muted-foreground mt-3 text-center">
                      Acompanhe o dia a dia do curso no Instagram
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Dúvidas Frequentes */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Antes de entrar em contato, veja se sua dúvida já foi respondida
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold">Qual é o horário das aulas?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    As aulas acontecem em período integral, das 7h às 17h, de segunda a sexta-feira. 
                    O curso é integrado ao ensino médio, proporcionando uma formação completa.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold">O material didático é fornecido pela escola?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Sim! Todo material didático é fornecido gratuitamente pela escola, incluindo apostilas, 
                    acesso a plataformas online e licenças de software necessárias para o curso.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold">Como funcionam os estágios?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A escola possui parcerias com empresas locais e da região para facilitar a colocação 
                    dos alunos em estágios remunerados. O estágio é obrigatório e faz parte da grade curricular.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold">Quais linguagens de programação são ensinadas?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    O curso abrange linguagens modernas como Python, JavaScript, Java, C# e outras tecnologias 
                    relevantes para o mercado atual, incluindo frameworks e ferramentas de desenvolvimento.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold">Há laboratórios de informática disponíveis?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Sim! A escola possui laboratórios modernos equipados com computadores de última geração, 
                    projetores e toda infraestrutura necessária para o desenvolvimento de projetos práticos.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold">O diploma é reconhecido pelo MEC?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Absolutamente! O diploma técnico é reconhecido pelo MEC e pelo mercado de trabalho, 
                    permitindo que o aluno atue profissionalmente na área de desenvolvimento de sistemas.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
