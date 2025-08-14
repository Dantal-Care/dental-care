// src/app/service/layout.tsx
import GoToTop from '@/components/UI/GoToTop';
import Navbar from '@/components/UI/Navbar/Navbar';
import type { ReactNode } from 'react';

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <GoToTop />
    </>
  );
}
