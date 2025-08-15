'use client';

import React, { useState, useEffect } from 'react';
import styles from './HeroSlider.module.css';
import Image from 'next/image';
import AppointmentModal from '../AppointmentModal';

const HeroSlider = ({ title }: { title: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      src: '/slide1.jpg',
      alt: 'Smiling patient with dentist',
    },
    {
      src: '/slide2.jpg',
      alt: 'Dental clinic interior',
    },
    {
      src: '/slide3.jpg',
      alt: 'Dentist working with patient',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleBookAppointment = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.slidesContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentSlide ? styles.active : ''
              }`}
            >
              <div className={styles.imageLayer}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.image}
                  priority={index === 0}
                  onError={(e) => {
                    console.error(
                      `Error loading image: ${image.src}. Event:`,
                      e
                    );
                  }}
                />
              </div>

              <div className={styles.gradientOverlay}></div>

              <div className={styles.textContent}>
                <h1 className={styles.heading}>{title}</h1>
                <button
                  className={styles.ctaButton}
                  onClick={handleBookAppointment}
                >
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
            </div>
          ))}
        </div>

        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.activeDot : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default HeroSlider;
