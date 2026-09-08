import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  "Local Bar Setup",
  "Fruit Juice Setup",
  "Finger Foods and More",
  "Available for Travel",
];

const stats = [
  { value: "100%", label: "Locally Sourced" },
  { value: "All", label: "Ceremonies Covered" },
  { value: "24h", label: "Quote Turnaround" },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Visual composition */}
        <Reveal from="left" className="order-1">
          {/* mb-12 reserves room for the overlapping tile so it never bleeds
              into the next block on any screen size */}
          <div className="relative mb-12">
            <div className="relative aspect-4/5 w-[85%] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/setup1.jpg"
                alt="A Yanks Tropical Bar drinks setup styled for an event"
                fill
                sizes="(max-width: 1024px) 85vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* WhatsApp shortcut, anchored to the main image edge */}
            <Link
              href="https://wa.me/233544620083"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="absolute right-0 top-16 z-20 translate-x-1/2 rounded-full bg-[#25D366] p-3 shadow-xl transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.984-.365-1.739-.757-2.874-2.513-2.96-2.63-.086-.115-.693-.921-.693-1.756 0-.835.432-1.245.586-1.42.155-.174.337-.218.45-.218.112 0 .225.001.323.005.105.004.244-.04.381.285.144.343.493 1.203.536 1.29.043.086.072.187.015.302-.058.115-.086.187-.173.287-.086.1-.181.223-.258.295-.086.081-.176.17-.076.341.1.171.444.733.953 1.186.655.583 1.207.764 1.38.85.171.086.273.072.373-.043.1-.115.432-.504.547-.677.115-.173.23-.144.388-.086.158.058 1.006.475 1.179.561.171.087.287.129.331.201.044.072.044.417-.1.822z" />
              </svg>
            </Link>

            {/* Overlapping tile: same behaviour at every breakpoint */}
            <div className="absolute bottom-0 right-0 aspect-square w-1/2 translate-y-8 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <Image
                src="/images/image11.jpeg"
                alt="Guests being served at an event"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal from="right" delay={0.1} className="order-2">
          <span className="mb-4 inline-block rounded-full bg-gold/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
            About Us
          </span>

          <h2 className="font-display text-4xl leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl">
            Yanks Tropical Bar
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
            We bring refreshing local drinks, delicious finger foods, and beautiful
            setups to make your events unforgettable. Perfect for weddings, parties,
            and special occasions.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <Check className="h-3.5 w-3.5 text-gold-dark" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-slate-200 py-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-xs font-bold uppercase tracking-widest text-slate-900 transition-all hover:gap-3 hover:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            Read More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
