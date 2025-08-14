'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function GoToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 bg-primary p-3 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 z-50"
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 50 }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUp width={25} height={25} className="text-white" />
    </motion.button>
  );
}
