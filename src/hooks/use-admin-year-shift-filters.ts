'use client'

import { useEffect, useState } from 'react'

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

        const response = await fetch('/api/admin/anos')
        const payload = await response.json()
        if (!response.ok) {
          throw new Error(payload?.error || 'Erro ao carregar anos.')
        }

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

        const response = await fetch(
          `/api/admin/turnos?context=${context}&ano=${encodeURIComponent(selectedYear)}`
        )
        const payload = await response.json()
        if (!response.ok) {
          throw new Error(payload?.error || 'Erro ao carregar turnos.')
        }

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
