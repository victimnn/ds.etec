import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ThemeProvider } from '@/src/components/main/theme-provider'

type TenantShellProps = {
  children: React.ReactNode
  className?: string
  preContent?: React.ReactNode
  defaultTheme: 'light' | 'dark' | 'system'
  useSuspense?: boolean
  showSpeedInsights?: boolean
}

export function TenantShell({
  children,
  className,
  preContent,
  defaultTheme,
  useSuspense = false,
  showSpeedInsights = false,
}: TenantShellProps) {
  return (
    <div className={className}>
      <ThemeProvider
        attribute="class"
        defaultTheme={defaultTheme}
        enableSystem
        disableTransitionOnChange
      >
        {preContent}
        {useSuspense ? (
          <Suspense fallback={null}>{children}</Suspense>
        ) : (
          children
        )}
        <Analytics />
      </ThemeProvider>
      {showSpeedInsights ? <SpeedInsights /> : null}
    </div>
  )
}
