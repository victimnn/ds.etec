import { z } from 'zod'
import { getSupabasePublicConfig } from '@/src/lib/data/supabase-config'

const authTokenResponseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string().optional(),
  expires_in: z.number().optional(),
  token_type: z.string().optional(),
  user: z
    .object({
      id: z.string(),
      email: z.string().email().nullable().optional(),
      role: z.string().nullable().optional(),
    })
    .optional(),
})

const supabaseUserSchema = z.object({
  id: z.string(),
  email: z.string().email().nullable().optional(),
  role: z.string().nullable().optional(),
})

export type SupabaseAuthTokenResponse = z.infer<typeof authTokenResponseSchema>
export type SupabaseAuthUser = z.infer<typeof supabaseUserSchema>

export async function signInWithSupabasePassword(params: {
  email: string
  password: string
}): Promise<SupabaseAuthTokenResponse | null> {
  const config = getSupabasePublicConfig()
  const response = await fetch(`${config.url}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: params.email,
      password: params.password,
    }),
    cache: 'no-store',
  })

  if (!response.ok) {
    return null
  }

  const payload = (await response.json()) as unknown
  const parsed = authTokenResponseSchema.safeParse(payload)
  if (!parsed.success) {
    return null
  }

  return parsed.data
}

export async function getSupabaseUserByAccessToken(
  accessToken: string
): Promise<SupabaseAuthUser | null> {
  const config = getSupabasePublicConfig()
  const response = await fetch(`${config.url}/auth/v1/user`, {
    method: 'GET',
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    return null
  }

  const payload = (await response.json()) as unknown
  const parsed = supabaseUserSchema.safeParse(payload)
  if (!parsed.success) {
    return null
  }

  return parsed.data
}

