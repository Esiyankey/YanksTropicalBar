
import Image from 'next/image'

export default function Testimonials() {

    return(
        <div className="bg-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-black">
              Words from our Guests
            </h2>
            <div className="mt-6 flex justify-center">
              <div className="h-px w-24 bg-gray-300"></div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-8 md:p-10 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-8 flex-1">
                &ldquo;The Golden celebration made our engagement ceremony unforgettable. The Sobolo was the talk of the day, and the presentation was pure royalty.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden bg-gray-200 ">
                  <Image
                    src="/images/lamugine.jpg"
                    alt="Akosua Mensah"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif font-bold text-black">Akosua Mensah</p>
                  <p className="text-xs text-gray-600 font-semibold tracking-wide">WEDDING ENGAGEMENT</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-8 md:p-10 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-8 flex-1">
                &ldquo;The corporate launch was a success thanks to their professional service. Our expatriate clients loved the Asana and the cultural touch.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <Image
                    src="/images/kokoro.jpg"
                    alt="David Boateng"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif font-bold text-black">David Boateng</p>
                  <p className="text-xs text-gray-600 font-semibold tracking-wide">CORPORATE LAUNCH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}