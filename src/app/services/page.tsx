import Navbar from "@/components/UI/Navbar/Navbar";
import Footer from "@/components/UI/footer/Footer";
import HeroSlider from "@/components/UI/HeroSlider/HeroSlider";
import Button from "@/components/UI/buttons/ServiceButton";
import { services, ServiceCategory } from "@/data/services";


interface ServiceCategoryCardProps {
  category: ServiceCategory;
}

function ServiceCategoryCard({ category }: ServiceCategoryCardProps) {
  return (
	<div className="bg-white border-2 border-primary/90 rounded-3xl shadow-md p-8 w-80 h-80 hover:shadow-lg transition-shadow flex flex-col">
	  <h2 className="text-xl font-bold text-primary mb-6 text-center leading-tight">{category.category}</h2>
	  <ul className="text-gray-700 mb-6 flex-grow space-y-2">
		{category.items.map((item) => (
		  <li key={item.id} className="flex items-start">
			<span className="text-gray-600 mr-2">•</span>
			<span className="text-sm">{item.title}</span>
		  </li>
		))}
	  </ul>
	  <Button href={`/services/${category.slug}`} className="mt-auto">
		Explore more
	  </Button>
	</div>
  );
}
export default function ServicesPage() {
	return (
		<div>
			<Navbar />
			<HeroSlider title="Our Services" />
			<div className="px-4 sm:px-6 md:px-12 my-12 max-w-7xl mx-auto">
				<h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
					Comprehensive services for your smile
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
					{services.map((category) => (
						<ServiceCategoryCard
							key={category.slug}
							category={category}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}