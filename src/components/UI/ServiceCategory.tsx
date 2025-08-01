import React from 'react';

interface ServiceCategoryProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function ServiceCategory({
  imageUrl,
  title,
  description,
}: ServiceCategoryProps) {
  return (
    <div
      className="w-full sm:w-[300px] h-[320px] rounded-[40px] relative overflow-hidden 
             bg-cover bg-center bg-no-repeat 
             p-6 shadow-lg flex flex-col items-center justify-end gap-3"
      style={{
        backgroundImage: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 180, 216, 1)),
      url('${imageUrl}')
    `,
      }}
    >
      <div className="font-bold text-white text-xl sm:text-2xl text-center">
        {title}
      </div>
      <div className="text-white text-sm sm:text-base font-medium text-center">
        {description}
      </div>
    </div>
  );
}
