"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MenuCard from "./MenuCard";
import { menuItems } from "../data/menuData";

/* A curated cross-section of the menu rather than all 28 items. */
const FEATURED = [
  "Classic Sobolo",
  "Kelewele",
  "Mango Juice",
  "Gizzard Khebab",
  "Palm Wine",
  "Yam Balls",
  "Spring Rolls",
  "Bofrot",
];

const featuredItems = FEATURED.map((name) =>
  menuItems.find((item) => item.name === name),
).filter((item) => item !== undefined);

export default function SignatureMenu() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cards = gsap.utils.toArray<HTMLElement>(".signature-card");
      if (!cards.length) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(cards, { opacity: 0, y: 24 });

        ScrollTrigger.batch(cards, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
              overwrite: true,
            }),
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(cards, { opacity: 1, y: 0 });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  /* Page the track by roughly one screenful of cards. */
  const nudge = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-ink py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
              Signature Menu
            </span>
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              Taste the Tropics
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/50">
              A handful of guest favourites. Order any of them straight to your
              event over WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Track controls, pointer users only */}
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                onClick={() => nudge(-1)}
                aria-label="Previous items"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-gold hover:bg-gold hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => nudge(1)}
                aria-label="Next items"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-gold hover:bg-gold hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <Link
              href="/menu"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:border-gold hover:bg-gold hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Full Menu
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/*
         * Natively scrollable at every breakpoint, so every card stays
         * reachable by trackpad, drag or the arrows above. The negative margin
         * lets cards run to the container edge without escaping it.
         */}
        <div
          ref={scrollerRef}
          className="-mx-6 mt-10 overflow-x-auto overscroll-x-contain px-6 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max snap-x snap-mandatory gap-4 sm:gap-5">
            {featuredItems.map((item) => (
              <MenuCard
                key={item.name}
                item={item}
                className="signature-card w-[220px] shrink-0 snap-start sm:w-[250px] lg:w-[270px]"
              />
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.22em] text-white/30 md:hidden">
          Swipe to explore
        </p>
      </div>
    </section>
  );
}
