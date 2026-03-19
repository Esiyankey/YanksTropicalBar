"use client";

import Navbar from "./Navbar";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroCarousel() {
  const images = [
    "/images/setup1.jpg",
    "/images/s2.jpg",
    "/images/setup2.jpg",
    "/images/setup3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-200 w-full">
      <Navbar />

      <div className="relative h-screen w-full overflow-hidden">
        {" "}
        {/* Changed to h-screen for a true Hero feel */}
        {/* 1. Image Carousel Layer */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt="hero image"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="relative z-20 flex h-full flex-col mt-4 md:mt-0 items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="bg-yellow-500 text-black px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-6">
              Authentic Ghanaian Refreshments
            </span>

            {/* Main Title */}
            <h1 className="text-6xl md:text-9xl font-bold text-white leading-tight drop-shadow-2xl">
              Yanks Tropical <br /> Bar
            </h1>

            {/* Bottom Section: Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 flex flex-col items-center"
            >
              <span className="text-white text-xs tracking-[0.3em] uppercase mb-4 opacity-80">
                Scroll to explore
              </span>

              <div className="text-[#f75128] animate-bounce cursor-pointer">
                <ArrowDown size={32} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-105 w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
