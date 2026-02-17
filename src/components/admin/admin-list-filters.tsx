'use client'

import { Search } from 'lucide-react'
import { Badge } from '@/src/components/ui/badge'
import { Input } from '@/src/components/ui/input'

type AdminListFiltersProps = {
  yearId: string
  shiftId: string
  years: number[]
  shifts: string[]
  selectedYear: string
  selectedShift: string
  searchTerm: string
  total: number
  searchPlaceholder: string
  loadingYears: boolean
  loadingShifts: boolean
  onYearChange: (value: string) => void
  onShiftChange: (value: string) => void
  onSearchChange: (value: string) => void
}

export function AdminListFilters({
  yearId,
  shiftId,
  years,
  shifts,
  selectedYear,
  selectedShift,
  searchTerm,
  total,
  searchPlaceholder,
  loadingYears,
  loadingShifts,
  onYearChange,
  onShiftChange,
  onSearchChange,
}: AdminListFiltersProps) {
  return (
    <div className="grid items-end gap-4 sm:grid-cols-2 xl:grid-cols-[220px_220px_minmax(280px,1fr)_auto]">
      <div className="space-y-1">
        <label htmlFor={yearId} className="text-sm font-medium">
          Ano
        </label>
        <select
          id={yearId}
          className="admin-input bg-background h-10 w-full rounded-md border px-3 text-sm"
          value={selectedYear}
          onChange={event => onYearChange(event.target.value)}
          disabled={loadingYears || years.length === 0}
        >
          <option value="">Selecione um ano</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor={shiftId} className="text-sm font-medium">
          Turno
        </label>
        <select
          id={shiftId}
          className="admin-input bg-background h-10 w-full rounded-md border px-3 text-sm"
          value={selectedShift}
          onChange={event => onShiftChange(event.target.value)}
          disabled={!selectedYear || loadingShifts || shifts.length === 0}
        >
          <option value="">Todos os turnos</option>
          {shifts.map(shift => (
            <option key={shift} value={shift}>
              {shift}
            </option>
          ))}
        </select>
      </div>

      {selectedYear ? (
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            className="pl-10 admin-input"
            value={searchTerm}
            onChange={event => onSearchChange(event.target.value)}
          />
        </div>
      ) : (
        <div className="hidden md:block" />
      )}

      <div className="flex items-end gap-2">
        <Badge variant="secondary" className="h-10 px-4 py-2">
          Total: {selectedYear ? total : 0}
        </Badge>
      </div>
    </div>
  )
}
