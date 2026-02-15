import { Button } from '@/src/components/ui/button'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'

interface HeroButtonsProps {
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
  variant?: 'default' | 'compact'
  className?: string
}

function BaseHeroButtons({
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  variant,
  className,
}: Required<HeroButtonsProps>) {
  const isCompact = variant === 'compact'

  return (
    <div className={cn('flex flex-col sm:flex-row gap-3 sm:gap-4', className)}>
      <Button
        size={isCompact ? 'default' : 'lg'}
        asChild
        className={cn(
          'group relative min-w-[210px] overflow-hidden rounded-2xl border-0',
          'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-900',
          'font-semibold tracking-tight shadow-[0_10px_30px_-12px_rgba(245,158,11,0.75)]',
          'transition-all duration-300 hover:-translate-y-0.5 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600',
          'hover:shadow-[0_16px_40px_-14px_rgba(245,158,11,0.9)]',
          'focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2'
        )}
      >
        <Link href={primaryHref} className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
            <span>{primaryText}</span>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>
      </Button>

      <Button
        size={isCompact ? 'default' : 'lg'}
        variant="outline"
        asChild
        className={cn(
          'group relative min-w-[210px] overflow-hidden rounded-2xl border',
          'border-foreground/15 bg-background/70 text-foreground backdrop-blur-sm',
          'font-semibold tracking-tight shadow-sm transition-all duration-300 hover:-translate-y-0.5',
          'hover:border-primary/35 hover:bg-primary/5 hover:shadow-lg',
          'focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2'
        )}
      >
        <Link href={secondaryHref} className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-2">
            <span>{secondaryText}</span>
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>
      </Button>
    </div>
  )
}

export function HeroButtons({
  primaryText = 'Fale Conosco',
  primaryHref = '/contato',
  secondaryText = 'Conheca o Curso',
  secondaryHref = '/sobre',
  variant = 'default',
  className = '',
}: HeroButtonsProps) {
  return (
    <BaseHeroButtons
      primaryText={primaryText}
      primaryHref={primaryHref}
      secondaryText={secondaryText}
      secondaryHref={secondaryHref}
      variant={variant}
      className={className}
    />
  )
}

export function ContactButtons({
  primaryText = 'Conheca o Curso',
  primaryHref = '/sobre',
  secondaryText = 'Falar Conosco',
  secondaryHref = '/contato',
  variant = 'default',
  className = '',
}: HeroButtonsProps) {
  return (
    <BaseHeroButtons
      primaryText={primaryText}
      primaryHref={primaryHref}
      secondaryText={secondaryText}
      secondaryHref={secondaryHref}
      variant={variant}
      className={className}
    />
  )
}
