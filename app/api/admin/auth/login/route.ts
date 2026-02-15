import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { AUTH_SESSION_COOKIE } from '@/src/lib/auth-cookies'
import { signInWithSupabasePassword } from '@/src/lib/supabase-auth'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export async function POST(request: NextRequest) {
  const body = (await request.json()) as unknown
  const parsed = loginSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: 'Credenciais invalidas.' },
      { status: 400 }
    )
  }

  const session = await signInWithSupabasePassword(parsed.data)
  if (!session?.access_token) {
    return NextResponse.json(
      { success: false, error: 'Email ou senha incorretos.' },
      { status: 401 }
    )
  }

  const response = NextResponse.json({ success: true }, { status: 200 })
  response.cookies.set(AUTH_SESSION_COOKIE, session.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
  })

  return response
}
