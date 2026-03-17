import Image from "next/image";

export default function GallerySection() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-6">
          Moments We have Captured
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Browse through our portfolio of successful events and beautiful
          setups.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Image - Left */}
        <div className="md:col-span-1 md:row-span-2">
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/setup4.jpg"
              alt="Elegant wedding cake setup"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Top Right Image */}
        <div className="md:col-span-1">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/setup1.jpg"
              alt="Fresh fruit and beverage display"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Middle Right Image */}
        <div className="md:col-span-1">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/s2.jpg"
              alt="Corporate event gathering"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Bottom Right Image */}
        <div className="md:col-span-2">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/s4.jpg"
              alt="Delicious snacks and appetizers"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
