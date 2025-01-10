'use client'

import { ImageSliderProps } from '@/types/types'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'


export default function ImageSlider({ images, alt, autoChangeInterval = 5000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide()
    }, autoChangeInterval)

    return () => clearInterval(intervalId)
  }, [nextSlide, autoChangeInterval])

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
      {/* Current Image */}
      <Image
        src={images[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1}`}
        fill
        className="object-cover transition-transform duration-500"
        priority
      />

      {/* Indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

