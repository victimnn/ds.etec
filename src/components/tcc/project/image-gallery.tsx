"use client"

import { useState, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { cn } from "@/src/lib/utils"

interface ImageGalleryProps {
  images: string[]
  projectTitle: string
  className?: string
}

export function ImageGallery({ images, projectTitle, className }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openImage = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeImage = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeImage()
    } else if (e.key === "ArrowLeft") {
      goToPrevious()
    } else if (e.key === "ArrowRight") {
      goToNext()
    }
  }

  // Adicionar/remover event listener para teclado
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden' // Previne scroll do body
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImageIndex])

  return (
    <>
      {/* Gallery Grid */}
      <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-3", className)}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-video bg-white rounded-lg overflow-hidden relative group cursor-pointer"
            onClick={() => openImage(index)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${projectTitle} - Imagem ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay com ícone de zoom */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal/Popup - Tela Cheia */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={closeImage}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 text-white hover:bg-white/20"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 text-white hover:bg-white/20"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}

          {/* Image */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <img
              src={images[selectedImageIndex] || "/placeholder.svg"}
              alt={`${projectTitle} - Imagem ${selectedImageIndex + 1}`}
              className="max-w-[90%] max-h-[90%] object-contain"
            />
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  )
}
