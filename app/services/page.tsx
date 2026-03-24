import React from "react";
import HeroSection from "../components/HeroSection";
import Image from "next/image";

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
              <button className="text-[#FF5C28] font-bold hover:underline">
                View Menu →
              </button>
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

      <section className="py-12">
        <div className="max-w-xl mx-auto text-center mb-12 px-4">
          <h1 className="text-2xl font-serif italic text-gray-800 leading-relaxed">
            &quot;Nested in the heart of Ghana, Yanks Tropical Bar invites you
            to experience an exciting journey through our unique blend of
            Ghanaian flavors... &quot;
          </h1>
        </div>

        {/* Top Mini-Gallery */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {[5, 6, 9].map((i) => (
              <div
                key={i}
                className="relative aspect-[3/4] w-full  overflow-hidden shadow-sm"
              >
                <Image
                  src={`/images/image${i}.jpeg`}
                  alt="Restaurant interior"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>
            ))}
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
              Order Now
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
