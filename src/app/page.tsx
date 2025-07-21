import StatisticsSection from "@/components/UI/StatisticsSection";
import TestimonialsSection from "@/components/UI/TestimonialsSection";
import ServiceSection from "@/components/UI/ServiceSection";
import AboutMe from "@/components/UI/Aboutme";
export default function Home() {
  return (
    <div className="font-poppins ">
      <ServiceSection />
      <AboutMe />
      <StatisticsSection />
      <TestimonialsSection />
    </div>
  );
}
