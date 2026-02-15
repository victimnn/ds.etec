import { NextResponse, type NextRequest } from 'next/server'
import { getAuthSessionToken } from '@/src/lib/auth-session'
import { getSupabaseUserByAccessToken } from '@/src/lib/supabase-auth'

export async function GET(request: NextRequest) {
  const token = getAuthSessionToken(request)
  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 200 })
  }

  const user = await getSupabaseUserByAccessToken(token)
  if (!user) {
    return NextResponse.json({ authenticated: false }, { status: 200 })
  }

  return NextResponse.json(
    {
      authenticated: true,
      user: {
        id: user.id,
        email: user.email || null,
      },
    },
    { status: 200 }
  )
}

