import Image from "next/image";
import HeroSection from "../components/HeroSection";
import GoldenStandardCTA from "../components/StandardCTA";

const galleryImages = [
  { src: "/images/setup1.jpg", alt: "Dining experience", aspect: "aspect-[3/4]" },
  { src: "/images/image2.jpeg", alt: "Fresh salad", aspect: "aspect-square" },
  { src: "/images/image3.jpeg", alt: "Restaurant interior", aspect: "aspect-[4/5]" },
  { src: "/images/image4.jpeg", alt: "Chef at work", aspect: "aspect-[3/4]" },
  { src: "/images/image5.jpeg", alt: "Spicy dish", aspect: "aspect-square" },
  { src: "/images/image6.jpeg", alt: "Grill on fire", aspect: "aspect-[4/5]" },
  { src: "/images/image7.jpeg", alt: "Kitchen prep", aspect: "aspect-[4/5]" },
  { src: "/images/image8.jpeg", alt: "Long dining table", aspect: "aspect-[2/3]" },
  { src: "/images/image9.jpeg", alt: "Meat close up", aspect: "aspect-square" },
  { src: "/images/image10.jpeg", alt: "Chef smiling", aspect: "aspect-[3/4]" },
  { src: "/images/image11.jpeg", alt: "Buffet spread", aspect: "aspect-video" },
  { src: "/images/image12.jpeg", alt: "Gourmet salad", aspect: "aspect-square" },
  { src: "/images/image3.jpeg", alt: "Gourmet salad", aspect: "aspect-square" },

];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        title="Our Moments" 
        description="A visual journey through our kitchen, our events, and the vibrant flavors we share."
        image="/images/setup1.jpg"
      />

      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          
          {/* MASONRY GRID USING TAILWIND COLUMNS */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative break-inside-avoid overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
              >
                {/* Image Wrapper with Dynamic Aspect Ratio */}
                <div className={`relative w-full ${image.aspect}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-medium tracking-wide text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <GoldenStandardCTA
        title="Experience the Tropical Standard"
        description="From our kitchen to your celebration, we bring the golden standard of catering and mixology to every event. Let's make your next gathering unforgettable."
        buttonText="Book Your Event"
        buttonLink="/contact"
        
      />
   
    </div>
  );
}