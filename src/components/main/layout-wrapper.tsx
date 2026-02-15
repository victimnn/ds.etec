"use client"

import { usePathname } from 'next/navigation'
import { Header } from '@/src/components/main/header'
import { Footer } from '@/src/components/main/footer'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isPersonalPage = pathname?.startsWith('/personal')

  if (isPersonalPage) {
    return <main>{children}</main>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

