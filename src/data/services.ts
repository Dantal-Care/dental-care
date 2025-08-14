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
        title: 'Consultation',
        description:
          'Get expert dental advice with a personalized consultation.',
      },
      {
        id: 2,
        imageUrl: '/service-category-pic01.png',
        title: 'Teeth Cleaning and Polishing',
        description:
          'Professional teeth cleaning and polishing to maintain optimal oral hygiene.',
      },
      {
        id: 3,
        imageUrl: '/service-category-pic01.png',
        title: 'Dental Restoration',
        description: 'Restore damaged teeth with fillings, inlays, and onlays.',
      },
    ],
  },
  {
    category: 'Cosmetic & Orthodontic Dentistry',
    slug: 'cosmetic-dentistry',
    items: [
      {
        id: 4,
        imageUrl: '/service-category-pic01.png',
        title: 'Teeth Whitening',
        description:
          'Professional teeth whitening treatments for a brighter, more confident smile.',
      },
      {
        id: 5,
        imageUrl: '/service-category-pic01.png',
        title: 'Correction of Malocclusion',
        description:
          'Correction of malocclusion with braces, aligners, and other orthodontic treatments.',
      },
      {
        id: 6,
        imageUrl: '/service-category-pic01.png',
        title: 'Smile Designing',
        description:
          'Comprehensive smile makeovers combining multiple treatments for your perfect smile.',
      },
    ],
  },
  {
    category: 'Restorative Dentistry',
    slug: 'restorative-dentistry',
    items: [
      {
        id: 7,
        imageUrl: '/service-category-pic01.png',
        title: 'Dental Crowns and Bridges',
        description:
          'Durable dental crowns and bridges to restore strength and appearance of damaged teeth.',
      },
      {
        id: 8,
        imageUrl: '/service-category-pic01.png',
        title: 'Dental Implant',
        description:
          'Permanent tooth replacement solution with titanium implants for natural look and feel.',
      },
      {
        id: 9,
        imageUrl: '/service-category-pic01.png',
        title: 'Dentures',
        description:
          'Custom-fitted partial and complete dentures to restore your smile.',
      },
    ],
  },
  {
    category: 'Oral Surgery',
    slug: 'oral-surgery',
    items: [
      {
        id: 10,
        imageUrl: '/service-category-pic01.png',
        title: 'Dental Extractions',
        description:
          'Safe and painless tooth removal procedures with advanced techniques.',
      },
      {
        id: 11,
        imageUrl: '/service-category-pic01.png',
        title: 'Dental and Minor Oral Surgeries',
        description:
          'Dental and minor oral surgeries performed by experienced specialists.',
      },
    ],
  },
  {
    category: 'Pediatric Dentistry',
    slug: 'pediatric-dentistry',
    items: [
      {
        id: 12,
        imageUrl: '/service-category-pic01.png',
        title: 'Child Dental Treatments',
        description:
          'Specialized dental care for children with gentle techniques and child-friendly approach.',
      },
    ],
  },
];
