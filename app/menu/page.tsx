"use client";
import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroSection from "../components/HeroSection";
import MenuCard from "../components/MenuCard";
import { menuItems, menuPackages } from "../data/menuData";

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = ["all", "juice", "local drinks", "snacks", "pastries"];

  // Search and Category Filter Logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesTab = activeTab === "all" || item.category === activeTab;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  /*
   * ScrollTrigger.batch groups the cards that cross the viewport together into
   * a single stagger, instead of each card animating on its own clock. It also
   * re-runs cleanly whenever the filter changes the grid contents.
   */
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cards = gsap.utils.toArray<HTMLElement>(".menu-card");
      if (!cards.length) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(cards, { opacity: 0, y: 30 });

        ScrollTrigger.batch(cards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.07,
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
    { scope: gridRef, dependencies: [filteredItems], revertOnUpdate: true },
  );

  return (
    <div className="min-h-screen bg-cream">
      <HeroSection
        title="Yanks Tropical Bar"
        description="Authentic Ghanaian Flavors & Tropical Refreshments"
        image="/images/setup1.jpg"
        height="h-[60vh]"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 text-slate-900 md:px-8">
        {/* HEADER & SEARCH BAR */}
        <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
              Freshly Prepared Daily
            </span>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              The Menu
            </h2>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search for snacks or drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm transition-colors placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/25 focus:outline-none"
            />
          </div>
        </div>

        {/* CATEGORY TABS (Sticky for mobile usability) */}
        <div className="no-scrollbar sticky top-0 z-20 mb-12 flex gap-3 overflow-x-auto bg-cream/90 py-4 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 md:text-[11px] ${
                activeTab === cat
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 bg-white text-slate-500 hover:border-slate-900 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ITEM GRID */}
        {filteredItems.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5"
          >
            {filteredItems.map((item) => (
              <MenuCard key={item.name} item={item} className="menu-card" />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-sm text-slate-400">
            Nothing matches &ldquo;{searchQuery}&rdquo;. Try another search.
          </p>
        )}

        {/* EVENT PACKAGES SECTION */}
        <div className="mt-28 border-t border-slate-200 pt-20">
          <div className="mb-14 text-center">
            <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
              Tailored for your celebration
            </span>
            <h2 className="font-display text-4xl sm:text-5xl">Event Packages</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {menuPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
              >
                <span className="font-display text-3xl font-bold text-gold-dark">
                  {pkg.price}
                </span>
                <span className="mt-3 mb-8 border-b border-gold pb-2 text-[10px] font-bold tracking-[0.3em] text-slate-900">
                  {pkg.guests}
                </span>
                <ul className="mb-10 flex-1 space-y-4">
                  {pkg.details.map((detail, idx) => (
                    <li key={idx} className="text-[11px] tracking-wide text-slate-500">
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#booking"
                  className="w-full rounded-full border border-slate-900 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-slate-900 hover:text-white"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[10px] text-slate-400 italic">
            Note: Classy setup available at an additional cost.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
