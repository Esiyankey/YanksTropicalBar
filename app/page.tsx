import HeroCarousel from "./components/HeroBanner";
import ServicesSection from "./components/Services";

import Testimonials from "./components/Testimonials";
import GallerySection from "./components/GallerySection";

import GoldenStandardCTA from "./components/StandardCTA";
import AboutSection from "./components/AboutSection";
import BookingSection from "./components/booking";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <BookingSection />
      <AboutSection />
      <ServicesSection />
      {/* <MenuSection />
      <PackagesSection /> */}
      <Testimonials />
      <GallerySection />
      <GoldenStandardCTA
        title="Ready to Bring Yanks Tropical Bar to Your Next Event?"
        subtitle="Join Dozens of Satisfied Clients Who've Experienced the Golden Standard in Refreshments. Contact Us Today to Start Planning Your Unforgettable Event!"
        primaryButtonText="Reserve Now"
        secondaryButtonText="Contact Us"
      />
    </>
  );
}
