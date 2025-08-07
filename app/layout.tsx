import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desenvolvimento de Sistemas - Etec João Belarmino',
  description: 'Curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio na Etec João Belarmino de Amparo',
  keywords: 'curso técnico, desenvolvimento de sistemas, etec, amparo, programação, ensino médio',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
