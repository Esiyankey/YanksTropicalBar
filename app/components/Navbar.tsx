"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, Instagram, TwitterIcon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`text-white bg-transparent absolute top-0 left-0 w-full z-50 ${isScrolled ? "bg-white shadow-lg fixed w-full text-black" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center  gap-3">
            <Image
              src="/images/yanks_tropical_logo.png"
              alt="Yanks Tropical Bar"
              width={180}
              height={180}
              className="h-24 w-auto"
            />
            <span className={isScrolled ? "text-gray-500" : "text-white"}>Yanks Tropical Bar </span>
          </Link>

          <div className="flex items-center gap-6">
            {/* DESKTOP MENU (UNCHANGED) */}
            <div className={`${isScrolled ? " text-gray-500 border-r-gray-500" : ""} hidden border-r-2 border-r-gray-50 font-meduim md:flex items-center gap-10 text-lg text-gray-50`}>
              <Link href="/" className="text-[#f75128] transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#b44125] transition-colors">
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-[#b44125] transition-colors"
              >
                Services
              </Link>
              <Link
                href="/menu"
                className="hover:text-[#b44125] transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/gallery"
                className="hover:text-[#b44125] transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#b44125] pr-2 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* SOCIALS (UNCHANGED for desktop) */}
            <div className={`${isScrolled ? "text-gray-500" : "text-gray-50"} hidden md:flex items-center gap-1.5 text-gray-50`}>
              <FacebookIcon
                className=" hover:text-[#b44125]"
                size={16}
              />
              <Instagram
                className=" hover:text-[#b44125]"
                size={16}
              />
              <TwitterIcon
                className=" hover:text-[#b44125]"
                size={16}
              />
            </div>

            {/* MOBILE MENU BUTTON (NEW) */}
            <button onClick={() => setOpen(!open)} className={`md:hidden mr-2 ${isScrolled ? "text-gray-500" : "text-gray-50"}`}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN (NEW) */}
      <div
        className={`md:hidden absolute  top-full left-0 w-full bg-black/90 backdrop-blur-md transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/menu" onClick={() => setOpen(false)}>
            Menu
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          {/* Socials for mobile */}
          <div className="flex gap-4 pt-4 border-t border-gray-600">
            <FacebookIcon />
            <Instagram />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
