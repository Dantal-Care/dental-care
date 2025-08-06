'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '@/components/UI/Navbar/Navbar';
import HeroSlider from '@/components/UI/HeroSlider/HeroSlider';
import GoToTop from '@/components/UI/GoToTop';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <HeroSlider title="Get to know about your dentist" />
      <section className={styles.profileSection}>
        <div className={styles.profileCard}>
          <div className={styles.doctorImage}>
            <Image
              src="/doctor.jpg"
              alt="Dr. Raymond"
              width={180}
              height={180}
              className={styles.docImage}
            />
          </div>
          <div className={styles.doctorInfo}>
            <h2>Dr. Raymond</h2>
            <p>
              Dr. Nishanta Nallaperuma holds a BDS degree from the University of
              Peradeniya and a DCHP from the University of Colombo. With over 10
              years of experience, he has built a strong reputation for
              delivering exceptional dental care. Dr. Nishanta is committed to
              providing compassionate and high-quality treatment, ensuring every
              patient leaves with a confident smile.
            </p>
            <ul>
              <li>• BDS (Paradenya)</li>
              <li>• DCHP (UoC)</li>
              <li>• 10 years of experience</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.gallerySection}>
        <h2>Smile Gallery</h2>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItem}></div>
          <div className={styles.galleryItem}></div>
          <div className={styles.galleryItem}></div>
          <div className={styles.galleryItem}></div>
        </div>
      </section>
      <GoToTop />
    </div>
  );
}
