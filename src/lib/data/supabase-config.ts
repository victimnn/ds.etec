import { DataSourceError } from '@/lib/data/errors'

export type SupabasePublicConfig = {
  url: string
  anonKey: string
}

export type SupabaseAdminConfig = {
  url: string
  serviceRoleKey: string
}

function normalizeUrl(url: string): string {
  return url.replace(/\/+$/, '')
}

export function getSupabasePublicConfig(): SupabasePublicConfig {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new DataSourceError(
      'SUPABASE_CONFIG',
      'Supabase public config is missing. Define NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.',
      {
        details: {
          hasUrl: Boolean(url),
          hasAnonKey: Boolean(anonKey),
        },
      }
    )
  }

  return {
    url: normalizeUrl(url),
    anonKey,
  }
}

export function getSupabaseAdminConfig(): SupabaseAdminConfig {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    throw new DataSourceError(
      'SUPABASE_CONFIG',
      'Supabase admin config is missing. Define NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.',
      {
        details: {
          hasUrl: Boolean(url),
          hasServiceRoleKey: Boolean(serviceRoleKey),
        },
      }
    )
  }

  return {
    url: normalizeUrl(url),
    serviceRoleKey,
  }
}

