'use client'

type CacheEntry<T> = {
  value: T
  expiresAt: number
}

const CACHE_PREFIX = 'ds.etec:cache:'

function buildKey(key: string): string {
  return `${CACHE_PREFIX}${key}`
}

function isBrowser(): boolean {
  return typeof window !== 'undefined'
}

export function getCache<T>(key: string): T | null {
  if (!isBrowser()) return null

  try {
    const raw = window.localStorage.getItem(buildKey(key))
    if (!raw) return null

    const parsed = JSON.parse(raw) as CacheEntry<T>
    if (!parsed || typeof parsed.expiresAt !== 'number') {
      window.localStorage.removeItem(buildKey(key))
      return null
    }

    if (Date.now() >= parsed.expiresAt) {
      window.localStorage.removeItem(buildKey(key))
      return null
    }

    return parsed.value
  } catch {
    window.localStorage.removeItem(buildKey(key))
    return null
  }
}

export function setCache<T>(key: string, value: T, ttlMs: number): void {
  if (!isBrowser()) return

  const entry: CacheEntry<T> = {
    value,
    expiresAt: Date.now() + ttlMs,
  }

  try {
    window.localStorage.setItem(buildKey(key), JSON.stringify(entry))
  } catch {
    // Ignore quota or serialization errors.
  }
}

export function invalidateCacheByPrefix(prefix: string): void {
  if (!isBrowser()) return

  const keyPrefix = buildKey(prefix)
  const keysToRemove: string[] = []

  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index)
    if (key && key.startsWith(keyPrefix)) {
      keysToRemove.push(key)
    }
  }

  keysToRemove.forEach(key => {
    window.localStorage.removeItem(key)
  })
}

export async function getCachedOrFetch<T>({
  key,
  ttlMs,
  fetcher,
}: {
  key: string
  ttlMs: number
  fetcher: () => Promise<T>
}): Promise<T> {
  const cached = getCache<T>(key)
  if (cached !== null) return cached

  const fresh = await fetcher()
  setCache(key, fresh, ttlMs)
  return fresh
}
