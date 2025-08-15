'use client';
import { useEffect, useState } from 'react';
import Button from './buttons/ServiceButton';

export default function ServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(services.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerPage) % services.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + services.length) % services.length
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex * itemsPerPage);
  };

  const getCurrentServices = () => {
    return services.slice(currentIndex, currentIndex + itemsPerPage);
  };

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 font-medium text-black text-center">
          Our Main Services
        </h2>

        {/* Service Cards Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[270px] ">
            {getCurrentServices().map((service, index) => (
              <div
                key={currentIndex + index}
                className="bg-white rounded-4xl px-8 py-8 w-90 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-primary mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous services"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next services"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* View Services Button */}
        <div className="flex justify-center mt-12">
          <Button href="/services" size="lg">
            View Services
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / itemsPerPage) === index
                  ? 'bg-primary'
                  : 'bg-gray-300 hover:bg-secondary'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
