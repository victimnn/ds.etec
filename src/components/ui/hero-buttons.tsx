import { Button } from '@/src/components/ui/button'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface HeroButtonsProps {
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
  variant?: 'default' | 'compact'
  className?: string
}

export function HeroButtons({
  primaryText = 'Fazer Inscrição',
  primaryHref = '/vestibulinho',
  secondaryText = 'Conheça o Curso',
  secondaryHref = '/sobre',
  variant = 'default',
  className = '',
}: HeroButtonsProps) {
  const isCompact = variant === 'compact'

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {/* Botão Primário */}
      <Button
        size={isCompact ? 'default' : 'lg'}
        asChild
        className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 dark:from-yellow-500 dark:to-yellow-600 dark:hover:from-yellow-400 dark:hover:to-yellow-500 text-gray-900 dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
      >
        <Link href={primaryHref}>
          <div className="flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
            <span>{primaryText}</span>
          </div>
          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>
      </Button>

      {/* Botão Secundário */}
      <Button
        size={isCompact ? 'default' : 'lg'}
        variant="outline"
        asChild
        className="group relative overflow-hidden border-2 border-white/30 dark:border-slate-300/30 text-gray-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
      >
        <Link href={secondaryHref}>
          <div className="flex items-center justify-center">
            <span>{secondaryText}</span>
            <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-slate-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>
      </Button>
    </div>
  )
}

// Componente específico para botões de contato
export function ContactButtons({
  primaryText = 'Fazer Inscrição',
  primaryHref = '/vestibulinho',
  secondaryText = 'Falar Conosco',
  secondaryHref = '/contato',
  variant = 'default',
  className = '',
}: HeroButtonsProps) {
  const isCompact = variant === 'compact'

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {/* Botão Primário */}
      <Button
        size={isCompact ? 'default' : 'lg'}
        asChild
        className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 dark:from-yellow-500 dark:to-yellow-600 dark:hover:from-yellow-400 dark:hover:to-yellow-500 text-gray-900 dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
      >
        <Link href={primaryHref}>
          <div className="flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
            <span>{primaryText}</span>
          </div>
          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>
      </Button>

      {/* Botão Secundário */}
      <Button
        size={isCompact ? 'default' : 'lg'}
        variant="outline"
        asChild
        className="group relative overflow-hidden border-2 border-white/30 dark:border-slate-300/30 text-gray-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
      >
        <Link href={secondaryHref}>
          <div className="flex items-center justify-center">
            <span>{secondaryText}</span>
            <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-slate-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>
      </Button>
    </div>
  )
}
