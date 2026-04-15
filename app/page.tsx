// Yahan humne aapke banaye gaye saare components ko sahi path se import kiya hai
import HeroSection from "./components/home/HeroSection";
import TrustBar from "./components/home/TrustBar";
import ServicesSnapshot from "./components/home/ServicesSnapshot";
import HowItWorks from "./components/home/HowItWorks";
import StatsCounter from "./components/home/StatsCounter";
import TestimonialCarousel from "./components/home/TestimonialCarousel";
import Gallery from "./components/home/Gallary"; // <-- Yahan Gallery import kiya hai
import DonationBanner from "./components/home/DonationBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Har section ek ke baad ek render hoga */}
      <HeroSection />
      <TrustBar />
      <ServicesSnapshot />
      <HowItWorks />
      <StatsCounter />
      <TestimonialCarousel />
      
      {/* Yahan Gallery section add kiya hai */}
      <Gallery /> 
      
      <DonationBanner />
    </div>
  );
}