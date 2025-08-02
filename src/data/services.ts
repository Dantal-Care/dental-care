export interface ServiceItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export interface ServiceCategory {
  category: string;
  slug: string;
  items: ServiceItem[];
  categoryDescription?: string;
}

export const services: ServiceCategory[] = [
  {
    category: 'General & Preventive Care',
    slug: 'general-preventive-care',
    items: [
      {
        id: 1,
        imageUrl: '/service-category-pic01.png',
        title: 'Teeth cleaning and polishing',
        description:
          'Get expert dental advice with a personalized consultation.',
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
    ],
  },
];
