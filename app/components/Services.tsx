import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GlassWater, Martini, UtensilsCrossed } from "lucide-react";
import Reveal from "./Reveal";

const offerings = [
  {
    icon: Martini,
    title: "Local Bar Setup",
    copy: "A styled bar stocked with palm wine, Asana, Sobolo and craft cocktails, run by attentive staff.",
  },
  {
    icon: GlassWater,
    title: "Fresh Juice Bar",
    copy: "Mango, pineapple, watermelon and tamarind pressed fresh and served cold through the whole event.",
  },
  {
    icon: UtensilsCrossed,
    title: "Finger Foods & Grills",
    copy: "Kelewele, gizzard khebab, spring rolls, bofrot and more, replenished so nothing runs dry.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro: copy and lead image */}
        <div className="grid grid-cols-1 m-0 p-0 items-center gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal from="left" className="order-2 md:order-1">
            <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
              What We Do
            </span>

            <h2 className="font-display text-4xl leading-[1.1] text-slate-900 sm:text-5xl">
              We make Events an Experience to Remember
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
              Whether you are planning a wedding, a corporate event, or a birthday
              party, we are here to make your special day unforgettable. Every event
              is unique, so every setup is built around yours.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-9 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:gap-3 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal from="right" delay={0.1} className="order-1 p-0 md:order-2">
            <div className="relative m-0 p-0 aspect-4/3 w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/image12.jpeg"
                alt="Platters prepared for an event"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover m-0 p-0"
              />
            </div>
          </Reveal>
        </div>

        {/* Offering cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {offerings.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="group h-full rounded-2xl border border-slate-200/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-dark transition-colors group-hover:bg-gold group-hover:text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Showreel */}
        <Reveal delay={0.1}>
          <div className="relative mt-16 aspect-video w-full overflow-hidden rounded-2xl shadow-xl lg:mt-20 lg:aspect-21/9">
            <video
              src="/videos/video3.mp4"
              poster="/images/setup3.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <p className="pointer-events-none absolute bottom-5 left-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 sm:bottom-8 sm:left-8 sm:text-xs">
              Setups in motion
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
