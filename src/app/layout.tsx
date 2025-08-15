import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/UI/footer/Footer';

export const metadata: Metadata = {
  title: 'Dental Care Clinic Mathara',
  description: 'Your one-stop solution for dental care in Mathara',
  keywords: ['', '', '', ''],
  openGraph: {
    title: 'Dental Care',
    description: '',
    url: '',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`antialiased`}>
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
