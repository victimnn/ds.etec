import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FaviconSwitcher } from '@/src/components/main/favicon-switcher'
import { LayoutWrapper } from '@/src/components/main/layout-wrapper'
import { TenantShell } from '@/src/components/shared/tenant-shell'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desenvolvimento de Sistemas - Etec João Belarmino',
  description: 'Curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio na Etec João Belarmino de Amparo',
  keywords: 'curso técnico, desenvolvimento de sistemas, etec, amparo, programação, ensino médio, ds, ds.etec, dsetec, etecjoaobelarmino, etec jb, etec jb ofcial, etec joão belarmino',
  icons: {
    icon: '/logo-ds.png',
    shortcut: '/logo-ds.png',
    apple: '/logo-ds.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TenantShell
      className={inter.className}
      defaultTheme="light"
      showSpeedInsights
      preContent={<FaviconSwitcher />}
    >
      <LayoutWrapper>{children}</LayoutWrapper>
    </TenantShell>
  )
}
