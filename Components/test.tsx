// carousel.tsx
'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import img1 from "@/assets/AI2.webp"
import img2 from "@/assets/AI3.webp"

let data = [img1,img2,img1,img2]
export const TestCarousal = () => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)

  // useEffect to get the initial carousel size
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement
    let { width, height } = elem.getBoundingClientRect()
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      })
    }
  }, [])

  return (
    <div className='bg-red-200'>
      {/* Carousel container */}
      <div className="relative h-60 w-full overflow-hidden rounded-md">
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="absolute flex h-full w-full transition-all duration-300 border-2 "
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className="relative flex gap-2 h-full w-full shrink-0">
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={v|| 'https://random.imagecdn.app/500/500'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-3 flex justify-center">
        <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
        >
          {'<'}
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

