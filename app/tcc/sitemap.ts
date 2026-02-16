import { MetadataRoute } from 'next'
import { getTccProjects } from '@/src/lib/data/data'
import { TCC_SITE_URL, withBaseUrl } from '@/src/lib/site-urls'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = TCC_SITE_URL
  const tccProjects = await getTccProjects()

  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: withBaseUrl(baseUrl, '/projetos'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Páginas dinâmicas dos projetos
  const projectPages = tccProjects.map(project => ({
    url: withBaseUrl(baseUrl, `/projetos/${project.id}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...projectPages]
}
