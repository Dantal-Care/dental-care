import Footer from '@/components/UI/footer/Footer';
import HeroSlider from '@/components/UI/HeroSlider/HeroSlider';
import Navbar from '@/components/UI/Navbar/Navbar';
import ServiceCategory from '@/components/UI/ServiceCategory';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.map((category) => ({
    category: category.slug,
  }));
}

interface Props {
  params: { category: string };
}

export default function ServiceCategoryPage({ params }: Props) {
  const categoryData = services.find((cat) => cat.slug === params.category);

  if (!categoryData) return notFound();

  return (
    <div>
      <Navbar />
      <HeroSlider title={categoryData.category} />
      <div className="flex flex-wrap justify-center gap-6 px-4 sm:px-6 md:px-12 my-12">
        {categoryData.items.map((item) => (
          <ServiceCategory
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
