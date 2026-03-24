import React from "react";
import HeroSection from "../components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

const Page = () => {
  return (
    <>
      <HeroSection
        title="Our Services"
        description="Experience the vibrant flavors of Ghana with our authentic menu, featuring traditional dishes and tropical refreshments."
        image="/images/image6.jpeg"
        height="h-[70vh]"
      />
      <section className="max-w-7xl mx-auto px-6 py-16 font-['Poppins']">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Large Tall Image */}
          <div className="relative rounded-3xl overflow-hidden h-[550px] shadow-lg">
            <video
              src="/videos/video5.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            ></video>{" "}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <div className="border-l-4 border-[#FF5C28] pl-4">
                <h3 className="text-2xl font-bold">WEDDINGS</h3>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-8">
            <div className="relative rounded-3xl overflow-hidden h-[250px] shadow-md">
              <video
                src="/videos/video2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              ></video>{" "}
              <div className="absolute inset-0 bg-black/30 flex items-center p-6 text-white">
                <div className="border-l-4 border-[#FF5C28] pl-4">
                  <h4 className="font-bold text-xl">ENGAGEMENTS</h4>
                </div>
              </div>
            </div>

            <div className="py-4 bg-gray-50 p-6 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-[#FF5C28] pl-4">
                Our Services
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                From the bustling streets of Accra to the coast, we bring the
                best of Ghana to your table.
              </p>
              <Link href="/menu">
                <button className="text-[#FF5C28] font-bold hover:underline">
                  View Menu →
                </button>
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-full shadow-md">
            <video
              src="/videos/video3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            ></video>{" "}
            <div className="absolute inset-0 bg-black/30 flex items-center p-6 text-white">
              <div className="border-l-4 border-[#FF5C28] pl-4">
                <h4 className="font-bold text-xl">CORPORATE EVENTS</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FAFAFA] font-['Poppins'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Asymmetric Image Composition */}
          <div className="relative w-full lg:w-1/2 flex gap-4 h-[500px]">
            {/* Main Featured Image */}
            <div className="relative w-2/3 h-full rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <Image 
                src="/images/image5.jpeg" 
                alt="Main Service" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Stacked Side Images */}
            <div className="flex flex-col gap-4 w-1/3 h-full">
              <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-md">
                <Image src="/images/image6.jpeg" alt="Detail 1" fill className="object-cover" />
              </div>
              <div className="relative h-1/2 rounded-2xl overflow-hidden shadow-md border-4 border-white">
                <Image src="/images/image9.jpeg" alt="Detail 2" fill className="object-cover" />
                {/* Visual "Add-on" Badge */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <div className="bg-white/90 p-2 rounded-full">
                      <Plus className="text-[#f75128]" size={20} />
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content with "Add-on" Focus */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#f75128]/10 text-[#f75128] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              <Plus size={14} /> 
              Exclusive Add-ons
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The Perfect <span className="text-[#f75128]">Tropical</span> <br /> 
              Accompaniments
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg font-light">
              Elevate your primary package with our curated selections. From hand-pressed Sobolo to artisan Ghanaian snacks, these additions bring the soul of the islands to your event.
            </p>

            {/* Feature List - Minimalist Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col border-l-2 border-gray-200 pl-4 hover:border-[#f75128] transition-colors">
                <span className="font-bold text-gray-900">Custom Mixology</span>
                <span className="text-sm text-gray-500">Bespoke tropical cocktails</span>
              </div>
              <div className="flex flex-col border-l-2 border-gray-200 pl-4 hover:border-[#f75128] transition-colors">
                <span className="font-bold text-gray-900">Gourmet Small Chops</span>
                <span className="text-sm text-gray-500">Traditional snacks, elevated</span>
              </div>
            </div>

            <button className="group mt-8 flex items-center gap-3 text-gray-900 font-bold text-lg hover:text-[#f75128] transition-colors">
              Customize Your Package
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#f75128] group-hover:bg-[#f75128] group-hover:text-white transition-all">
                <Plus size={20} />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>

      {/* Hero-Style Split Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 font-['Poppins']">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="bg-[#1D4D44] text-white p-10 rounded-3xl md:w-1/2 relative min-h-[450px] flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Authentic Flavors <br /> from Local Kitchens
            </h2>
            <p className="text-gray-200 mb-8 max-w-sm">
              Experience the rich heritage of our cuisine with curated
              traditional recipes.
            </p>
            <button className="bg-[#FF5C28] hover:bg-[#e04a1d] text-white px-8 py-3 rounded-full w-fit transition-all">
              Book Us Now
            </button>

            {/* The Overlapping Circular Image */}
            <div className="hidden lg:block absolute rounded-full -right-24 top-2/3 -translate-y-1/2 w-64 h-64  overflow-hidden shadow-2xl border-[2px] border-white">
              <Image
                src="/images/image5.jpeg"
                alt="Signature Dish"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2 lg:pl-32">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#FF5C28] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </span>
              <h2 className="text-2xl font-bold text-gray-800">
                Perfectly Prepared
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our chefs use only the freshest ingredients to ensure every dish
              tells a story of passion.
            </p>
          </div>
        </div>
      </section>

      {/* Staggered Grid Section */}
    </>
  );
};

export default Page;
