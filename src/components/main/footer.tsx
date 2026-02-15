"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, ExternalLink, Instagram, Mail, MapPin, Phone, Users, Youtube } from 'lucide-react'
import { Badge } from '@/src/components/ui/badge'
import { ContactButtons } from '@/src/components/ui/hero-buttons'
import { institutionContact } from '@/src/constants/institution'
import { DeveloperLinks } from '@/src/components/shared/developer-links'
import { SocialLinks } from '@/src/components/shared/social-links'

export function Footer() {
  type ContactWithLinks = {
    kind: 'links'
    titulo: string
    icon: typeof Phone | typeof Mail
    links: Array<{ texto: string; href: string }>
  }

  type ContactWithAddress = {
    kind: 'address'
    titulo: string
    icon: typeof MapPin
    endereco: string
    mapsUrl: string
  }

  type ContactItem = ContactWithLinks | ContactWithAddress

  const linksRapidos = [
    { nome: 'Sobre o Curso', href: '/sobre', descricao: 'Conheca nossa estrutura' },
    { nome: 'Projetos', href: '/projetos', descricao: 'Veja os trabalhos dos alunos' },
    { nome: 'Vestibulinho', href: '/vestibulinho', descricao: 'Faca sua inscricao' },
    { nome: 'Mercado de Trabalho', href: '/mercado', descricao: 'Oportunidades de carreira' },
    { nome: 'Contato', href: '/contato', descricao: 'Entre em contato conosco' },
  ]

  const informacoes = [
    { titulo: 'Horario de Funcionamento', valor: institutionContact.serviceHoursText, icon: Clock },
    { titulo: 'Vagas por Ano', valor: '80 alunos (40 por periodo)', icon: Users },
  ]

  const contatos: ContactItem[] = [
    {
      kind: 'links',
      titulo: 'Telefone',
      icon: Phone,
      links: institutionContact.phoneContacts.map((phone) => ({
        texto: phone.display,
        href: phone.href,
      })),
    },
    {
      kind: 'links',
      titulo: 'E-mail',
      icon: Mail,
      links: institutionContact.emailContacts.map((email) => ({
        texto: email.address,
        href: `mailto:${email.address}`,
      })),
    },
    {
      kind: 'address',
      titulo: 'Endereco',
      icon: MapPin,
      endereco: `${institutionContact.address.street} - ${institutionContact.address.district}\n${institutionContact.address.cityState}, ${institutionContact.address.zip}`,
      mapsUrl: institutionContact.address.mapsQueryUrl,
    },
  ]

  const redesSociais = [
    {
      nome: 'Instagram do Curso',
      href: institutionContact.socialLinks.instagramCourse,
      icon: Instagram,
      className: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    },
    {
      nome: 'YouTube da Etec',
      href: institutionContact.socialLinks.youtubeSchool,
      icon: Youtube,
      className: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
    },
    {
      nome: 'Instagram da Etec',
      href: institutionContact.socialLinks.instagramSchool,
      icon: Instagram,
      className: 'bg-gradient-to-r from-pink-500 to-purple-700 hover:from-pink-700 hover:to-purple-800',
    },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/etec-logo.png"
                alt={institutionContact.name}
                width={120}
                height={60}
                className="rounded-lg shadow-lg transition-all duration-300 object-contain brightness-0 invert"
              />
              <div>
                <div className="font-bold text-lg">Desenvolvimento de Sistemas</div>
                <div className="text-sm text-primary-foreground/80">{institutionContact.name}</div>
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
                {institutionContact.unit}
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-lg flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Links Rapidos
            </h3>
            <ul className="space-y-3">
              {linksRapidos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all duration-200">-</span>
                    <div>
                      <div className="font-medium group-hover:text-primary-foreground transition-colors duration-200">
                        {link.nome}
                      </div>
                      <div className="text-xs text-primary-foreground/60">{link.descricao}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-lg">Informacoes</h3>
            <div className="space-y-4">
              {informacoes.map((info) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={info.titulo}
                    className="flex items-start space-x-3 group hover:bg-primary-foreground/5 p-2 rounded-lg transition-all duration-200"
                  >
                    <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:bg-primary-foreground/20">
                      <IconComponent className="w-4 h-4 text-primary-foreground/80" />
                    </div>
                    <div>
                      <div className="font-medium text-sm group-hover:text-primary-foreground transition-colors duration-200">
                        {info.titulo}
                      </div>
                      <div className="text-xs text-primary-foreground/60">{info.valor}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-bold text-lg">Contato</h3>
              <div className="space-y-4">
                {contatos.map((contato) => {
                  const IconComponent = contato.icon
                  return (
                    <div
                      key={contato.titulo}
                      className="flex items-start space-x-3 group hover:bg-primary-foreground/5 p-2 rounded-lg transition-all duration-200"
                    >
                      <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-110 group-hover:bg-primary-foreground/20">
                        <IconComponent className="w-4 h-4 text-primary-foreground/80" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm group-hover:text-primary-foreground transition-colors duration-200">
                          {contato.titulo}
                        </div>
                        {contato.kind === 'links' ? (
                          <div className="space-y-1">
                            {contato.links.map((link) => (
                              <a
                                key={link.href}
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
                            <a
                              href={contato.mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 hover:underline"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Ver no Google Maps
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm">Redes Sociais</h4>
              <SocialLinks items={redesSociais} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-foreground/5 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">Pronto para comecar sua jornada?</h3>
              <p className="text-primary-foreground/80 text-sm">
                Inscreva-se no vestibulinho e faca parte da proxima turma
              </p>
            </div>
            <ContactButtons variant="compact" />
          </div>
        </div>
      </div>

      <div className="border-t bg-primary-foreground/5 border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-sm text-primary-foreground">Desenvolvido por</div>
            <div className="[&_a]:text-primary-foreground/70 [&_a:hover]:text-primary-foreground">
              <DeveloperLinks className="flex items-center gap-4 flex-wrap" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 bg-primary-foreground/5">
        <div className="container mx-auto px-4 py-6">
          <div className="text-sm text-primary-foreground/70 text-center md:text-left">
            <p>
              &copy; 2025 {institutionContact.name} - {institutionContact.unit}. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
