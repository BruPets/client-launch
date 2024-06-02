import React, { useState } from 'react'

interface Image {
  alt: string;
  href: string;
}
interface CarouselProps {
  images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className='relative w-full max-w-2xl mx-auto m-12 p-4'>
      <div className='overflow-hidden relative'>
        <div
          className='flex transition-transform duration-500'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div
              key={image.alt}
              className='w-full flex-shrink-0 flex items-center justify-center'
            >
              <img
                src={image.href}
                alt={image.alt}
                className='w-9/12 object-cover max-w-56'
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-1 transform -translate-y-1/2 bg-primary hover:bg-primary/95 rounded-full text-white px-2 py-1'
      >
        <span className='inline-flex items-center justify-center rounded-full  group-focus:ring-4 group-focus:ring-secondary group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white rtl:rotate-180'
            aria-hidden='true'
            fill='none'
            viewBox='0 0 10 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-1 transform -translate-y-1/2 bg-primary hover:bg-primary/95 rounded-full text-white px-2 py-1'
      >
        <span className='inline-flex items-center justify-center rounded-full  group-focus:ring-4 group-focus:ring-secondary group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white rtl:rotate-180'
            aria-hidden='true'
            fill='none'
            viewBox='0 0 10 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
    </div>
  )
}

export default Carousel
