import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroBanner";
import ServicesSection from "./components/Services";
import MenuSection from "./components/menuSection";
import PackagesSection from "./components/PackagesSection";
import Testimonials from "./components/Testimonials";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
import GoldenStandardCTA from "./components/StandardCTA";

export default function Home() {
  return (
    <>
    
      <HeroCarousel />
      <ServicesSection />
      <MenuSection />
      <PackagesSection />
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
