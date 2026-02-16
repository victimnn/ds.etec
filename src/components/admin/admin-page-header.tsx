import Link from 'next/link'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/src/components/ui/button'

type AdminPageHeaderProps = {
  title: string
  description: string
  icon: LucideIcon
  backHref?: string
  backLabel?: string
  actions?: ReactNode
}

export function AdminPageHeader({
  title,
  description,
  icon: Icon,
  backHref,
  backLabel = 'Voltar',
  actions,
}: AdminPageHeaderProps) {
  return (
    <div className="space-y-3">
      {backHref ? (
        <Button asChild variant="ghost" className="w-fit px-2">
          <Link href={backHref} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </Button>
      ) : null}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-primary/10 p-3">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
        {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
      </div>
    </div>
  )
}
