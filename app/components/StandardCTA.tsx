import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

type GoldenStandardCTAProps = {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
};

const GoldenStandardCTA = ({
  title = "Experience the Golden Standard",
  subtitle = "Ready to bring a taste of Ghanaian heritage to your next event? Let us craft a refreshment experience your guests will never forget.",
  primaryButtonText = "Book Your Event",
  primaryButtonLink = "/#booking",
  secondaryButtonText = "Explore Our Menu",
  secondaryButtonLink = "/menu",
  backgroundImage = "/images/setup1.jpg",
}: GoldenStandardCTAProps) => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-6 py-24 text-center sm:py-28 lg:py-32">
      {/* Background, served through next/image so it is optimised and sized */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="object-cover"
      />

      {/* Frosted scrim */}
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-md" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-ink/60" />

      <Reveal className="relative z-10 w-full max-w-3xl">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Let Us Host You
        </span>

        <h2 className="font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
          {subtitle}
        </p>

        <div className="mx-auto mt-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href={primaryButtonLink}
            className="rounded-full bg-brand px-9 py-4 text-sm font-semibold text-white shadow-xl shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-brand/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            {primaryButtonText}
          </Link>

          <Link
            href={secondaryButtonLink}
            className="rounded-full border border-white/50 px-9 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default GoldenStandardCTA;
