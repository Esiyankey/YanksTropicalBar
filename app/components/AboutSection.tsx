import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
      
      {/* Visual Side: Optimized Images */}
      <div className="relative w-full lg:w-1/2 flex justify-start">
        <div className="relative w-4/5 aspect-[3/4] overflow-hidden rounded-md shadow-lg">
          <Image 
            src="/images/setup3.jpg" 
            alt="Wine pouring" 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Overlapping Image with Next.js optimization */}
        <div className="absolute -bottom-10 -right-4 w-4/5 aspect-square  rounded-sm shadow-2xl overflow-hidden">
          <Image 
            src="/images/setup1.jpg" 
            alt="Dining table" 
            fill 
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2">
        <span className="bg-[#FF7D44] text-white px-3 py-1 text-sm font-bold uppercase tracking-tighter mb-6 inline-block">
          About Us
        </span>
        
        <h2 className={`${dancingScript.className} text-5xl md:text-6xl text-slate-900 mb-6 leading-tight`}>
          Restika One Of The Best <br /> Food Service
        </h2>

        <p className="text-gray-500 text-lg mb-8 max-w-lg">
          There are many majority have suffered alteration in have suffered alteration 
          majority have in some form, humour or randomised words.
        </p>

        <h3 className="text-2xl font-bold mb-4">Our Special Dish Of The Day</h3>

        <ul className="space-y-4 mb-10">
          {[
            "Turmeric coconut rice, chicken sate with peanut sauce",
            "Indonesian Fried Rice. Choice of Chicken, Beef Steak",
            "Wok-fry thin rice noodle. Rice noodle, chicken"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <span className="text-[#f75128] text-xl">✓</span> {item}
            </li>
          ))}
        </ul>

        <button className="bg-[#f75128] hover:bg-[#fa633d] text-white px-10 py-5 font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
          Read More <span>→</span>
        </button>
      </div>
    </section>
  );
}