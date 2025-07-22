'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import HamburgerButton from '../../ui/HamburgerButton';
import LanguageSelector from '../LanguageSelector';

import styles from './Menu.module.css';

interface MenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onToggle }) => {
  const t = useTranslations('Header');

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={onToggle} />
      <nav className={`${styles.navWrapper} ${isOpen ? styles.active : ''}`}>
        <Link href="/about" className={styles.navLink}>
          {t('about')}
        </Link>

        <Link href="/contact" className={styles.navLink}>
          {t('contact')}
        </Link>
        <a
          href="https://instagram.com/maria_marta.studio"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navLink}
        >
          Instagram
        </a>
        <LanguageSelector />
      </nav>
    </>
  );
};

export default Menu;
