import { CookingPotIcon, DrillIcon, FlowerIcon } from "lucide-react";
import Image from "next/image";
import HeroSection from "../components/HeroSection";

export default function AboutUs() {
  const preparationSteps = [
    {
      title: "Sun-Dried Hibiscus",
      description:
        "Sourced directly from northern farmers, our petals are sun-dried to lock in that deep flavor.",
      image: "/images/image6.jpeg",
      icon: <FlowerIcon />,
    },
    {
      title: "Traditional Brewing",
      description:
        "Using large clay pots, we allow our asana to ferment naturally, developing a unique profile.",
      image: "/images/image2.jpeg",
      icon: <DrillIcon />,
    },
    {
      title: "Signature Spice Blends",
      description:
        "Ginger, cloves, and grains of paradise are freshly crushed for every batch.",
      image: "/images/image5.jpeg",
      icon: <CookingPotIcon />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <HeroSection
        title="The Soul of the Calabash"
        description="Preserving the vibrant heritage of Ghanaian refreshments through authentic craftsmanship and premium hospitality."
        image="/images/setup1.jpg"
      />

      {/* 1. OUR HERITAGE - Balanced Layout */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 order-2 md:order-1">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-[#b44125] mb-6">
              Our Heritage
            </span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-8 font-serif leading-tight">
              From Humble Roots <br /> to Royal Tables
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                Yanks Tropical Bar was born from a love for local flavors and
                community celebrations. What started as a simple recipe for the
                perfect Sobolo has grown into a trusted catering service.
              </p>
              <p>
                Every drink and setup tells a story. From refreshing asana to
                cooling lamuche, we honor tradition while creating memorable
                moments.
              </p>
            </div>
          </div>
          {/* Constrained Image Container */}
          <div className="w-full md:w-[450px] order-1 md:order-2">
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/image3.jpeg"
                alt="Cultural Heritage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROVERB - Tightened Width */}
      <section className="bg-[#fdf8f6] py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl text-gray-700 font-serif italic leading-snug">
            &ldquo;The calabash that brings refreshment speaks louder than
            words—it delivers joy, culture, and flavor in every sip.&rdquo;
          </p>
          <p className="mt-8 text-[10px] tracking-[0.4em] text-[#b44125] uppercase font-bold">
            Traditional Akan Proverb
          </p>
        </div>
      </section>

      {/* 3. OUR CRAFT - Image Scale Fixed */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Constrained Image Container */}
          <div className="w-full md:w-[450px]">
            <div className="aspect-square relative overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/setup3.jpg"
                alt="Event setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-[#b44125] mb-6">
              Our Craft
            </span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-serif leading-tight">
              More Than Just <br /> Catering
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We dont just serve drinks; we set the stage. Our signature setups
              feature hand-carved calabashes and live garnishing stations that
              turn refreshment into a performance.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PREPARATION STEPS - Smaller Card Grid */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {preparationSteps.map((step, index) => (
              <div
                key={index}
                className="group relative h-[400px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA - Clean & Simple */}
      <section className="bg-[#b44125] py-20 text-center text-white px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">
            Ready to experience the golden standard?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#b44125] px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors">
              Book Your Event
            </button>
            <button className="border border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#b44125] transition-colors">
              Our Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
