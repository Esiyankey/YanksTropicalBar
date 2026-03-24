"use client";

import Navbar from "./Navbar";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroCarousel() {
  const images = [
    "/images/image11.jpeg",
    "/images/image10.jpeg",
    "/images/image5.jpeg",
    "/images/image2.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full font-['Poppins']">
     

      <div className="relative h-full w-full overflow-hidden">
        {/* Image Carousel Layer */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt="Yanks Tropical Bar"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Content Layer - Refined Alignment */}
        <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center max-w-4xl"
          >
            <span className="bg-yellow-500/90 text-black px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-lg">
              Event Catering & Mixology
            </span>

            {/* Minimized Headline */}
            <h1 className="text-4xl font-serif md:text-8xl font-semibold text-white leading-[1.1] drop-shadow-lg  tracking-tight">
              Elevate Your <br /> <span className="text-yellow-500">Celebration</span>
            </h1>

            {/* Concise Subheadline */}
            <p className="text-white/90 text-xs md:text-sm mt-6 max-w-2xl leading-relaxed font-medium drop-shadow-md">
              From Weddings to Corporate Galas. Experience the finest Sobolo, 
              Asana, and Craft Cocktails paired with gourmet local snacks.
            </p>

            {/* Refined CTA */}
            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <button className="bg-[#f75128] hover:bg-[#d6411d] text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-xl hover:shadow-[#f75128]/20">
                Book the Experience
              </button>
              <button className="border border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-full text-sm font-bold backdrop-blur-sm transition-all">
                View Menu
              </button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 flex flex-col items-center"
            >
              <span className="text-white text-[10px] tracking-[0.4em] uppercase mb-3 opacity-60">
                Explore
              </span>
              <div className="text-yellow-500 animate-bounce">
                <ArrowDown size={24} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Pagination dots */}
      <div className="absolute bottom-12 right-12 flex flex-col gap-3 z-30 hidden md:flex">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1 rounded-full transition-all duration-500 ${
              index === current ? "bg-yellow-500 h-8" : "bg-white/30 h-4"
            }`}
          />
        ))}
      </div>
    </section>
  );
}