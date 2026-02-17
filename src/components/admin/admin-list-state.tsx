'use client'

import type { ReactNode } from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from '@/src/components/ui/button'

type AdminListStateProps = {
  title: string
  description: string
  loading?: boolean
  icon?: ReactNode
  actionLabel?: string
  onAction?: () => void
}

export function AdminListState({
  title,
  description,
  loading = false,
  icon,
  actionLabel,
  onAction,
}: AdminListStateProps) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    )
  }

  return (
    <div className="text-center py-20 space-y-3">
      {icon ? (
        <div className="bg-accent/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      {actionLabel && onAction ? (
        <Button asChild variant="outline" onClick={onAction}>
          <span className="cursor-pointer">{actionLabel}</span>
        </Button>
      ) : null}
    </div>
  )
}
