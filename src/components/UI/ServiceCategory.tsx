import React from 'react';
import Image from 'next/image';

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
    <div className="relative w-[281.74px] h-[298.31px] rounded-[60px] overflow-hidden p-6 shadow-lg flex flex-col items-center justify-end gap-3">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-primary/90 z-10"></div>
      <div className="relative z-20 text-center text-white font-semibold text-3xl">
        {title}
      </div>
      <div className="relative z-20 text-center font-medium text-gray-800 text-lg">
        {description}
      </div>
    </div>
  );
}
