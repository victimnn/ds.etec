"use client"

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function FaviconSwitcher() {
  const { theme } = useTheme()

  useEffect(() => {
    // Função para mudar o favicon
    const changeFavicon = (theme: string | undefined) => {
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
      const shortcutIcon = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement
      const appleIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement

      const iconPath = '/logo-ds.png'

      if (favicon) favicon.href = iconPath
      if (shortcutIcon) shortcutIcon.href = iconPath
      if (appleIcon) appleIcon.href = iconPath
    }

    // Muda o favicon quando o tema muda
    changeFavicon(theme)
  }, [theme])

  // Não renderiza nada visualmente
  return null
}
