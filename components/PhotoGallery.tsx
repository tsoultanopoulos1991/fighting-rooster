'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
  title: string
}

interface PhotoGalleryProps {
  images?: GalleryImage[]
  title?: string
  subtitle?: string
}

export default function PhotoGallery({
  images = defaultImages,
  title = 'Φωτογραφίες από το Γυμναστήριο',
  subtitle = 'Ρίξε μια ματιά στον χώρο μας, τον εξοπλισμό και την ατμόσφαιρα προπόνησης',
}: PhotoGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  // Preload all images for faster transitions
  useEffect(() => {
    images.forEach((image) => {
      const img = new window.Image()
      img.src = image.src
    })
  }, [images])

  const changeSlide = (newIndex: number) => {
    if (newIndex === currentSlide || isChanging) return

    setIsChanging(true)
    setCurrentSlide(newIndex)

    // Reset changing state quickly
    setTimeout(() => setIsChanging(false), 150)
  }

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % images.length
    changeSlide(newIndex)
  }

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + images.length) % images.length
    changeSlide(newIndex)
  }

  const goToSlide = (index: number) => {
    changeSlide(index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            {/* Main Image with faster transitions */}
            <div className="relative w-full h-full">
              <Image
                key={currentSlide} // ← Force re-render for instant change
                src={images[currentSlide].src}
                alt={images[currentSlide].alt}
                fill
                className="object-cover transition-opacity duration-200 ease-out" // ← Faster transition
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />

              {/* Overlay with title - faster transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 transition-all duration-150 ease-out">
                  <h3 className="text-white text-xl md:text-2xl font-display font-bold mb-2">
                    {images[currentSlide].title}
                  </h3>
                  <p className="text-primary-200 text-sm">
                    {currentSlide + 1} / {images.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows - faster hover effects */}
            <button
              onClick={prevSlide}
              disabled={isChanging}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-150 hover:scale-110 disabled:opacity-50"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={isChanging}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-150 hover:scale-110 disabled:opacity-50"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator - faster transitions */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isChanging}
                className={`w-3 h-3 rounded-full transition-all duration-150 ${
                  index === currentSlide
                    ? 'bg-primary-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Strip - instant selection */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isChanging}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-100 ${
                  index === currentSlide
                    ? 'ring-4 ring-primary-600 scale-105'
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, (max-width: 1024px) 16vw, 12vw"
                />
                {index !== currentSlide && (
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-100" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-8 space-x-6">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">{images.length}</span> φωτογραφίες
            </p>
          </div>

          <button
            onClick={nextSlide}
            disabled={isChanging}
            className="bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-150"
          >
            Επόμενη Φωτογραφία
          </button>
        </div>
      </div>
    </section>
  )
}

// Default images (you can customize these)
const defaultImages: GalleryImage[] = [
  {
    src: '/images/gallery/gym-interior-1.jpg',
    alt: 'Gym Interior - Ring and Equipment',
    title: 'Εξωτερικός Χώρος Γυμναστηρίου',
  },
  {
    src: '/images/gallery/gym-interior-2.jpg',
    alt: 'Muay Thai Training Session',
    title: 'Εσωτερικός Χώρος Γυμναστηρίου',
  },
  {
    src: '/images/gallery/gym-interior-3.jpg',
    alt: 'Heavy Bags Area',
    title: 'Εσωτερικός Χώρος Γυμναστηρίου',
  },
  {
    src: '/images/gallery/gym-interior-4.jpg',
    alt: 'Heavy Bags Area',
    title: 'Εσωτερικός Χώρος Γυμναστηρίου',
  },
  {
    src: '/images/gallery/team-1.jpg',
    alt: 'Muay Thai Training Session',
    title: 'Η Ομάδα μας',
  },
  {
    src: '/images/gallery/team-2.jpg',
    alt: 'Muay Thai Training Session',
    title: 'Η Ομάδα μας',
  },
]
