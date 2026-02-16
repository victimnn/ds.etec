'use client'

import * as React from 'react'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import { Badge } from '@/src/components/ui/badge'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/src/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/src/components/ui/popover'
import { cn } from '@/src/lib/utils'
import { Button } from '@/src/components/ui/button'

export interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  className?: string
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = 'Selecionar opções...',
  className,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  const handleUnselect = (item: string) => {
    onChange(selected.filter(i => i !== item))
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'w-full justify-between min-h-11 h-auto py-2 hover:bg-background admin-input',
            className
          )}
        >
          <div className="flex flex-wrap gap-1">
            {selected.length > 0 ? (
              selected.map(item => (
                <Badge
                  variant="secondary"
                  key={item}
                  className="mr-1 mb-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                  onClick={e => {
                    e.stopPropagation()
                    handleUnselect(item)
                  }}
                >
                  {options.find(o => o.value === item)?.label || item}
                  <span
                    role="button"
                    tabIndex={0}
                    aria-label={`Remover ${options.find(o => o.value === item)?.label || item}`}
                    className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        e.stopPropagation()
                        handleUnselect(item)
                      }
                    }}
                    onMouseDown={e => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onClick={e => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleUnselect(item)
                    }}
                  >
                    <X className="h-3 w-3 text-primary hover:text-primary/80" />
                  </span>
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command className="w-full">
          <CommandInput placeholder="Buscar..." />
          <CommandList>
            <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
            <CommandGroup className="max-h-64 overflow-auto">
              {options.map(option => (
                <CommandItem
                  key={option.value}
                  onSelect={() => {
                    onChange(
                      selected.includes(option.value)
                        ? selected.filter(item => item !== option.value)
                        : [...selected, option.value]
                    )
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selected.includes(option.value)
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
