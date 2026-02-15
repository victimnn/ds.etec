import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfólio - Victor Ramos',
  description: 'Portfólio profissional, Victor Ramos',
}

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
