import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/UI/footer/Footer';

export const metadata: Metadata = {
  title: 'Dental Care Clinic Matara',
  description:
    'Professional dental care in Matara. Offering teeth cleaning, whitening, fillings, braces, and preventive care for all ages.',
  keywords: [
    'dental care Matara',
    'dentist Matara',
    'teeth cleaning Matara',
    'dental clinic Matara',
  ],
  openGraph: {
    title: 'Dental Care Clinic Matara',
    description:
      'Visit our clinic in Matara for professional dental services including check-ups, teeth cleaning, whitening, braces, and more.',
    url: 'https://dental-care-mathara.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://dental-care-mathara.vercel.app/og-image.jpg', // replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'Dental Care Clinic Matara',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
