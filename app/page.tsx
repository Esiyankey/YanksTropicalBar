import HeroCarousel from "./components/HeroBanner";
import ServicesSection from "./components/Services";

import Testimonials from "./components/Testimonials";
import GallerySection from "./components/GallerySection";

import GoldenStandardCTA from "./components/StandardCTA";
import AboutSection from "./components/AboutSection";
import BookingSection from "./components/booking";
import React from "react";

export default function Home() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(HeroCarousel),
    React.createElement(BookingSection),
    React.createElement(AboutSection),
    React.createElement(ServicesSection),
    React.createElement(Testimonials),
    React.createElement(GallerySection),
    React.createElement(GoldenStandardCTA, {
      title: "Ready to Bring Yanks Tropical Bar to Your Next Event?",
      subtitle:
        "Join Dozens of Satisfied Clients Who've Experienced the Golden Standard in Refreshments. Contact Us Today to Start Planning Your Unforgettable Event!",
      primaryButtonText: "Reserve Now",
      secondaryButtonText: "Contact Us",
    }),
  );
}
