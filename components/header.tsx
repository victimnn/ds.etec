"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { navigationItems, siteConfig } from '@/constants/navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTheme } from 'next-themes'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isScrolledUp, setIsScrolledUp] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme } = useTheme()
  
  // Evita hidratação incorreta
  useEffect(() => {
    setMounted(true)
  }, [])

  // Controla a visibilidade do header baseado no scroll (apenas em mobile)
  useEffect(() => {
    const handleScroll = () => {
      // Só aplica o comportamento em telas menores que lg (1024px)
      if (window.innerWidth >= 1024) {
        setIsScrolledUp(true)
        return
      }

      const currentScrollY = window.scrollY
      
      // Se estiver no topo da página, sempre mostrar o header
      if (currentScrollY < 10) {
        setIsScrolledUp(true)
      } else {
        // Se estiver rolando para baixo e passou de 100px, esconder
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsScrolledUp(false)
        } 
        // Se estiver rolando para cima, mostrar
        else if (currentScrollY < lastScrollY) {
          setIsScrolledUp(true)
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    const handleResize = () => {
      // Reset quando mudar para desktop
      if (window.innerWidth >= 1024) {
        setIsScrolledUp(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [lastScrollY])
  
  // Define a logo baseada no tema, com fallback para evitar hidratação
  const logoSrc = mounted && theme === 'dark' ? '/LOGODSBRANCO.png' : '/LOGODS.png'

  return (
    <header className={`bg-background shadow-sm sticky top-0 z-50 border-b transition-transform duration-300 ease-in-out ${
      isScrolledUp ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={logoSrc || '/LOGODS.png'}
              alt={siteConfig.institution}
              width={40}
              height={40}
              className="rounded transition-all duration-300"
            />
            <div>
              <div className="text-sm sm:text-lg font-bold text-foreground">{siteConfig.name}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{siteConfig.institution}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary font-medium transition-all duration-200 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-lg">
              <Link href="/vestibulinho">Inscreva-se</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu de Navegação - {siteConfig.name}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="px-6 pt-6 pb-4 border-b">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={logoSrc || '/LOGODS.png'}
                      alt={siteConfig.institution}
                      width={36}
                      height={36}
                      className="rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold truncate">{siteConfig.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{siteConfig.institution}</div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-6 py-6">
                  <div className="flex flex-col space-y-1">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
                
                {/* Footer */}
                <div className="px-6 py-6 border-t space-y-4 bg-muted/30">
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-sm font-medium text-muted-foreground">Alternar Tema</span>
                    <ThemeToggle />
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                    <Link href="/vestibulinho" onClick={() => setIsMenuOpen(false)}>
                      Inscreva-se Agora
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
