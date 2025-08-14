import HeroSlider from '@/components/UI/HeroSlider/HeroSlider';
import ServiceCategory from '@/components/UI/ServiceCategory';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.map((category) => ({
    category: category.slug,
  }));
}

interface PageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ServiceCategoryPage({
  params,
  searchParams,
}: PageProps) {
  const { category } = await params;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const query = searchParams ? await searchParams : {};

  const categoryData = services.find((cat) => cat.slug === category);
  if (!categoryData) return notFound();

  return (
    <div>
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
    </div>
  );
}
