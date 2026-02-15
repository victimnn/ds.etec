import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  addTenantBasePath,
  resolveTenantFromRequest,
  stripTenantBasePath,
} from './src/lib/tenant-service';
import { AUTH_SESSION_COOKIE } from './src/lib/auth-cookies';

const PUBLIC_ROUTES = ['/api/', '/_next/', '/favicon.ico', '/mock/'];
const INTERNAL_BASE_PATHS = ['/main', '/admin', '/tcc'];

function isPublicRoute(pathname: string): boolean {
  return (
    PUBLIC_ROUTES.some((route) => pathname.startsWith(route)) ||
    pathname.includes('.') ||
    pathname.startsWith('/_next')
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  const tenant = resolveTenantFromRequest(request);

  // Unknown subdomain
  if (!tenant) {
    return NextResponse.redirect(new URL('https://dsetecjb.com.br', request.url));
  }

  // Canonical URL on each tenant: hide internal base path from browser URL.
  const strippedPath = stripTenantBasePath(pathname, tenant.basePath);
  if (strippedPath && strippedPath !== pathname) {
    return NextResponse.redirect(new URL(strippedPath, request.url));
  }

  // Prevent access to another tenant namespace in the current host.
  const isDifferentTenantNamespace = INTERNAL_BASE_PATHS.some((basePath) => {
    if (basePath === tenant.basePath) {
      return false;
    }

    return pathname === basePath || pathname.startsWith(`${basePath}/`);
  });

  if (isDifferentTenantNamespace) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const isAdminLoginRoute = pathname === '/login' || pathname.startsWith('/login/');
  const requiresAdminSession = tenant.id === 'admin' && !isAdminLoginRoute;

  if (requiresAdminSession) {
    const authCookie = request.cookies.get(AUTH_SESSION_COOKIE);
    if (!authCookie?.value) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  const rewrittenPath = addTenantBasePath(pathname, tenant.basePath);
  const rewrittenUrl = request.nextUrl.clone();
  rewrittenUrl.pathname = rewrittenPath;

  return NextResponse.rewrite(rewrittenUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|manifest\\.json|manifest\\.webmanifest|sw\\.js|.*\\..*).*)',
  ],
};
