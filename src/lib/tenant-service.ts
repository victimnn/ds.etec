import type { NextRequest } from 'next/server';

export type TenantId = 'main' | 'admin' | 'tcc';

export type TenantConfig = {
  id: TenantId;
  subdomain: string | null;
  basePath: string;
};

const TENANTS: Record<TenantId, TenantConfig> = {
  main: { id: 'main', subdomain: null, basePath: '/main' },
  admin: { id: 'admin', subdomain: 'admin', basePath: '/admin' },
  tcc: { id: 'tcc', subdomain: 'tcc', basePath: '/tcc' },
};

const TENANTS_BY_SUBDOMAIN: Record<string, TenantConfig> = {
  admin: TENANTS.admin,
  tcc: TENANTS.tcc,
};

const IPV4_REGEX = /^\d{1,3}(\.\d{1,3}){3}$/;

function normalizeHostname(host: string): string {
  const trimmed = host.trim().toLowerCase();

  // Ex.: [::1]:3000
  if (trimmed.startsWith('[')) {
    const end = trimmed.indexOf(']');
    if (end > 0) {
      return trimmed.slice(1, end);
    }
  }

  return trimmed.split(':')[0];
}

function extractSubdomain(hostname: string): string | null {
  if (!hostname || hostname === 'localhost' || IPV4_REGEX.test(hostname)) {
    return null;
  }

  // Local dev with subdomain style, ex.: tcc.localhost
  if (hostname.endsWith('.localhost')) {
    const parts = hostname.split('.');
    return parts.length >= 2 ? parts[0] : null;
  }

  const parts = hostname.split('.');
  return parts.length >= 3 ? parts[0] : null;
}

export function resolveTenantFromHost(hostHeader: string): TenantConfig | null {
  const hostname = normalizeHostname(hostHeader);
  const subdomain = extractSubdomain(hostname);

  if (!subdomain) {
    return TENANTS.main;
  }

  return TENANTS_BY_SUBDOMAIN[subdomain] ?? null;
}

export function resolveTenantFromRequest(request: NextRequest): TenantConfig | null {
  const host =
    request.headers.get('x-forwarded-host') ??
    request.headers.get('host') ??
    '';

  return resolveTenantFromHost(host);
}

export function addTenantBasePath(pathname: string, basePath: string): string {
  if (basePath === '/') {
    return pathname;
  }

  if (pathname === '/') {
    return basePath;
  }

  return `${basePath}${pathname}`;
}

export function stripTenantBasePath(pathname: string, basePath: string): string | null {
  if (basePath === '/') {
    return pathname;
  }

  if (pathname === basePath) {
    return '/';
  }

  const withSlash = `${basePath}/`;
  if (pathname.startsWith(withSlash)) {
    return pathname.slice(basePath.length);
  }

  return null;
}

