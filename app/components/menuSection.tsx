import Link from 'next/link'
import Image from 'next/image'

export default function MenuSection() {

    return(
         <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-gray-600 mb-4">
              CUSTOMER FAVORITES
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-6">
              A Taste of the Golden Menu
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-16 bg-yellow-500"></div>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Signature Sobolo */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/sobolo.jpg"
                  alt="Signature Sobolo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-bold text-black">
                Signature Sobolo
              </h3>
            </div>

            {/* Sweet Asana */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/asana.jpg"
                  alt="Sweet Asana"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-bold text-black">
                Sweet Asana
              </h3>
            </div>

            {/* Spicy Koose */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/kokoro.jpg"
                  alt="Spicy Koose"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-bold text-black">
                Spicy Koose
              </h3>
            </div>

            {/* Honey Togbei */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/lamugine.jpg"
                  alt="Honey Togbei"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-bold text-black">
                Honey Togbei
              </h3>
            </div>
          </div>

          {/* View Menu Button */}
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-block px-8 py-3 border-2 border-red-600 text-red-600 font-semibold hover:bg-red-50 transition-colors duration-300"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </div>
    )
}