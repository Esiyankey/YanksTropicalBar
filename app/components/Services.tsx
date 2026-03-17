import Link from 'next/link'
import Image from 'next/image'

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Traditional Weddings',
      description: 'Specialized setups for engagement ceremonies with custom-labeled calabashes and kente-draped servers.',
      image: '/images/s2.jpg',
      learnMore: '#'
    },
    {
      id: 2,
      title: 'Corporate Events',
      description: 'Professional refreshment stations designed to impress clients and energize your team during conferences.',
      image: '/images/s4.jpg',
      learnMore: '#'
    },
    {
      id: 3,
      title: 'Private Parties',
      description: 'From birthdays to reunions, we bring the party to life with vibrant drinks and signature snacks.',
      image: '/images/s2.jpg',
      learnMore: '#'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Header Section */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex-1">
            <p className="text-sm font-semibold tracking-widest text-red-600 mb-6 border-l-4 border-red-600 pl-4">
              OUR EXPERTISE
            </p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4">
              Catering Tailored for Your
              <br />
              <span className="text-red-600 italic">Most Precious</span>
            </h1>
            <p className="text-xl font-serif text-black">Moments</p>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Services
              <span className="text-lg">›</span>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col shadow-sm rounded-sm">
              {/* Image Container */}
              <div className="relative h-64 w-full mb-6 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className='p-4'>
                <h3 className="text-xl font-serif font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.learnMore}
                  className="inline-flex items-center text-red-600 font-semibold hover:gap-1 transition-all duration-300 group"
                >
                  Learn More
                  <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">›</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
