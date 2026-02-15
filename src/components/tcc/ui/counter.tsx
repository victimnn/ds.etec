'use client'

import { useEffect, useState } from 'react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const endValue = end

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * endValue))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [end, duration])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}
