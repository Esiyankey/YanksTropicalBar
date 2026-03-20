import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { ArrowRight } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function HeartSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-[#FDFCF9]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 grid-reverse items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-8 max-w-md order-2 md:order-1">
          <h2
            className={`${playfair.className} text-5xl text-slate-800 leading-tight`}
          >
            We make Events <br /> an Experience to Remember
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed ">
            Whether youre planning a wedding, a corporate event, or a birthday
            party, we are here to make your special day unforgettable.  We
            understand that every event is unique, and we are committed to
            providing personalized service to ensure that your event is a
            success.
          </p>
          <button className="bg-[#D9A045] flex items-center gap-2 hover:bg-[#c48e3a] text-white text-xs font-bold py-4 px-10 rounded-full uppercase tracking-widest transition-all">
            Services
            <ArrowRight size={16} className="animate-caret-blink"/>
          </button>
        </div>

        {/* Right Column: Upper Image & Badge */}
        <div className="relative order-1 md:order-2">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm shadow-sm">
            <Image
              src="/images/setup7.jpg"
              alt="Artisan sandwich"
              fill
              className="object-cover"
            />
          </div>

          {/* Rotating Circular Badge */}
        </div>
      </div>

      {/* Bottom Large Image */}
      <div className="mt-16 relative w-full aspect-21/9 overflow-hidden rounded-sm shadow-md">
        <Image
          src="/images/Buffet.jpg"
          alt="Steak and greens"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
