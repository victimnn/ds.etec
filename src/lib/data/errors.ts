export type DataSourceErrorCode =
  | 'SUPABASE_CONFIG'
  | 'SUPABASE_REQUEST'
  | 'SUPABASE_PAYLOAD'

type DataSourceErrorOptions = {
  status?: number
  resourcePath?: string
  details?: unknown
  cause?: unknown
}

export class DataSourceError extends Error {
  readonly code: DataSourceErrorCode
  readonly status?: number
  readonly resourcePath?: string
  readonly details?: unknown

  constructor(
    code: DataSourceErrorCode,
    message: string,
    options: DataSourceErrorOptions = {}
  ) {
    super(message)
    this.name = 'DataSourceError'
    this.code = code
    this.status = options.status
    this.resourcePath = options.resourcePath
    this.details = options.details

    if (options.cause !== undefined) {
      ;(this as Error & { cause?: unknown }).cause = options.cause
    }
  }
}

export function isDataSourceError(error: unknown): error is DataSourceError {
  return error instanceof DataSourceError
}
