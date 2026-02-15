import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DS Etec',
  description: 'Portal de Desenvolvimento de Sistemas - Etec João Belarmino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}

