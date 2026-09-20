import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/chat', '/projects', '/files', '/codex', '/settings']
const authRoutes = ['/auth/login', '/auth/register', '/auth/forgot-password', '/auth/reset-password']

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isAuthRoute = authRoutes.some((route) => path.startsWith(route))
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route))

  // Check for session token
  const token = request.cookies.get('session-token')?.value

  // If trying to access protected route without token, redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/auth/login', request.nextUrl.origin)
    loginUrl.searchParams.set('redirect', path)
    return NextResponse.redirect(loginUrl)
  }

  // If trying to access auth route already logged in, redirect to dashboard
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/chat', request.nextUrl.origin))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.ico$).*)',
  ],
}