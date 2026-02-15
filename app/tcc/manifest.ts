import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hub de TC\'s',
    short_name: 'Hub TC\'s',
    description: 'Portal virtual dos Trabalhos de Conclusão de Curso da ETEC João Belarmino',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['education', 'technology'],
    lang: 'pt-BR',
    orientation: 'portrait-primary',
  }
}
