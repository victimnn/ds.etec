import { NextResponse } from 'next/server'
import { AUTH_SESSION_COOKIE } from '@/src/lib/auth-cookies'

export async function POST() {
  const response = NextResponse.json({ success: true }, { status: 200 })
  response.cookies.set(AUTH_SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(0),
  })
  return response
}

