import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Editorial grid. `span` values only kick in from `sm` upward, so the mobile
 * layout stays a clean two-column mosaic instead of being letterboxed into a
 * fixed-height row.
 */
const shots = [
  { src: "/images/image13.jpeg", alt: "Plated finger foods", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/setup4.jpg", alt: "Bar counter styled with fruit", span: "" },
  { src: "/images/image12.jpeg", alt: "Guests being served drinks", span: "" },
  { src: "/images/Buffet.jpg", alt: "Buffet spread at an event", span: "sm:col-span-2" },
  { src: "/images/sobolo.jpg", alt: "Chilled Sobolo poured for guests", span: "" },
  { src: "/images/setup7.jpg", alt: "Evening event setup with lighting", span: "" },
];

export default function GallerySection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
              Our Work
            </span>
            <h2 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Moments We Have Poured
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-slate-300 px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 sm:self-auto"
          >
            View Full Gallery
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        {/* Mosaic */}
        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-4 lg:auto-rows-[210px]">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.src}
              delay={i * 0.06}
              className={`${shot.span} group relative overflow-hidden rounded-xl bg-slate-100`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="pointer-events-none absolute bottom-4 left-4 right-4 translate-y-2 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {shot.alt}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
