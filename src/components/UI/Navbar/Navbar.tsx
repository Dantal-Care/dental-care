'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { FiSend, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoCircle}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={20}
            height={20}
            priority
            className={styles.logoImage}
          />
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      <div
        className={`${styles.navLeft} ${
          isMobileMenuOpen ? styles.navMobileOpen : ''
        }`}
      >
        <nav className={styles.navLinks}>
          <Link
            href="/"
            className={pathname === '/' ? styles.activeLink : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === '/about' ? styles.activeLink : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Me
          </Link>
          <Link
            href="/services"
            className={pathname === '/services' ? styles.activeLink : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
        </nav>
        <Link
          href="/contact"
          className={styles.contactBtn}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
          <FiSend className={styles.icon} size={18} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
