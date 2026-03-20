


import { CookingPotIcon, DrillIcon, FlowerIcon } from 'lucide-react';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';

export default function AboutUs() {

    const preparationSteps = [
  {
    title: "Sun-Dried Hibiscus",
    description: "Sourced directly from northern farmers, our petals are sun-dried to lock in that deep flavor.",
    image: "/images/sobolo.jpg",
    icon: <FlowerIcon/>
  },
  {
    title: "Traditional Brewing",
    description: "Using large clay pots, we allow our asana to ferment naturally, developing a unique profile.",
    image: "/images/s2.jpg",
    icon: <DrillIcon/>
  },
  {
    title: "Signature Spice Blends",
    description: "Ginger, cloves, and grains of paradise are freshly crushed for every batch.",
    image: "/images/s4.jpg",
    icon: <CookingPotIcon/>
  }
];
  return (
    <div className="min-h-screen bg-white  text-gray-800 ">


      {/* Hero Section */}
      <HeroSection
      title="The Soul of the Calabash"
      description="Preserving the vibrant heritage of Ghanaian refreshments through authentic craftsmanship and premium hospitality."
      image="/images/setup1.jpg"
    />

      {/* Our Heritage */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1">
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] border border-[#d98c7a] text-[#b44125] px-4 py-1.5 rounded-full font-bold mb-8">
            Our Heritage
          </span>
          <h2 className="text-4xl md:text-5xl  text-gray-900 mb-8 leading-tight">From Humble Roots <br/>to Royal Tables</h2>
          <p className="text-[#b44125] font-semibold text-lg mb-6 italic">A journey that began in a family kitchen in Kumasi.</p>
          <div className="space-y-6 text-gray-600 leading-relaxed text-md">
            <p>Golden Calabash was born from a desire to bring the refreshing flavors of our childhood into the modern spotlight. What started as a small family recipe for the perfect Sobolo—balancing the tartness of hibiscus with the sharp warmth of ginger—has evolved into Accra’s premier cultural catering service.</p>
            <p>We believe every drink tells a story. The asana that marks a successful trade, the lamuche that cools a midday heat... we ensure these traditions never fade, but rather shine brighter than ever.</p>
          </div>
        </div>
        <div className="relative order-1 md:order-2 group">
          <div className="aspect-4/5 relative overflow-hidden rounded-2xl shadow-2xl">
            <Image 
              src="/images/s2.jpg" 
              alt="Cultural Heritage"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* WhatsApp Floating Button Overlay */}
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 bg-[#25D366]  rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform">
             <svg className="w-12 h-12 text-white fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.984-.365-1.739-.757-2.874-2.513-2.96-2.63-.086-.115-.693-.921-.693-1.756 0-.835.432-1.245.586-1.42.155-.174.337-.218.45-.218.112 0 .225.001.323.005.105.004.244-.04.381.285.144.343.493 1.203.536 1.29.043.086.072.187.015.302-.058.115-.086.187-.173.287-.086.1-.181.223-.258.295-.086.081-.176.17-.076.341.1.171.444.733.953 1.186.655.583 1.207.764 1.38.85.171.086.273.072.373-.043.1-.115.432-.504.547-.677.115-.173.23-.144.388-.086.158.058 1.006.475 1.179.561.171.087.287.129.331.201.044.072.044.417-.1.822z"/></svg>
          </div>
        </div>
      </section>

      {/* Proverb Quote */}
      <section className="bg-[#fdf8f6] py-10 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-6xl text-[#d98c7a]  block mb-4 opacity-50 italic">“</span>
          <p className="text-3xl md:text-4xl text-gray-700 leading-[1.4]   font-light">
            The calabash that brings water to the thirsty never breaks its silence; it only speaks through the refreshment it provides.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-[#b44125]"></div>
            <p className="text-xs tracking-[0.3em] text-[#7a2d1a] uppercase font-bold">Traditional Akan Proverb</p>
            <div className="h-px w-8 bg-[#b44125]"></div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl  text-gray-900 mb-6">The Art of Preparation</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          We honor the slow, intentional methods of our ancestors. No shortcuts, no artificial flavors—only the purest gifts from the Ghanaian soil.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {preparationSteps.map((step, index) => (
          <div 
            key={index} 
            className="group relative h-112.5 overflow-hidden rounded-2xl shadow-xl cursor-default"
          >
            {/* Background Image */}
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient Overlay (Always visible for readability) */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black" />
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-center">
      
      {/* Image Column */}
      <div className="relative group">
        <div className="aspect-square relative overflow-hidden rounded-3xl shadow-2xl">
          <Image 
            src="/images/setup4.jpg" 
            alt="Event setup with calabashes"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Subtle inner glow to match the warm lighting in the photo */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20"></div>
        </div>
        {/* Soft decorative shadow blob behind image */}
        <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-orange-200/40 blur-3xl rounded-full"></div>
      </div>

      {/* Text Column */}
      <div className="flex flex-col items-start">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#b44125] border border-[#d98c7a] px-4 py-1.5 rounded-full mb-8">
          Our Craft
        </span>
        
        <h2 className="text-4xl md:text-5xl  text-gray-900 mb-6 leading-tight">
          More Than Just Catering
        </h2>
        
        <p className="text-[#b44125] font-bold text-lg mb-8">
          Its a curated cultural experience.
        </p>
        
        <div className="space-y-6 text-gray-600 leading-relaxed text-md max-w-lg">
          <p>
            We dont just serve drinks; we set the stage. Our signature setups feature 
            hand-carved calabashes, kente-lined table runners, and live garnishing 
            stations that turn refreshment into a performance.
          </p>
          <p>
            Whether its a vibrant traditional engagement or a high-profile corporate 
            gala, we bring the warmth of Ghanaian hospitality to every interaction. 
            Our staff are trained not just in service, but in the stories behind every 
            item on our menu.
          </p>
        </div>
      </div>
      </div>
   
            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-[#d98c7a] text-white p-2 rounded-lg text-sm shadow-lg">
                  {step.icon}
                </span>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {step.title}
                </h3>
              </div>
              
              {/* Description - fades in on hover */}
              <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* CTA Footer Section */}
      <section className="bg-[#b44125] py-24 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl  text-white mb-8">Experience the Golden Standard</h2>
          <p className="text-orange-100 max-w-2xl mx-auto mb-12 text-lg font-light">
            Ready to bring a taste of Ghanaian heritage to your next event? Let us craft a refreshment experience your guests will never forget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="bg-white text-[#b44125] px-10 py-4 rounded font-bold shadow-xl hover:bg-orange-50 transition-colors">
              Book Your Event
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded font-bold hover:bg-white hover:text-[#b44125] transition-all">
              Explore Our Menu
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}