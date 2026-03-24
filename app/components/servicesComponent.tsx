import Image from 'next/image';

interface RestaurantFeatureProps {
  image?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function ServicesComponent({
  image = "/images/setup1.jpg",
  title = "TIME-HONORED FLAVORS. CONTEMPORARY TWISTS",
  description = "Our menu is a celebration of classic recipes, thoughtfully reimagined to embrace the exciting palette of modern cuisine. Our talented chefs infuse their creations with a touch of innovation while preserving the authenticity and essence of timeless flavors.",
  buttonText = "VIEW OUR MENU",
  onButtonClick,
}: RestaurantFeatureProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className=" pr-4 sm:pr-6 lg:pr-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          {/* Image Section */}
          <div className="relative w-[650px] h-[550px]  overflow-hidden ">
            <Image
              src={image}
              alt="Restaurant interior"
              fill
              className="object-cover"
             
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col max-w-2xl justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-700 ">
              {title}
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
            
            <div>
              <button
                onClick={onButtonClick}
                className="px-8 py-3 border-2 border-amber-700 text-amber-700 font-semibold uppercase tracking-widest text-sm hover:bg-amber-50 transition-colors duration-300"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
