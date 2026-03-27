// components/GoldenStandardCTA.jsx
import React from "react";
import Link from "next/link"; // Next.js Link component

const GoldenStandardCTA = ({
  title = "Experience the Golden Standard",
  subtitle = "Ready to bring a taste of Ghanaian heritage to your next event? Let us craft a refreshment experience your guests will never forget.",
  primaryButtonText = "Book Your Event",
  primaryButtonLink = "#",          // default link
  secondaryButtonText = "Explore Our Menu",
  secondaryButtonLink = "#",        // default link
  backgroundColor = "bg-red-800",
  textColor = "text-white",
}) => {
  return (
    <section className={`${backgroundColor} ${textColor} py-16 px-8 text-center`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-sm max-w-3xl mx-auto md:text-md mb-10">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href={primaryButtonLink}>
            <button className="bg-white text-red-800 font-semibold py-2 px-6 rounded-sm text-lg hover:bg-gray-100 transition">
              {primaryButtonText}
            </button>
          </Link>

          <Link href={secondaryButtonLink}>
            <button className="border-2 border-white font-semibold py-2 px-6 rounded-sm text-lg hover:bg-white hover:text-red-800 transition">
              {secondaryButtonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GoldenStandardCTA;