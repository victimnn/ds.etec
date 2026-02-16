import { MetadataRoute } from 'next'
import { TCC_SITE_URL, withBaseUrl } from '@/src/lib/site-urls'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: withBaseUrl(TCC_SITE_URL, '/sitemap.xml'),
  }
}
