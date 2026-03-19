import Image from 'next/image'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Akosua Mensah",
      role: "Wedding Engagement",
      content: "The Golden celebration made our engagement ceremony unforgettable. The Sobolo was the talk of the day, and the presentation was pure royalty.",
      image: "/images/lamugine.jpg"
    },
    {
      name: "David Boateng",
      role: "Corporate Launch",
      content: "The corporate launch was a success thanks to their professional service. Our expatriate clients loved the Asana and the cultural touch.",
      image: "/images/kokoro.jpg"
    }
  ]

  return (
    <section className="bg-[#0f172a] py-16 px-6">
      <div className="max-w-4xl mx-auto"> {/* Reduced from 7xl/5xl to 4xl for a tighter feel */}
        
        {/* Header - Compact proportions */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-yellow-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">
            Guest Reviews
          </span>
          <h2 className="text-2xl md:text-3xl  text-white leading-tight">
            Words from our Guests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group bg-white/3 border border-white/10 p-7 rounded-xl hover:bg-white/6 transition-all duration-300"
            >
              {/* Star Rating - Smaller */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xs">★</span>
                ))}
              </div>

              {/* Quote - Standard body size */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 italic font-light">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                {/* Avatar - Smaller (h-10 instead of 14) */}
                <div className="relative h-10 w-10 rounded-full overflow-hidden ring-1 ring-white/10">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs tracking-wide">{t.name}</p>
                  <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mt-0.5">
                    {t.role}
                  </p>
                </div>
                {/* Subtle Quote Icon at the end */}
                <Quote className="ml-auto text-white/5 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}