"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const slides = [
  { src: "/images/image11.jpeg", alt: "Guests served at a Yanks Tropical Bar setup" },
  { src: "/images/image10.jpeg", alt: "Tropical juice bar styled for an event" },
  { src: "/images/image5.jpeg", alt: "Cocktail and mocktail service in progress" },
  { src: "/images/image2.jpeg", alt: "Finger food platters plated for guests" },
];

const highlights = [
  "Local Bar Setup",
  "Fresh Fruit Juices",
  "Finger Foods",
  "We Travel Nationwide",
];

const SLIDE_MS = 5500;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => setCurrent(index), []);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      SLIDE_MS,
    );
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-ink">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== current}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`relative h-full w-full ${index === current ? "animate-ken-burns" : ""}`}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </div>
      ))}

      {/* Legibility scrim — directional, so the image still reads as an image */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.55)_100%)]" />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-6 pt-28 pb-44 text-center sm:pb-52 lg:pb-64">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-sm sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Event Catering &amp; Mixology
          </span>

          <h1 className="font-display text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl xl:text-8xl">
            Elevate Your
            <br />
            <span className="text-gold italic">Celebration</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 drop-shadow sm:text-base">
            From weddings to corporate galas — the finest Sobolo, Asana and craft
            cocktails, paired with gourmet local snacks.
          </p>

          {/* CTAs — full width on mobile so they are comfortably tappable */}
          <div className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/#booking"
              className="rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-brand/40 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 focus-visible:outline-none"
            >
              Book the Experience
            </Link>
            <Link
              href="/menu"
              className="rounded-full border border-white/50 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 focus-visible:outline-none"
            >
              View Menu
            </Link>
          </div>

          {/* Trust strip */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] font-medium tracking-[0.14em] text-white/60 uppercase sm:gap-x-5 sm:text-[11px]">
            {highlights.map((item, i) => (
              <li key={item} className="flex items-center gap-3 sm:gap-5">
                {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-gold/70 sm:block" />}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Slide controls — horizontal on mobile, vertical rail on desktop */}
      <div className="absolute bottom-32 left-1/2 z-30 flex -translate-x-1/2 gap-2 sm:bottom-36 lg:top-1/2 lg:right-10 lg:bottom-auto lg:left-auto lg:-translate-x-0 lg:-translate-y-1/2 lg:flex-col lg:gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
            className="group p-1.5"
          >
            <span
              className={`block rounded-full transition-all duration-500 ${
                index === current
                  ? "h-1.5 w-8 bg-gold lg:h-8 lg:w-1.5"
                  : "h-1.5 w-4 bg-white/40 group-hover:bg-white/70 lg:h-4 lg:w-1.5"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
