type ApiMetric = {
  endpoint: string
  method: string
  status: number
  durationMs: number
  ok: boolean
  error?: string
}

export function logApiMetric(metric: ApiMetric): void {
  const payload = {
    ...metric,
    at: new Date().toISOString(),
  }

  if (metric.ok) {
    console.info('[api_metric]', payload)
    return
  }

  console.error('[api_metric]', payload)
}
