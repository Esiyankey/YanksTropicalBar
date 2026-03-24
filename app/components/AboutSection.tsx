import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
      {/* Visual Side: Optimized Images */}
      <div className="relative w-full lg:w-1/2 flex justify-start">
        <div className="relative w-4/5 aspect-3/4  rounded-md shadow-lg">
          <Image
            src="/images/setup1.jpg"
            alt="Wine pouring"
            fill
            className="object-cover"
          />

          {/* WhatsApp Button on RIGHT BORDER */}
          <Link
            href="https://wa.me/233544620083"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute top-24 right-0 translate-x-1/2 -translate-y-1/2 z-40 bg-[#25D366] rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform">
              <svg
                className="w-12 h-12 text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.984-.365-1.739-.757-2.874-2.513-2.96-2.63-.086-.115-.693-.921-.693-1.756 0-.835.432-1.245.586-1.42.155-.174.337-.218.45-.218.112 0 .225.001.323.005.105.004.244-.04.381.285.144.343.493 1.203.536 1.29.043.086.072.187.015.302-.058.115-.086.187-.173.287-.086.1-.181.223-.258.295-.086.081-.176.17-.076.341.1.171.444.733.953 1.186.655.583 1.207.764 1.38.85.171.086.273.072.373-.043.1-.115.432-.504.547-.677.115-.173.23-.144.388-.086.158.058 1.006.475 1.179.561.171.087.287.129.331.201.044.072.044.417-.1.822z" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Overlapping Image */}
        <div className="absolute -bottom-10 -right-4 w-4/5 aspect-square rounded-sm shadow-2xl overflow-hidden">
          <Image
            src="/images/image11.jpeg"
            alt="Dining table"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2">
        <span className="bg-[#ffa132] rounded-full text-white px-3 py-1 text-sm font-bold uppercase tracking-tighter mb-6 inline-block">
          About Us
        </span>

        <h2
          className={`${dancingScript.className} text-5xl md:text-6xl text-slate-900 mb-6 leading-tight`}
        >
          Yanks Tropical Bar <br /> Drinks & Catering Services
        </h2>

        <p className="text-gray-500 text-lg mb-8 max-w-lg">
          We bring refreshing local drinks, delicious finger foods, and
          beautiful setups to make your events unforgettable. Perfect for
          weddings, parties, and special occasions.
        </p>

        <h3 className="text-2xl font-bold mb-4">Our Services</h3>

        <ul className="space-y-4 mb-10">
          {[
            "Local Bar Setup",
            "Fruit Juice Setup",
            "Finger Foods and More",
            "Available for Travel and All Ceremonies",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <span className="text-[#ffa132] text-xl">✓</span> {item}
            </li>
          ))}
        </ul>

        <Link href="/about">
          <button className="bg-[#ffa132] hover:bg-[#ff8c1a] text-white px-10 py-5 font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
            Read More <span>→</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
