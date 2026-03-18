import Image from "next/image";
import { ArrowRight, Instagram } from "lucide-react";

export default function GallerySection() {
  const photos = [
    { src: "/images/setup4.jpg", height: "h-72" },
    { src: "/images/setup1.jpg", height: "h-48" },
    { src: "/images/s2.jpg", height: "h-60" },
    { src: "/images/s4.jpg", height: "h-80" },
    { src: "/images/setup2.jpg", height: "h-52" },
    { src: "/images/s3.jpg", height: "h-64" },
  ];

  return (
    <section className="bg-[#FCFAF7] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Minimalist & Centered */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-orange-500"></span>
            <span className="text-orange-500 font-bold tracking-[0.2em] text-[10px] uppercase">
              Our Portfolio
            </span>
            <span className="h-px w-8 bg-orange-500"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A2E26] leading-tight">
            Moments from Yanks
          </h2>
        </div>

        {/* Masonry Layout: 2 columns on Mobile, 3 on Desktop */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div 
              key={i} 
              className={`relative break-inside-avoid rounded-2xl overflow-hidden group shadow-sm bg-white p-1.5 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className={`relative w-full ${photo.height} overflow-hidden rounded-xl`}>
                <Image
                  src={photo.src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                   <Instagram className="text-white w-5 h-5 opacity-80" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern "View More" Button Section */}
        <div className="mt-12 flex flex-col items-center">
          <button className="group relative flex items-center gap-6 pl-8 pr-2 py-2 bg-white rounded-full border border-gray-200 hover:border-orange-500 transition-all duration-300 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-700 group-hover:text-orange-600 transition-colors">
              Explore More
            </span>
            <div className="w-10 h-10 rounded-full bg-[#1A2E26] flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <ArrowRight size={18} className="text-white" />
            </div>
          </button>
          
          <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-tighter">
            Updated Weekly • @YanksTropicalBar
          </p>
        </div>
      </div>
    </section>
  );
}