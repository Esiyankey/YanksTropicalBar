import HeroSection from "../components/HeroSection";
import Image from "next/image";
import { menuItems } from "../data/menuData";

const MenuPage = () => {
  const drinks = menuItems.filter((item) => item.category === "drinks");
  const snacks = menuItems.filter((item) => item.category === "snacks");

  return (
    <>
      {/* HERO */}
      <HeroSection
        title="Our Menu"
        description="Discover the vibrant flavors of Ghana with our authentic menu, featuring traditional dishes and tropical refreshments that bring the taste of the islands to your table."
        image="/images/setup1.jpg"
        height="h-[70vh]"
      />

      {/* MENU SECTION */}
      <section className="py-20 px-4 md:px-8 min-h-screen font-serif">
        <div className="max-w-5xl mx-auto">

          {/* ================= DRINKS ================= */}
          <div className="text-center mb-16">
            <span className="text-[#C19D60] uppercase tracking-[0.3em] text-xs font-sans">
              Drinks Menu
            </span>

            <div className="flex items-center justify-center gap-4 mt-2 mb-4">
              <div className="h-px w-8 bg-[#C19D60]/40"></div>
              <span className="text-[#C19D60]">◈◈◈</span>
              <div className="h-px w-8 bg-[#C19D60]/40"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-medium">Drinks</h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-24">
            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

            {drinks.map((item, index) => (
              <div key={index} className="flex gap-3 group">
                {/* Image */}
                <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-medium text-gray-500">
                      {item.name}
                    </h3>
                    <span className="text-[#C19D60] font-sans text-sm">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= SNACKS ================= */}
          <div className="text-center mb-16">
            <span className="text-[#C19D60] uppercase tracking-[0.3em] text-xs font-sans">
              Snacks Menu
            </span>

            <div className="flex items-center justify-center gap-4 mt-2 mb-4">
              <div className="h-px w-8 bg-[#C19D60]/40"></div>
              <span className="text-[#C19D60]">◈◈◈</span>
              <div className="h-px w-8 bg-[#C19D60]/40"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-medium">Snacks</h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

            {snacks.map((item, index) => (
              <div key={index} className="flex gap-3 group">
                {/* Image */}
                <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-medium text-gray-500">
                      {item.name}
                    </h3>
                    <span className="text-[#C19D60] font-sans text-sm">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default MenuPage;