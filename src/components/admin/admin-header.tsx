'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/src/components/ui/button'
import { ThemeToggle } from '@/src/components/main/theme-toggle'
import { LayoutDashboard, Users, FolderPlus, UserPlus, LogOut } from 'lucide-react'
import { cn } from '@/src/lib/utils'

export function AdminHeader() {
  const router = useRouter()
  const pathname = usePathname()

  async function logout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    router.replace('/login')
    router.refresh()
  }

  const navItems = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/cadastros', label: 'Cadastros Base', icon: Users },
    { href: '/novo-aluno', label: 'Novo Aluno', icon: UserPlus },
    { href: '/novo-tcc', label: 'Novo TCC', icon: FolderPlus },
  ]

  return (
    <header className="glass sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl tracking-tight text-primary">
            Admin<span className="text-foreground">DS</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={logout}
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 gap-2"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Sair</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
