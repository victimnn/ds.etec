'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/src/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return <Button variant="ghost" size="icon" className="h-9 w-9" />

  const toggleTheme = () => {
    // Se o navegador suportar a View Transitions API, podemos usá-la para um efeito ainda mais fluido
    if (
      typeof document !== 'undefined' &&
      (document as any).startViewTransition
    ) {
      ;(document as any).startViewTransition(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      })
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full hover:bg-primary/10 transition-colors group overflow-hidden"
      aria-label="Alternar Tema"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2, ease: 'easeInOut' as const }}
            className="flex items-center justify-center"
          >
            <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2, ease: 'easeInOut' as const }}
            className="flex items-center justify-center"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background radial glow on hover */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Button>
  )
}
