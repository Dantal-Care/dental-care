import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/UI/footer/Footer';

export const metadata: Metadata = {
  title: 'Dental Care Clinic Mathara',
  description: 'Your one-stop solution for dental care in Mathara',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
