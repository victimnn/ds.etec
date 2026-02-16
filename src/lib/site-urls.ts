export const MAIN_SITE_URL =
  process.env.NEXT_PUBLIC_MAIN_URL || 'https://dsetecjb.com.br'

export const TCC_SITE_URL =
  process.env.NEXT_PUBLIC_TCC_URL || 'https://tcc.etecjb.com.br'

export const ADMIN_SITE_URL =
  process.env.NEXT_PUBLIC_ADMIN_URL || 'https://admin.etecjb.com.br'

export function withBaseUrl(baseUrl: string, path: string): string {
  const normalizedBase = baseUrl.replace(/\/+$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${normalizedBase}${normalizedPath}`
}
