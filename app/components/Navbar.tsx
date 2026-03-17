"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-t-2 border-slate-900 bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/yanks_tropical_logo.png"
              alt="Yanks Tropical Bar"
              width={80}
              height={80}
              className="h-16 w-auto"
              />
              Yanks Tropical Bar
              </Link>

          <div className="hidden md:flex gap-10 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-[#b44125] transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#b44125] border-b-2 border-[#b44125] pb-1"
            >
              About
            </Link>
            <Link href="/services" className="hover:text-[#b44125] transition-colors">
              Services
            </Link>
            <Link href="/menu" className="hover:text-[#b44125] transition-colors">
              Menu
            </Link>
            <Link href="/gallery" className="hover:text-[#b44125] transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-[#b44125] transition-colors">
              Contact
            </Link>
          </div>

          <button className="bg-[#b44125] hover:bg-[#8e331d] text-white px-7 py-2.5 rounded shadow-lg transition-all text-sm font-bold">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
