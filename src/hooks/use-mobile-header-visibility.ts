'use client'

import { useEffect, useRef, useState } from 'react'

export function useMobileHeaderVisibility(
  desktopBreakpoint = 1024,
  hideAfterScrollY = 100,
) {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= desktopBreakpoint) {
        setIsVisible(true)
        return
      }

      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (
        currentScrollY > lastScrollYRef.current &&
        currentScrollY > hideAfterScrollY
      ) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollYRef.current) {
        setIsVisible(true)
      }

      lastScrollYRef.current = currentScrollY
    }

    const handleResize = () => {
      if (window.innerWidth >= desktopBreakpoint) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [desktopBreakpoint, hideAfterScrollY])

  return isVisible
}

