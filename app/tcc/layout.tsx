import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { TenantShell } from '@/src/components/shared/tenant-shell'
import { TCC_SITE_URL } from '@/src/lib/site-urls'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Hub de TCC's",
    template: "%s | Hub de TCC's",
  },
  description:
    'Portal virtual dos Trabalhos de Conclusao de Curso da ETEC Joao Belarmino. Explore projetos inovadores desenvolvidos pelos estudantes do curso Tecnico em Desenvolvimento de Sistemas.',
  keywords: [
    'TCC',
    'ETEC',
    'Joao Belarmino',
    'Desenvolvimento de Sistemas',
    'Projetos',
    'Tecnologia',
    'Educacao',
  ],
  authors: [{ name: 'ETEC Joao Belarmino' }],
  creator: 'ETEC Joao Belarmino',
  publisher: 'Centro Paula Souza',
  icons: {
    icon: '/logo-ds.png',
    shortcut: '/logo-ds.png',
    apple: '/logo-ds.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(TCC_SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: TCC_SITE_URL,
    title: 'Hub de TCCs - ETEC Joao Belarmino',
    description:
      'Portal virtual dos Trabalhos de Conclusao de Curso da ETEC Joao Belarmino. Explore projetos inovadores desenvolvidos pelos estudantes.',
    siteName: 'Hub de TCCs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hub de TCCs - ETEC Joao Belarmino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hub de TCCs - ETEC Joao Belarmino',
    description:
      'Portal virtual dos Trabalhos de Conclusao de Curso da ETEC Joao Belarmino.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <TenantShell
      className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
      defaultTheme="system"
      useSuspense
      preContent={
        <>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
          >
            Pular para o conteudo principal
          </a>
          <a
            href="#main-navigation"
            className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
          >
            Pular para a navegacao
          </a>
        </>
      }
    >
      {children}
    </TenantShell>
  )
}
