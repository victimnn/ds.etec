import Link from 'next/link'
import { ArrowRight, Instagram, Mail, Phone, Youtube } from 'lucide-react'
import { Badge } from '@/src/components/ui/badge'
import { DeveloperLinks } from '@/src/components/shared/developer-links'
import { SocialLinks } from '@/src/components/shared/social-links'
import { institutionContact } from '@/src/constants/institution'
import { MAIN_SITE_URL } from '@/src/lib/site-urls'

export function Footer() {
  const linksRapidos = [
    { nome: 'Inicio', href: '/', descricao: 'Pagina inicial do hub' },
    { nome: 'Projetos', href: '/projetos', descricao: 'Explore os TCCs' },
  ]

  const contatos = [
    {
      titulo: 'Telefone',
      valor: institutionContact.phoneContacts[0]?.display || '(19) 3808-1016',
      href: institutionContact.phoneContacts[0]?.href || 'tel:+551938081016',
      icon: Phone,
    },
    {
      titulo: 'E-mail',
      valor:
        institutionContact.emailContacts[0]?.address || 'e067acad@cps.sp.gov.br',
      href: `mailto:${
        institutionContact.emailContacts[0]?.address || 'e067acad@cps.sp.gov.br'
      }`,
      icon: Mail,
    },
  ]

  const redesSociais = [
    {
      nome: 'Instagram do Curso',
      href: institutionContact.socialLinks.instagramCourse,
      icon: Instagram,
      className:
        'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    },
    {
      nome: 'YouTube da Etec',
      href: institutionContact.socialLinks.youtubeSchool,
      icon: Youtube,
      className:
        'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
    },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <img
                  src="/logo-ds.png"
                  alt="Hub de TCC"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg">Hub de TCC</div>
                <div className="text-sm text-primary-foreground/80">
                  {institutionContact.name}
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Portal dos trabalhos de conclusao do curso de Desenvolvimento de
              Sistemas.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                Mostra de TCC
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {institutionContact.unit}
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-lg flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Navegacao
            </h3>
            <ul className="space-y-3">
              {linksRapidos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-all duration-200"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all duration-200">
                      -
                    </span>
                    <div>
                      <div className="font-medium">{link.nome}</div>
                      <div className="text-xs text-primary-foreground/60">
                        {link.descricao}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={MAIN_SITE_URL}
                  className="group flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-all duration-200"
                >
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">
                    -
                  </span>
                  <div>
                    <div className="font-medium">Voltar ao Main</div>
                    <div className="text-xs text-primary-foreground/60">
                      Site institucional completo
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-lg">Contato e Redes</h3>
            <div className="space-y-4">
              {contatos.map((contato) => {
                const IconComponent = contato.icon
                return (
                  <a
                    key={contato.titulo}
                    href={contato.href}
                    className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm">{contato.valor}</span>
                  </a>
                )
              })}
            </div>
            <SocialLinks items={redesSociais} />
          </div>
        </div>
      </div>

      <div className="border-t bg-primary-foreground/5 border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-sm text-primary-foreground">Desenvolvido por</div>
            <div className="[&_a]:text-primary-foreground/70 [&_a:hover]:text-primary-foreground">
              <DeveloperLinks className="flex items-center gap-4 flex-wrap" includePortfolio />
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
