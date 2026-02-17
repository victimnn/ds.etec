'use client'

import type React from 'react'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { TenantShell } from '@/src/components/shared/tenant-shell'
import { AdminSidebar } from '@/src/components/admin/admin-sidebar'
import {
  SidebarProvider,
  SidebarInset,
} from '@/src/components/ui/sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/src/components/ui/breadcrumb'
import { ThemeToggle } from '@/src/components/main/theme-toggle'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login' || pathname.startsWith('/login/')

  // Se for a página de login, renderiza sem a sidebar/header
  if (isLoginPage) {
    return (
      <TenantShell className={inter.className} defaultTheme="light">
        <main className="min-h-screen">{children}</main>
      </TenantShell>
    )
  }

  return (
    <TenantShell className={inter.className} defaultTheme="light">
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <header className="flex h-20 shrink-0 items-center gap-2 border-b px-6 glass sticky top-0 z-30">
            <div className="flex items-center gap-4 flex-1">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/" className="font-medium hover:text-primary transition-colors">
                      Admin
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-bold text-foreground">
                      {pathname === '/'
                        ? 'Dashboard'
                        : pathname.includes('/alunos')
                          ? 'Alunos'
                          : pathname.includes('/projetos')
                            ? 'Projetos TCC'
                            : pathname.includes('/cadastros')
                              ? 'Cadastros Base'
                              : 'Painel'}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 md:p-8">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TenantShell>
  )
}
