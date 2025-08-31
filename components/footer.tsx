"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, Phone, MapPin, ExternalLink, Clock, Users, Award, ArrowRight, Facebook, Youtube, Linkedin } from 'lucide-react'
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
      valor: "Segunda a Sexta: 7h às 22h",
      icon: Clock 
    },
    { 
      titulo: "Vagas por Ano", 
      valor: "80 alunos (40 por período)",
      icon: Users 
    },
    { 
      titulo: "Taxa de Empregabilidade", 
      valor: "95% dos egressos empregados",
      icon: Award 
    }
  ]

  const redesSociais = [
    { 
      nome: "Instagram", 
      href: "https://instagram.com/ds.etec", 
      icon: Instagram,
      cor: "from-purple-500 to-pink-500",
      hover: "from-purple-600 to-pink-600"
    },
    { 
      nome: "Facebook", 
      href: "https://facebook.com/etecjoaobelarmino", 
      icon: Facebook,
      cor: "from-blue-500 to-blue-600",
      hover: "from-blue-600 to-blue-700"
    },
    { 
      nome: "YouTube", 
      href: "https://youtube.com/@etecjoaobelarmino", 
      icon: Youtube,
      cor: "from-red-500 to-red-600",
      hover: "from-red-600 to-red-700"
    },
    { 
      nome: "LinkedIn", 
      href: "https://linkedin.com/company/etec-joao-belarmino", 
      icon: Linkedin,
      cor: "from-blue-600 to-blue-700",
      hover: "from-blue-700 to-blue-800"
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
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Contato</h3>
            
            {/* Informações de Contato */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group hover:bg-primary-foreground/5 p-2 rounded-lg transition-all duration-200">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:bg-primary-foreground/20">
                  <Phone className="w-4 h-4 text-primary-foreground/80" />
                </div>
                <div>
                  <div className="font-medium text-sm group-hover:text-primary-foreground transition-colors duration-200">
                    Telefone
                  </div>
                  <a 
                    href="tel:+551938079600" 
                    className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    (19) 3807-9600
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group hover:bg-primary-foreground/5 p-2 rounded-lg transition-all duration-200">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:bg-primary-foreground/20">
                  <Mail className="w-4 h-4 text-primary-foreground/80" />
                </div>
                <div>
                  <div className="font-medium text-sm group-hover:text-primary-foreground transition-colors duration-200">
                    E-mail
                  </div>
                  <a 
                    href="mailto:secretaria@etecjoaobelarmino.com.br" 
                    className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
                  >
                    secretaria@etecjoaobelarmino.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group hover:bg-primary-foreground/5 p-2 rounded-lg transition-all duration-200">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-110 group-hover:bg-primary-foreground/20">
                  <MapPin className="w-4 h-4 text-primary-foreground/80" />
                </div>
                <div>
                  <div className="font-medium text-sm group-hover:text-primary-foreground transition-colors duration-200">
                    Endereço
                  </div>
                  <div className="text-xs text-primary-foreground/60">
                    Rua Luiz Gonzaga Travassos, 1-59<br />
                    Amparo - SP, 13900-000
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Redes Sociais</h4>
              <div className="flex flex-wrap gap-2">
                {redesSociais.map((rede, index) => (
                  <Link 
                    key={index}
                    href={rede.href} 
                    target="_blank"
                    className={`bg-gradient-to-r ${rede.cor} hover:${rede.hover} p-2 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg group`}
                    title={rede.nome}
                  >
                    <rede.icon className="w-4 h-4 text-white" />
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

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 bg-primary-foreground/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="text-sm text-primary-foreground/70">
              <p>&copy; 2024 Etec João Belarmino de Amparo - Centro Paula Souza. Todos os direitos reservados.</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/70">
              <Link href="/sobre" className="hover:text-primary-foreground transition-colors duration-200">
                Política de Privacidade
              </Link>
              <span>•</span>
              <Link href="/contato" className="hover:text-primary-foreground transition-colors duration-200">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
