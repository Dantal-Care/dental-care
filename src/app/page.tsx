import HeroSlider from '@/components/UI/HeroSlider/HeroSlider';
import Navbar from '@/components/UI/Navbar/Navbar';
import StatisticsSection from '@/components/UI/StatisticsSection';
import TestimonialsSection from '@/components/UI/TestimonialsSection';

export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSlider />
      <Navbar />
      <StatisticsSection />
      <TestimonialsSection />
    </div>
  );
}
