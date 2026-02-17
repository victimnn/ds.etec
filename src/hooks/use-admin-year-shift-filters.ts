'use client'

import { useEffect, useState } from 'react'
import { getCachedOrFetch } from '@/src/lib/client-cache'

export type AdminFilterContext = 'alunos' | 'projetos'

type UseAdminYearShiftFiltersOptions = {
  context: AdminFilterContext
  defaultShift?: string
}

type UseAdminYearShiftFiltersResult = {
  years: number[]
  shifts: string[]
  selectedYear: string
  selectedShift: string
  loadingYears: boolean
  loadingShifts: boolean
  errorMessage: string | null
  setSelectedYear: (year: string) => void
  setSelectedShift: (shift: string) => void
}

const YEARS_CACHE_TTL_MS = 15 * 60 * 1000
const SHIFTS_CACHE_TTL_MS = 10 * 60 * 1000
const UNAUTHORIZED_ERROR = 'UNAUTHORIZED'

function isUnauthorizedError(error: unknown): boolean {
  return error instanceof Error && error.message === UNAUTHORIZED_ERROR
}

function redirectToLogin(): void {
  if (typeof window === 'undefined') return
  sessionStorage.removeItem('admin_email')
  window.location.href = '/login'
}

export function useAdminYearShiftFilters({
  context,
  defaultShift = 'Matutino',
}: UseAdminYearShiftFiltersOptions): UseAdminYearShiftFiltersResult {
  const [years, setYears] = useState<number[]>([])
  const [shifts, setShifts] = useState<string[]>([])
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedShift, setSelectedShift] = useState('')
  const [loadingYears, setLoadingYears] = useState(true)
  const [loadingShifts, setLoadingShifts] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    async function loadYears() {
      try {
        setLoadingYears(true)
        setErrorMessage(null)

        const payload = await getCachedOrFetch<{ anos: number[] }>({
          key: 'admin:filters:anos',
          ttlMs: YEARS_CACHE_TTL_MS,
          fetcher: async () => {
            const response = await fetch('/api/admin/anos')
            const data = await response.json()
            if (!response.ok) {
              if (response.status === 401) {
                throw new Error(UNAUTHORIZED_ERROR)
              }
              throw new Error(data?.error || 'Erro ao carregar anos.')
            }
            return data as { anos: number[] }
          },
        })

        if (Array.isArray(payload?.anos)) {
          const availableYears = payload.anos as number[]
          setYears(availableYears)

          if (availableYears.length > 0) {
            const currentYear = new Date().getFullYear()
            const preferredYear = availableYears.includes(currentYear)
              ? String(currentYear)
              : String(availableYears[0])
            setSelectedYear(preferredYear)
            setSelectedShift(defaultShift)
          }
        }
      } catch (error) {
        if (isUnauthorizedError(error)) {
          redirectToLogin()
          return
        }
        console.error('Failed to load years', error)
        setErrorMessage('Nao foi possivel carregar os anos disponiveis.')
      } finally {
        setLoadingYears(false)
      }
    }

    loadYears()
  }, [defaultShift])

  useEffect(() => {
    if (!selectedYear) {
      setShifts([])
      setSelectedShift('')
      return
    }

    async function loadShifts() {
      try {
        setLoadingShifts(true)
        setErrorMessage(null)

        const payload = await getCachedOrFetch<{ turnos: string[] }>({
          key: `admin:filters:turnos:${context}:${selectedYear}`,
          ttlMs: SHIFTS_CACHE_TTL_MS,
          fetcher: async () => {
            const response = await fetch(
              `/api/admin/turnos?context=${context}&ano=${encodeURIComponent(selectedYear)}`
            )
            const data = await response.json()
            if (!response.ok) {
              if (response.status === 401) {
                throw new Error(UNAUTHORIZED_ERROR)
              }
              throw new Error(data?.error || 'Erro ao carregar turnos.')
            }
            return data as { turnos: string[] }
          },
        })

        if (Array.isArray(payload?.turnos)) {
          const availableShifts = payload.turnos as string[]
          setShifts(availableShifts)

          const preferredShift = availableShifts.find(
            shift => shift.toLowerCase() === defaultShift.toLowerCase()
          )
          setSelectedShift(preferredShift || '')
        } else {
          setShifts([])
          setSelectedShift('')
        }
      } catch (error) {
        if (isUnauthorizedError(error)) {
          redirectToLogin()
          return
        }
        console.error('Failed to load shifts', error)
        setErrorMessage('Nao foi possivel carregar turnos para o ano selecionado.')
      } finally {
        setLoadingShifts(false)
      }
    }

    loadShifts()
  }, [context, defaultShift, selectedYear])

  return {
    years,
    shifts,
    selectedYear,
    selectedShift,
    loadingYears,
    loadingShifts,
    errorMessage,
    setSelectedYear,
    setSelectedShift,
  }
}
