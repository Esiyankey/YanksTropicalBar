'use client';
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import Image from "next/image";
import { menuItems } from "../data/menuData";

const MenuPage = () => {
  // Get unique categories from data
  const categories = ["all", ...new Set(menuItems.map((item) => item.category))];
  const [activeTab, setActiveTab] = useState("drinks");

  const filteredItems = activeTab === "all" 
    ? menuItems 
    : menuItems.filter((item) => item.category === activeTab);

  return (
    <>
      {/* HERO: Remains Dark/Moody for that "Premium" entrance */}
      <HeroSection
        title="Our Menu"
        description="Discover the vibrant flavors of Ghana with our authentic menu, featuring traditional dishes and tropical refreshments."
        image="/images/setup1.jpg"
        height="h-[70vh]"
      />

      {/* MENU SECTION: Switched to Light Cream Background (#F9F7F2) */}
      <section className="py-24 px-4 md:px-8 min-h-screen font-serif bg-[#F9F7F2] text-[#1A1A1A]">
        <div className="max-w-5xl mx-auto">
          
          {/* TABS NAVIGATION */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20 border-b border-black/5 pb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`uppercase tracking-[0.25em] text-xs md:text-sm font-sans transition-all duration-300 relative pb-4 ${
                  activeTab === category
                    ? "text-[#C19D60] font-bold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {category}
                {activeTab === category && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C19D60]"></span>
                )}
              </button>
            ))}
          </div>

          {/* DYNAMIC MENU GRID */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
            
            {/* Vertical Divider for Desktop (Darker for light background) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/5 -translate-x-1/2"></div>

            {filteredItems.map((item, index) => (
              <div key={index} className="flex gap-5 group">
                {/* Image Container: Clean border for light BG */}
                <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-medium text-[#222] group-hover:text-[#C19D60] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[#C19D60] font-sans font-bold text-sm ml-4">
                      £{item.price}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed font-sans line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 italic">No items available in this category yet.</p>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default MenuPage;