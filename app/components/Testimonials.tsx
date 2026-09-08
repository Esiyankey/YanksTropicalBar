import Image from 'next/image'
import { Quote } from 'lucide-react'

type Testimonial = {
  name: string
  role: string
  content: string
  image?: string
  accent?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Akosua Mensah",
    role: "Wedding Engagement",
    content: "The Golden celebration made our engagement ceremony unforgettable. The Sobolo was the talk of the day, and the presentation was pure royalty.",
    image: "/images/couple.jpg"
  },
  {
    name: "David Boateng",
    role: "Corporate Launch",
    content: "The corporate launch was a success thanks to their professional service. Our expatriate clients loved the Asana and the cultural touch.",
    image: "/images/couple2.jpg"
  },
  {
    name: "Nana Ama Owusu",
    role: "Traditional Marriage",
    content: "From the palm wine service to the kelewele station, every detail felt intentional. Our elders kept asking who catered the day.",
    accent: "from-amber-500 to-yellow-600"
  },
  {
    name: "Kwame Asante",
    role: "Milestone Birthday",
    content: "They turned my 40th into a proper tropical affair. The gizzard khebab ran out twice because guests kept coming back for more.",
    accent: "from-emerald-500 to-teal-600"
  },
  {
    name: "Selina Adjei",
    role: "Outdooring Ceremony",
    content: "Setup was done before we even arrived, and the team stayed graceful all morning. The lamugine and kubecake were a beautiful nostalgic touch.",
    accent: "from-rose-500 to-pink-600"
  },
  {
    name: "Michael Tetteh",
    role: "Product Activation",
    content: "We needed something that felt premium but unmistakably Ghanaian. Yanks delivered exactly that, and our brand photos came out stunning.",
    accent: "from-sky-500 to-indigo-600"
  },
  {
    name: "Priscilla Ofori",
    role: "Bridal Shower",
    content: "The mocktail bar was the centrepiece of the whole evening. Warm, attentive staff and flavours my friends still text me about.",
    accent: "from-fuchsia-500 to-purple-600"
  },
  {
    name: "Emmanuel Nkrumah",
    role: "Graduation Dinner",
    content: "Punctual, tidy and genuinely kind to every guest. The mango juice and spring rolls disappeared within minutes of service opening.",
    accent: "from-orange-500 to-red-600"
  },
  {
    name: "Yaa Serwaa Danquah",
    role: "Anniversary Soirée",
    content: "Twenty five years of marriage deserved something special, and they honoured it. The tamarind juice took my husband straight back to his childhood.",
    accent: "from-lime-500 to-green-600"
  },
  {
    name: "Kojo Antwi-Boasiako",
    role: "Church Anniversary",
    content: "Serving three hundred guests without a single hiccup is no small feat. The bofrot and nkatie cake platters were an absolute hit.",
    accent: "from-cyan-500 to-blue-600"
  }
]

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="mr-5 w-[280px] shrink-0 sm:mr-6 sm:w-[340px]">
      <div className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/3 p-7 transition-all duration-300 hover:border-gold/40 hover:bg-white/6">
        {/* Star Rating - Smaller */}
        <div className="mb-4 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xs text-gold">★</span>
          ))}
        </div>

        {/* Quote - Standard body size */}
        <p className="mb-6 flex-1 text-sm font-light italic leading-relaxed text-gray-400">
          &ldquo;{t.content}&rdquo;
        </p>

        <div className="flex items-center gap-3 border-t border-white/5 pt-5">
          {/* Avatar - Smaller (h-10 instead of 14) */}
          {t.image ? (
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10">
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
          ) : (
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${t.accent ?? 'from-gold to-brand'} text-[11px] font-bold tracking-wide text-white ring-1 ring-white/10`}
            >
              {initials(t.name)}
            </div>
          )}
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold tracking-wide text-white">{t.name}</p>
            <p className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-gray-500">
              {t.role}
            </p>
          </div>
          {/* Subtle Quote Icon at the end */}
          <Quote className="ml-auto h-4 w-4 shrink-0 text-white/5" />
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-ink py-16 sm:py-20 lg:py-24">
      {/* Header - Compact proportions */}
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center md:text-left">
        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
          Guest Reviews
        </span>
        <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          Words from our Guests
        </h2>
      </div>

      {/* Marquee - slides right to left on every breakpoint */}
      <div className="group/marquee relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-ink to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-ink to-transparent sm:w-24" />

        <div
          className="animate-marquee-rtl flex w-max items-stretch group-hover/marquee:[animation-play-state:paused]"
          style={{ ['--marquee-duration' as string]: '80s' }}
        >
          {/* Rendered twice so the loop is seamless and never ends */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
