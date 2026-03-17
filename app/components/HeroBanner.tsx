"use client"

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function HeroCarousel() {
  const images = [
    "/images/s2.jpg",
    "/images/s4.jpg",
    "/images/setup1.jpg",
    "/images/setup4.jpg",
  ]

  return (
    <section className="relative h-162.5 w-full">
      
      {/* Carousel */}
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="absolute inset-0"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className="h-162.5 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        
        <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm mb-4">
          Authentic Ghanaian Refreshments
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          The Soul of Tradition
          <br />
          <span className="text-yellow-400">In Every Sip.</span>
        </h1>

        <p className="text-white mt-4 max-w-xl">
          Elevating your events with the finest traditional drinks and snacks,
          crafted with love and served with heritage.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition">
            Book Us Now
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Explore Menu
          </button>
        </div>

        <span className="text-white mt-8 text-xs tracking-widest">
          SCROLL TO EXPLORE
        </span>

      </div>
    </section>
  )
}