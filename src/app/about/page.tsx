'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import styles from './page.module.css';


export default function AboutPage() {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.heroSection}>
        <Image
          src="/about.jpg"
          alt="Dental Clinic Background"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.overlay}></div>
        <div className={styles.heroText}>
          <h1>GET TO KNOW<br />ABOUT YOUR DENTIST</h1> <br></br>
          <button className={styles.ctaButton}>
                Book an appointment 
                <Image
                          src="/contact.png"
                          alt="Send Icon"
                          width={30}
                          height={25}
                          className={styles.icon}
                        />
              </button>
        </div>

        {/* Transparent Square with Gradient */}
            <div className={styles.gradientOverlay}></div>

        <Navbar />
      </div>

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
              Dr. Nishanta Nallaperuma holds a BDS degree from the University of Peradeniya and a DCHP from the University of Colombo. With over 10 years of experience, he has built a strong reputation for delivering exceptional dental care. Dr. Nishanta is committed to providing compassionate and high-quality treatment, ensuring every patient leaves with a confident smile.
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
    </main>
  );
}