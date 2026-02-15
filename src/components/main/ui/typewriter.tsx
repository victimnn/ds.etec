'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function Typewriter({ 
  words, 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  pauseDuration = 2000 
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index]
    
    const handleType = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, index, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className="relative">
      <span className="text-white">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ 
          duration: 0.8, 
          repeat: Infinity, 
          ease: "linear",
          times: [0, 0.5, 1]
        }}
        className="inline-block w-[3px] h-[0.9em] bg-white ml-1 align-middle"
      />
    </span>
  )
}
