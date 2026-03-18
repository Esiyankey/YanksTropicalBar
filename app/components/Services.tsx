import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function HeartSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-[#FDFCF9]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 grid-reverse items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8 max-w-md order-2 md:order-1">
          <h2 className={`${playfair.className} text-5xl text-slate-800 leading-tight`}>
            We make food <br /> from the heart
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed ">
            We serve fast dishes choice-full of fine ingredients. We make it easy 
            to eat well, to feed your body with good food, while still enjoying 
            all the most delicious flavors.
          </p>
          <button className="bg-[#D9A045] hover:bg-[#c48e3a] text-white text-xs font-bold py-4 px-10 rounded-full uppercase tracking-widest transition-all">
            Services
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