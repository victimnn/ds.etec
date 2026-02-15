import { z } from 'zod'
import { DataSourceError } from '@/lib/data/errors'
import { getSupabaseAdminConfig } from '@/lib/data/supabase-config'

type SupabaseMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

type RequestOptions<T> = {
  method?: SupabaseMethod
  body?: unknown
  resourcePath: string
  schema?: z.ZodSchema<T>
  prefer?: string
}

export async function supabaseAdminRequest<T>({
  method = 'GET',
  body,
  resourcePath,
  schema,
  prefer,
}: RequestOptions<T>): Promise<T> {
  const config = getSupabaseAdminConfig()
  const headers: HeadersInit = {
    apikey: config.serviceRoleKey,
    Authorization: `Bearer ${config.serviceRoleKey}`,
  }

  if (body !== undefined) {
    headers['Content-Type'] = 'application/json'
  }

  if (prefer) {
    headers.Prefer = prefer
  }

  const response = await fetch(`${config.url}/rest/v1/${resourcePath}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  })

  if (!response.ok) {
    const responseBody = await response.text()
    throw new DataSourceError(
      'SUPABASE_REQUEST',
      `Supabase admin request failed (${method} ${resourcePath})`,
      {
        status: response.status,
        resourcePath,
        details: responseBody,
      }
    )
  }

  const text = await response.text()
  const parsedJson = text ? (JSON.parse(text) as unknown) : (null as unknown)

  if (!schema) {
    return parsedJson as T
  }

  const parsed = schema.safeParse(parsedJson)
  if (!parsed.success) {
    throw new DataSourceError(
      'SUPABASE_PAYLOAD',
      `Supabase admin payload is invalid (${method} ${resourcePath})`,
      {
        resourcePath,
        details: parsed.error.flatten(),
      }
    )
  }

  return parsed.data
}

