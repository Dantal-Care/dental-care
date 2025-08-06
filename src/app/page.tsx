import Navbar from '@/components/Navbar/Navbar';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <HeroSlider />
      <Navbar />
    </main>
  );
}

