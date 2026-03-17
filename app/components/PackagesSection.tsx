
import Image from 'next/image'

export default function PackagesSection() {

    return(
        <div className="max-w-7xl mx-auto px-8 py-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black mb-6 leading-tight">
              Curated Packages<br />for Every Celebration
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Whether its an intimate family gathering or a grand corporate gala, we have a package that fits your needs. Our pricing is transparent and our service is impeccable.
            </p>
            
            {/* Statistics */}
            <div className="flex gap-16">
              <div>
                <p className="text-3xl font-bold text-red-600 mb-2">500+</p>
                <p className="text-gray-600 text-sm font-semibold tracking-wide">EVENTS CATERED</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-600 mb-2">15k+</p>
                <p className="text-gray-600 text-sm font-semibold tracking-wide">GUESTS SERVED</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/setup4.jpg"
              alt="Catering setup with beverages"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-32 gap-8">
          {/* Essential Package */}
          <div className="border border-gray-300 rounded-lg p-8 flex flex-col">
            <h3 className="text-xl font-serif font-bold text-black mb-4">Essential</h3>
            <p className="text-3xl font-bold text-red-600 mb-1">
              GHC<span className="text-4xl">45</span>
              <span className="text-base font-normal text-gray-600 ml-2">/guest</span>
            </p>
            
            <div className="mt-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Selection of 2 Local Drinks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">3 Traditional Snacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Professional Servers (2)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Basic Glassware Service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Standard Setup & Cleanup</span>
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full py-3 border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-50 transition-colors duration-300">
              Select Package
            </button>
          </div>

          {/* Premium Package */}
          <div className="border-2 border-red-600 rounded-lg p-8 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 text-xs font-bold tracking-widest">
              MOST POPULAR
            </div>
            
            <h3 className="text-xl font-serif font-bold text-black mb-4">Premium</h3>
            <p className="text-3xl font-bold text-red-600 mb-1">
              GHC<span className="text-4xl">85</span>
              <span className="text-base font-normal text-gray-600 ml-2">/guest</span>
            </p>
            
            <div className="mt-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Selection of 4 Local Drinks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Unlimited Snacks Buffet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Professional Servers (5)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Premium Calabash Presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Traditional Music Playlist</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Themed Décor Accents</span>
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-300">
              Select Package
            </button>
          </div>

          {/* Elite Cultural Package */}
          <div className="border border-gray-300 rounded-lg p-8 flex flex-col">
            <h3 className="text-xl font-serif font-bold text-black mb-4">Elite Cultural</h3>
            <p className="text-3xl font-bold text-red-600 mb-1">
              GHC<span className="text-4xl">130</span>
              <span className="text-base font-normal text-gray-600 ml-2">/guest</span>
            </p>
            
            <div className="mt-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Full Drink Menu Access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Bespoke Snack Pairings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Kente-Draped Servers (8+)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Signature Custom Labels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Traditional Drumming Session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">VIP Table Service</span>
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full py-3 border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-50 transition-colors duration-300">
              Select Package
            </button>
          </div>
        </div>
      </div>
    )
}

