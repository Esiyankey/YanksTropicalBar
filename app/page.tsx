import HeroCarousel from "./components/HeroBanner";
import BookingSection from "./components/booking";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/Services";
import SignatureMenu from "./components/SignatureMenu";
import GallerySection from "./components/GallerySection";
import Testimonials from "./components/Testimonials";
import GoldenStandardCTA from "./components/StandardCTA";

export default function Home() {
  return (
    <main>
      {/* Attract */}
      <HeroCarousel />
      {/* Capture — quick enquiry bar lifted into the hero */}
      <BookingSection />
      {/* Explain */}
      <AboutSection />
      <ServicesSection />
      {/* Tempt: pinned horizontal menu run */}
      <SignatureMenu />
      {/* Prove — show the work, then the words */}
      <GallerySection />
      <Testimonials />
      {/* Close */}
      <GoldenStandardCTA
        title="Ready to Bring Yanks Tropical Bar to Your Next Event?"
        subtitle="Join dozens of satisfied clients who've experienced the golden standard in refreshments. Contact us today to start planning your unforgettable event."
        primaryButtonText="Reserve Now"
        primaryButtonLink="/#booking"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </main>
  );
}
