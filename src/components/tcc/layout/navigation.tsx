'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  ArrowLeft,
  BookOpen,
  Home,
  Menu,
  Globe,
  ShieldCheck,
  Info,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/src/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet'
import { ThemeToggle } from '@/src/components/main/theme-toggle'
import { MAIN_SITE_URL } from '@/src/lib/site-urls'
import { cn } from '@/src/lib/utils'

const navigationItems = [
  { href: '/', label: 'Início', icon: Home },
  { href: '/projetos', label: 'Projetos', icon: BookOpen },
  { href: '/sobre', label: 'Sobre', icon: Info },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const logoClass =
    mounted && theme === 'dark' ? 'brightness-0 invert' : 'logo-primary'

  return (
    <header
      id="main-navigation"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b shadow-lg py-2'
          : 'bg-background/40 backdrop-blur-md border-b border-border/10 py-3 md:py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-500',
            isScrolled ? 'h-14' : 'h-14 md:h-16'
          )}
        >
          {/* Brand/Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <img
                src="/logo-ds.png"
                alt="TCC DS Logo"
                className={cn(
                  'relative h-9 md:h-11 w-auto object-contain transition-transform duration-500 group-hover:scale-110',
                  logoClass
                )}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-bold tracking-tight text-foreground leading-none">
                Hub<span className="text-primary">TCC&apos;s</span>
              </span>
              <span
                className={cn(
                  'text-[10px] font-medium uppercase tracking-widest text-muted-foreground transition-all duration-500',
                  isScrolled ? 'opacity-0 h-0' : 'opacity-100 h-auto mt-1'
                )}
              >
                ETEC João Belarmino
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-muted/20 p-1.5 rounded-full border border-border/40 backdrop-blur-md"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navigationItems.map(item => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredPath(item.href)}
                  className={cn(
                    'relative px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300',
                    active
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {/* Active/Hover Background (The Sliding Pill) */}
                  <AnimatePresence>
                    {(active || hoveredPath === item.href) && (
                      <motion.div
                        layoutId="nav-pill"
                        className={cn(
                          'absolute inset-0 rounded-full -z-10',
                          active
                            ? 'bg-background shadow-sm'
                            : 'bg-background/40'
                        )}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  <span className="relative z-10">{item.label}</span>

                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center">
              <ThemeToggle />
            </div>

            <Button
              asChild
              variant={isScrolled ? 'default' : 'secondary'}
              size="sm"
              className={cn(
                'rounded-full px-5 font-bold transition-all duration-300 shadow-glow',
                !isScrolled &&
                  'bg-background/50 backdrop-blur-md border border-white/10 hover:bg-background'
              )}
            >
              <a href={MAIN_SITE_URL} className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">Portal Institucional</span>
              </a>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[380px] p-0 bg-background/95 backdrop-blur-2xl border-l-border/20"
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>Navegação Principal</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-full">
                  <div className="p-8 border-b border-border/10 bg-muted/20">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="text-xl font-black tracking-tighter">
                          Hub<span className="text-primary">TCC</span>
                        </div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          Inovação e Tecnologia
                        </div>
                      </div>
                    </div>
                  </div>

                  <nav className="flex-1 px-6 py-10">
                    <div className="space-y-3">
                      {navigationItems.map(item => {
                        const Icon = item.icon
                        const active = isActive(item.href)
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              'flex items-center gap-4 px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300',
                              active
                                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]'
                                : 'text-foreground hover:bg-primary/5 hover:translate-x-2'
                            )}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <Icon className="h-6 w-6" />
                            {item.label}
                          </Link>
                        )
                      })}
                    </div>
                  </nav>

                  <div className="p-8 border-t border-border/10 bg-muted/20 space-y-6">
                    <div className="flex items-center justify-between bg-background/50 p-4 rounded-2xl border border-border/10">
                      <span className="font-bold text-sm">
                        Modo de Visualização
                      </span>
                      <ThemeToggle />
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full h-14 rounded-2xl font-bold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-500 group"
                    >
                      <a
                        href={MAIN_SITE_URL}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        Sair do Hub
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
