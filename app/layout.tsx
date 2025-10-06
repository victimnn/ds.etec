import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { FaviconSwitcher } from '@/components/favicon-switcher'
import { LayoutWrapper } from '@/components/layout-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desenvolvimento de Sistemas - Etec João Belarmino',
  description: 'Curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio na Etec João Belarmino de Amparo',
  keywords: 'curso técnico, desenvolvimento de sistemas, etec, amparo, programação, ensino médio, ds, ds.etec, dsetec, etecjoaobelarmino, etec jb, etec jb ofcial, etec joão belarmino',
  icons: {
    icon: [
      { url: '/LOGODS.png', media: '(prefers-color-scheme: light)' },
      { url: '/LOGODSBRANCO.png', media: '(prefers-color-scheme: dark)' }
    ],
    shortcut: '/LOGODS.png',
    apple: '/LOGODS.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <FaviconSwitcher />
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
