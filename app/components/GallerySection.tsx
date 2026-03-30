import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  return (
    <section className="bg-white py-12 px-4">
      {/* Fixed height container to ensure images stay small */}
      <div className="max-w-7xl mx-auto h-100 flex flex-col md:flex-row gap-1">
        
        {/* LEFT COLUMN (Stacked) */}
        <div className="flex-1 flex flex-col gap-1 h-full">
          {/* Top: Food Plate - Exactly half height */}
          <div className="relative flex-1 w-full bg-gray-100 overflow-hidden">
            <Image
              src="/images/image13.jpeg" 
              alt="Featured Dish"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom: Gift Certificate - Exactly half height */}
          <div className="relative flex-1 w-full overflow-hidden">
            <Image
              src="/images/image11.jpeg" 
              alt="Grill background"
              fill
              className="object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-center p-8">
             
              
              {/* Lavender Contact Button */}
              <Link href="/gallery">
              
              <button className="bg-[#B5A9D4] hover:bg-[#a394c7] text-white px-7 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
                View Gallery
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Tall Single Image) */}
        <div className="flex-1 relative h-full overflow-hidden">
          <Image
            src="/images/image12.jpeg" 
            alt="Restaurant Atmosphere"
            fill
            className="object-cover"
          />
          
          {/* Pagination dots at bottom */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="w-1.5 h-1.5 rounded-full border border-white/60"></span>
            <span className="w-1.5 h-1.5 rounded-full border border-white/60"></span>
          </div>
        </div>

      </div>
    </section>
  );
}