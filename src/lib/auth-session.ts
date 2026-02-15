import type { NextRequest } from 'next/server'
import { AUTH_SESSION_COOKIE } from '@/src/lib/auth-cookies'
import { getSupabaseUserByAccessToken } from '@/src/lib/supabase-auth'

export function hasAuthSession(request: NextRequest): boolean {
  return Boolean(request.cookies.get(AUTH_SESSION_COOKIE)?.value)
}

export function getAuthSessionToken(request: NextRequest): string | null {
  return request.cookies.get(AUTH_SESSION_COOKIE)?.value || null
}

export async function hasValidSupabaseSession(
  request: NextRequest
): Promise<boolean> {
  const token = getAuthSessionToken(request)
  if (!token) {
    return false
  }

  const user = await getSupabaseUserByAccessToken(token)
  return Boolean(user?.id)
}
