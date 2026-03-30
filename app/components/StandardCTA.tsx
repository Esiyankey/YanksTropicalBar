"use client";
import React from "react";
import Link from "next/link";

const GoldenStandardCTA = ({
  title = "Experience the Golden Standard",
  subtitle = "Ready to bring a taste of Ghanaian heritage to your next event? Let us craft a refreshment experience your guests will never forget.",
  primaryButtonText = "Book Your Event",
  primaryButtonLink = "#",
  secondaryButtonText = "Explore Our Menu",
  secondaryButtonLink = "#",
  backgroundImage = "/images/setup1.jpg",
}) => {
  return (
    <section className="relative py-20 px-6 flex items-center justify-center text-center overflow-hidden">
      
      {/* 🔥 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* ✨ Glass/Frosted Overlay (THIS is the main effect) */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>

      {/* 💬 Content (clean, no glass) */}
      <div className="relative z-10 max-w-4xl w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
          {title}
        </h2>

        <p className="text-sm md:text-base text-gray-200 mb-10">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href={primaryButtonLink}>
            <button className="bg-white text-red-800 font-semibold py-3 px-8 rounded-md text-lg hover:bg-gray-100 transition">
              {primaryButtonText}
            </button>
          </Link>

          <Link href={secondaryButtonLink}>
            <button className="border border-white text-white font-semibold py-3 px-8 rounded-md text-lg hover:bg-white hover:text-red-800 transition">
              {secondaryButtonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GoldenStandardCTA;