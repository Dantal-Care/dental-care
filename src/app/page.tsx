import StatisticsSection from "@/components/UI/StatisticsSection";
import TestimonialsSection from "@/components/UI/TestimonialsSection";
import ServiceSection from "@/components/UI/ServiceSection";
import AboutMe from "@/components/UI/Aboutme";
import Footer from "@/components/UI/footer/Footer";
import HeroSlider from "@/components/UI/HeroSlider/HeroSlider";
import Navbar from "@/components/UI/Navbar/Navbar";

export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSlider />
      <Navbar />
      <ServiceSection />
      <AboutMe />
      <StatisticsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
