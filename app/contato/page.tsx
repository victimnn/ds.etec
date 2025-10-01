"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react'
import { HeroButtons } from "@/components/ui/hero-buttons"

export default function ContatoPage() {

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

      {/* Informações de Contato */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Informações de Contato
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Entre em contato conosco através dos canais abaixo
            </p>
          </div>

          {/* Grid de Informações - 2 Colunas */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Coluna 1: Telefones */}
            <div className="space-y-8">
              {/* Telefones */}
              <Card className="transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 group border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl group-hover:text-primary transition-colors duration-200 font-semibold">
                    <Phone className="w-6 h-6 mr-3 text-primary transition-all duration-300 group-hover:scale-110" />
                    Telefones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl transition-all duration-200 hover:bg-primary/5 border border-border/50">
                    <div>
                      <p className="font-semibold text-base text-foreground">Secretaria</p>
                      <p className="text-muted-foreground text-sm">Atendimento geral</p>
                    </div>
                    <a 
                      href="tel:+551938081016" 
                      className="text-primary hover:text-primary/80 font-semibold text-base transition-colors duration-200 hover:underline"
                      aria-label="Ligar para Secretaria"
                    >
                      (19) 3808-1016
                    </a>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl transition-all duration-200 hover:bg-primary/5 border border-border/50">
                    <div>
                      <p className="font-semibold text-base text-foreground">Coordenação</p>
                      <p className="text-muted-foreground text-sm">Informações gerais</p>
                    </div>
                    <a 
                      href="tel:+551938072288" 
                      className="text-primary hover:text-primary/80 font-semibold text-base transition-colors duration-200 hover:underline"
                      aria-label="Ligar para Coordenação"
                    >
                      (19) 3807-2288
                    </a>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl transition-all duration-200 hover:bg-primary/5 border border-border/50">
                    <div>
                      <p className="font-semibold text-base text-foreground">Suporte</p>
                      <p className="text-muted-foreground text-sm">Assistência técnica</p>
                    </div>
                    <a 
                      href="tel:+551938078982" 
                      className="text-primary hover:text-primary/80 font-semibold text-base transition-colors duration-200 hover:underline"
                      aria-label="Ligar para Suporte"
                    >
                      (19) 3807-8982
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Coluna 2: Horários */}
            <div className="space-y-8">
              {/* Horário de Atendimento */}
              <Card className="transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 group border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl group-hover:text-primary transition-colors duration-200 font-semibold">
                    <Clock className="w-6 h-6 mr-3 text-primary transition-all duration-300 group-hover:scale-110" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl transition-all duration-200 hover:bg-primary/5 border border-border/50">
                    <div>
                      <p className="font-semibold text-base text-foreground">Segunda a Sexta</p>
                      <p className="text-muted-foreground text-sm">Atendimento completo</p>
                    </div>
                    <span className="text-primary font-bold text-lg">7h às 23h</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl transition-all duration-200 hover:bg-primary/5 border border-border/50">
                    <div>
                      <p className="font-semibold text-base text-foreground">Sábado</p>
                      <p className="text-muted-foreground text-sm">Atendimento parcial</p>
                    </div>
                    <span className="text-primary font-bold text-lg">7h às 12h</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-xl transition-all duration-200 hover:bg-primary/5 border border-border/50">
                    <div>
                      <p className="font-semibold text-base text-foreground">Domingo</p>
                      <p className="text-muted-foreground text-sm">Não há atendimento</p>
                    </div>
                    <span className="text-muted-foreground font-semibold text-lg">Fechado</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* E-mails - Largura Total */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              E-mails de Contato
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Entre em contato através dos nossos e-mails oficiais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 group border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl group-hover:text-primary transition-colors duration-200 font-semibold">
                  <Mail className="w-6 h-6 mr-3 text-primary transition-all duration-300 group-hover:scale-110" />
                  Acadêmico
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-base mb-4 leading-relaxed">
                  Para questões relacionadas ao curso e atividades acadêmicas
                </p>
                <a 
                  href="mailto:e067acad@cps.sp.gov.br" 
                  className="text-primary hover:text-primary/80 text-base transition-colors duration-200 break-all font-semibold hover:underline"
                  aria-label="Enviar e-mail para Acadêmico"
                >
                  e067acad@cps.sp.gov.br
                </a>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 group border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl group-hover:text-primary transition-colors duration-200 font-semibold">
                  <Mail className="w-6 h-6 mr-3 text-primary transition-all duration-300 group-hover:scale-110" />
                  Administrativo
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-base mb-4 leading-relaxed">
                  Para questões administrativas e burocráticas
                </p>
                <a 
                  href="mailto:e067adm@cps.sp.gov.br" 
                  className="text-primary hover:text-primary/80 text-base transition-colors duration-200 break-all font-semibold hover:underline"
                  aria-label="Enviar e-mail para Administrativo"
                >
                  e067adm@cps.sp.gov.br
                </a>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 group border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl group-hover:text-primary transition-colors duration-200 font-semibold">
                  <Mail className="w-6 h-6 mr-3 text-primary transition-all duration-300 group-hover:scale-110" />
                  APM
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-base mb-4 leading-relaxed">
                  Para questões relacionadas à Associação de Pais e Mestres
                </p>
                <a 
                  href="mailto:apmjb@yahoo.com.br" 
                  className="text-primary hover:text-primary/80 text-base transition-colors duration-200 break-all font-semibold hover:underline"
                  aria-label="Enviar e-mail para APM"
                >
                  apmjb@yahoo.com.br
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Localização - Largura Total */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Nossa Localização
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Venha nos visitar e conhecer nossa infraestrutura
            </p>
          </div>

          <Card className="transition-all duration-300 hover:shadow-2xl border-0 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center justify-center text-2xl font-semibold">
                <MapPin className="w-7 h-7 mr-3 text-primary" />
                Etec João Belarmino
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground leading-relaxed text-xl">
                  <strong className="text-foreground font-semibold">Rua Sete de Setembro, 299</strong><br />
                  Centro - Amparo, SP<br />
                  CEP: 13900-372
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl h-[400px] flex items-center justify-center transition-all duration-300 hover:bg-primary/5 border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14722.41243506315!2d-46.76570223809814!3d-22.705814173334975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c92147d6b7f687%3A0x47221efa058bc901!2sEscola%20T%C3%A9cnica%20Estadual%20Jo%C3%A3o%20Belarmino!5e0!3m2!1spt-BR!2sus!4v1756689672853!5m2!1spt-BR!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Localização da Etec João Belarmino"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Instagram - Largura Total */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Redes Sociais
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
              Acompanhe o dia a dia do curso
            </p>
          </div>

          <Card className="transition-all duration-300 hover:shadow-2xl border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-center text-xl font-semibold">
                <Instagram className="w-6 h-6 mr-3 text-primary" />
                Instagram
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 hover:shadow-lg text-lg px-8 py-3 font-semibold">
                <a href="https://instagram.com/ds.etec" target="_blank" rel="noopener noreferrer" aria-label="Seguir @ds.etec no Instagram">
                  <Instagram className="w-5 h-5 mr-2" />
                  Seguir @ds.etec
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Fique por dentro das novidades, projetos e eventos do curso
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ em Seção Separada */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
                Dúvidas Frequentes
              </h2>
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
                Antes de entrar em contato, veja se sua dúvida já foi respondida
              </p>
            </div>
              
            <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem value="item-1" className="bg-background rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-300 border-border/50">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline text-lg cursor-pointer">
                    <span className="text-left font-bold text-xl">Qual é o horário das aulas?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      As aulas acontecem em dois períodos, das 7h10 às 12h30 e das 13h10 às 19h30, de segunda a sexta-feira. 
                      O curso é integrado ao ensino médio, proporcionando uma formação completa.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-background rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-300 border-border/50">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline text-lg cursor-pointer">
                    <span className="text-left font-bold text-xl">O material didático é fornecido pela escola?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Sim! Todo material didático é fornecido gratuitamente pela escola, incluindo apostilas, 
                      acesso a plataformas online e licenças de software necessárias para o curso.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-background rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-300 border-border/50">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline text-lg cursor-pointer">
                    <span className="text-left font-bold text-xl">Como funcionam os estágios?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      A escola possui parcerias com empresas locais e da região para facilitar a colocação 
                      dos alunos em estágios remunerados.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-background rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-300 border-border/50">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline text-lg cursor-pointer">
                    <span className="text-left font-bold text-xl">Quais linguagens de programação são ensinadas?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      O curso abrange linguagens modernas como PHP, Kotlin, JavaScript, SQL, C# e outras tecnologias 
                      relevantes para o mercado atual, incluindo frameworks e ferramentas de desenvolvimento.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-background rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-300 border-border/50">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline text-lg cursor-pointer">
                    <span className="text-left font-bold text-xl">Há laboratórios de informática disponíveis?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Sim! A escola possui laboratórios modernos equipados com computadores de última geração, 
                      projetores e toda infraestrutura necessária para o desenvolvimento de projetos práticos.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-background rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-300 border-border/50">
                  <AccordionTrigger className="px-8 py-6 hover:no-underline text-lg cursor-pointer">
                    <span className="text-left font-bold text-xl">O diploma é reconhecido pelo MEC?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
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
