"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, Phone, MapPin, ExternalLink, Clock, Users, Award, ArrowRight, Facebook, Youtube, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ContactButtons } from '@/components/ui/hero-buttons'
import { useTheme } from 'next-themes'

export function Footer() {
  const { theme } = useTheme()
  
  // Define a logo baseada no tema
  const logoSrc = theme === 'dark' ? '/etec-logo-white.png' : '/etec-logo-white.png'
  
  const linksRapidos = [
    { nome: "Sobre o Curso", href: "/sobre", descricao: "Conheça nossa estrutura" },
    { nome: "Projetos", href: "/projetos", descricao: "Veja os trabalhos dos alunos" },
    { nome: "Vestibulinho", href: "/vestibulinho", descricao: "Faça sua inscrição" },
    { nome: "Mercado de Trabalho", href: "/mercado", descricao: "Oportunidades de carreira" },
    { nome: "Contato", href: "/contato", descricao: "Entre em contato conosco" }
  ]

  const informacoes = [
    { 
      titulo: "Horário de Funcionamento", 
      valor: "Segunda a Sexta: 7h às 23h",
      icon: Clock 
    },
    { 
      titulo: "Vagas por Ano", 
      valor: "80 alunos (40 por período)",
      icon: Users 
    },
  ]

  const contatos = [
    {
      titulo: "Telefone",
      icon: Phone,
      links: [
        { texto: "(19) 3808-1016", href: "tel:+551938081016" },
        { texto: "(19) 3807-2288", href: "tel:+551938072288" },
        { texto: "(19) 3807-8982", href: "tel:+551938078982" }
      ]
    },
    {
      titulo: "E-mail",
      icon: Mail,
      links: [
        { texto: "e067acad@cps.sp.gov.br", href: "mailto:e067acad@cps.sp.gov.br" },
        { texto: "e067adm@cps.sp.gov.br", href: "mailto:e067adm@cps.sp.gov.br" },
        { texto: "apmjb@yahoo.com.br", href: "mailto:apmjb@yahoo.com.br" }
      ]
    },
    {
      titulo: "Endereço",
      icon: MapPin,
      endereco: "Rua Sete de Setembro, 299 - Centro\nAmparo - SP, 13900-372",
      mapsUrl: "https://maps.google.com/?q=Rua+Sete+de+Setembro,+299+-+Centro,+Amparo+-+SP,+13900-372"
    }
  ]

  const redesSociais = [
    { 
      nome: "Instagram do Curso", 
      href: "https://instagram.com/ds.etec", 
      icon: Instagram,
      className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    },
    { 
      nome: "YouTube da Etec", 
      href: "https://www.youtube.com/c/ETECJo%C3%A3oBelarminoOFICIAL", 
      icon: Youtube,
      className: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
    },
    { 
      nome: "Instagram da Etec", 
      href: "https://instagram.com/etecjboficial", 
      icon: Instagram,
      className: "bg-gradient-to-r from-pink-500 to-purple-700 hover:from-pink-700 hover:to-purple-800"
    }
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Seção Principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-4">
              <Image
                src={logoSrc}
                alt="Etec João Belarmino"
                width={120}
                height={60}
                className="rounded-lg shadow-lg transition-all duration-300 object-contain"
              />
              <div>
                <div className="font-bold text-lg">Desenvolvimento de Sistemas</div>
                <div className="text-sm text-primary-foreground/80">Etec João Belarmino</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Formando os profissionais de tecnologia do futuro com ensino de qualidade, 
              infraestrutura moderna e metodologia inovadora.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                MEC Reconhecido
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Centro Paula Souza
              </Badge>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {linksRapidos.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all duration-200">→</span>
                    <div>
                      <div className="font-medium group-hover:text-primary-foreground transition-colors duration-200">
                        {link.nome}
                      </div>
                      <div className="text-xs text-primary-foreground/60">
                        {link.descricao}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Informações</h3>
            <div className="space-y-4">
              {informacoes.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="flex items-start space-x-3 group hover:bg-primary-foreground/5 p-2 rounded-lg transition-all duration-200">
                    <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:bg-primary-foreground/20">
                      <IconComponent className="w-4 h-4 text-primary-foreground/80" />
                    </div>
                    <div>
                      <div className="font-medium text-sm group-hover:text-primary-foreground transition-colors duration-200">
                        {info.titulo}
                      </div>
                      <div className="text-xs text-primary-foreground/60">
                        {info.valor}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contato e Redes Sociais */}
          <div className="space-y-8">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg">Contato</h3>
              <div className="space-y-4">
                {contatos.map((contato, index) => {
                  const IconComponent = contato.icon
                  return (
                    <div key={index} className="flex items-start space-x-3 group hover:bg-primary-foreground/5 p-2 rounded-lg transition-all duration-200">
                      <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-110 group-hover:bg-primary-foreground/20">
                        <IconComponent className="w-4 h-4 text-primary-foreground/80" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm group-hover:text-primary-foreground transition-colors duration-200">
                          {contato.titulo}
                        </div>
                        {contato.links ? (
                          <div className="space-y-1">
                            {contato.links.map((link, linkIndex) => (
                              <a 
                                key={linkIndex}
                                href={link.href} 
                                className="block text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                              >
                                {link.texto}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="text-xs text-primary-foreground/60 whitespace-pre-line">
                              {contato.endereco}
                            </div>
                            {contato.mapsUrl && (
                              <a 
                                href={contato.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:underline"
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Ver no Google Maps
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Redes Sociais</h4>
              <div className="flex flex-wrap gap-3">
                {redesSociais.map((rede, index) => (
                  <Link 
                    key={index}
                    href={rede.href} 
                    target="_blank"
                    className={`${rede.className} p-3 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg group`}
                    title={rede.nome}
                  >
                    <rede.icon className="w-5 h-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Call-to-Action */}
      <div className="bg-primary-foreground/5 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">Pronto para começar sua jornada?</h3>
              <p className="text-primary-foreground/80 text-sm">
                Inscreva-se no vestibulinho e faça parte da próxima turma
              </p>
            </div>
            <ContactButtons variant="compact" />
          </div>
        </div>
      </div>


      {/* Desenvolvedor */}
      <div className="border-t bg-primary-foreground/5 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-sm text-primary-foreground">
              Desenvolvido por: <span className="font-bold">Victor Gabriel Prado Ramos</span>
            </div>
            <Link 
              href="https://github.com/victimnn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link 
              href="https://linkedin.com/in/victor-ramos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 bg-primary-foreground/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="text-sm text-primary-foreground/70">
              <p>&copy; 2025 Etec João Belarmino de Amparo - Centro Paula Souza. Todos os direitos reservados.</p>
            </div>
            {/* <div className="flex items-center space-x-4 text-sm text-primary-foreground/70">
              <Link href="/sobre" className="hover:text-primary-foreground transition-colors duration-200">
                Política de Privacidade
              </Link>
              <span>•</span>
              <Link href="/contato" className="hover:text-primary-foreground transition-colors duration-200">
                Termos de Uso
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
