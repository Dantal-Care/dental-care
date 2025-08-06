import StatisticsSection from '@/components/UI/StatisticsSection';
import TestimonialsSection from '@/components/UI/TestimonialsSection';
import ServiceSection from '@/components/UI/ServiceSection';
import AboutMe from '@/components/UI/Aboutme';
import HeroSlider from '@/components/UI/HeroSlider/HeroSlider';
import Navbar from '@/components/UI/Navbar/Navbar';
// import GoogleMap from '@/components/UI/GoogleMaps/GoogleMap';
import LocationSection from '@/components/UI/LocationSection';
import GoToTop from '@/components/UI/GoToTop';

export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSlider title="WE CARE ABOUT YOUR SMILE" />
      <Navbar />
      <ServiceSection />
      <AboutMe />
      <StatisticsSection />
      <TestimonialsSection />
      {/* <GoogleMap/> */}
      <LocationSection />
      <GoToTop />
    </div>
  );
}
