import Footer from '@/components/UI/footer/Footer';
import HeroSlider from '@/components/UI/HeroSlider/HeroSlider';
import Navbar from '@/components/UI/Navbar/Navbar';
import ServiceCategory from '@/components/UI/ServiceCategory';

export const ServiceCategories = [
  {
    id: 1,
    imageUrl: '/service-category-pic01.png',
    title: 'Teeth cleaning and polishing',
    description: 'Get expert dental advice with a personalized consultation.',
  },
  {
    id: 2,
    imageUrl: '/service-category-pic01.png',
    title: 'Cavity treatment',
    description:
      'Restore your dental health with our advanced cavity treatment.',
  },
  {
    id: 3,
    imageUrl: '/service-category-pic01.png',
    title: 'Teeth whitening',
    description:
      'Achieve a brighter smile with our professional teeth whitening.',
  },
  {
    id: 4,
    imageUrl: '/service-category-pic01.png',
    title: 'Teeth whitening',
    description:
      'Achieve a brighter smile with our professional teeth whitening.',
  },
  {
    id: 5,
    imageUrl: '/service-category-pic01.png',
    title: 'Teeth whitening',
    description:
      'Achieve a brighter smile with our professional teeth whitening.',
  },
  {
    id: 6,
    imageUrl: '/service-category-pic01.png',
    title: 'Teeth whitening',
    description:
      'Achieve a brighter smile with our professional teeth whitening.',
  },
];

export default function ServiceCategoryPage({
  params,
}: {
  params: { service: string };
}) {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 my-24">
        {ServiceCategories.map((category) => (
          <ServiceCategory
            key={category.id}
            imageUrl={category.imageUrl}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
