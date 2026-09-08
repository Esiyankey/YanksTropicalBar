"use client";
import { useState, useMemo } from "react";
import HeroSection from "../components/HeroSection";
import Image from "next/image";
import { menuItems, menuPackages } from "../data/menuData";

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "juice", "local drinks", "snacks", "pastries"];

  // Search and Category Filter Logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesTab = activeTab === "all" || item.category === activeTab;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="bg-[#F9F7F2] min-h-screen">
      <HeroSection 
        title="Yanks Tropical Bar" 
        description="Authentic Ghanaian Flavors & Tropical Refreshments" 
        image="/images/setup1.jpg" 
        height="h-[60vh]"
      />

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto text-[#1A1A1A]">
        
        {/* HEADER & SEARCH BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-serif tracking-tight mb-2 uppercase">The Menu</h2>
            <p className="text-gray-400 font-sans text-xs uppercase tracking-[0.3em]">Freshly Prepared Daily</p>
          </div>

          <div className="w-full md:w-80 relative">
            <input 
              type="text"
              placeholder="Search for snacks or drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-black/10 py-3 px-1 focus:outline-none focus:border-[#C19D60] transition-colors font-sans text-sm"
            />
          </div>
        </div>

        {/* CATEGORY TABS (Sticky for mobile usability) */}
        <div className="flex overflow-x-auto no-scrollbar gap-8 mb-16 border-b border-black/5 pb-4 sticky top-0 bg-[#F9F7F2]/90 backdrop-blur-md z-20">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap uppercase tracking-[0.3em] text-[10px] md:text-xs transition-all duration-300 pb-2 ${
                activeTab === cat ? "text-[#C19D60] border-b-2 border-[#C19D60] font-bold" : "text-gray-400 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ITEM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredItems.map((item, i) => (
            <div key={i} className="group border border-black/[0.03] p-4 bg-white/50 hover:bg-white transition-all duration-500">
              <div className="relative aspect-square mb-6 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
              </div>
              
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-lg tracking-tight uppercase group-hover:text-[#C19D60] transition-colors">
                  {item.name}
                </h3>
                <span className="text-[10px] font-bold text-[#C19D60]">{item.price}</span>
              </div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* EVENT PACKAGES SECTION */}
        <div className="mt-32 pt-24 border-t border-black/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Event Packages</h2>
            <p className="text-gray-400 text-xs uppercase tracking-widest">Tailored for your celebration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuPackages.map((pkg) => (
              <div key={pkg.id} className="p-10 border border-black/5 bg-white flex flex-col items-center text-center">
                <span className="text-[#C19D60] text-3xl font-serif mb-2">{pkg.price}</span>
                <span className="text-[10px] tracking-[0.4em] font-bold text-black mb-8 border-b border-[#C19D60] pb-2">
                  {pkg.guests}
                </span>
                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.details.map((detail, idx) => (
                    <li key={idx} className="text-[11px] text-gray-600 font-sans tracking-wide">
                      {detail}
                    </li>
                  ))}
                </ul>
                <button className="text-[10px] uppercase tracking-[0.3em] font-bold border border-black px-6 py-3 hover:bg-black hover:text-white transition-all w-full">
                  Book Now
                </button>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-[10px] text-gray-400 italic">
            Note: Classy setup available at an additional cost.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;