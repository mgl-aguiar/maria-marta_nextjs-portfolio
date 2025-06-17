'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import HamburgerButton from '../../ui/HamburgerButton';
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
        <Link href="/about" className={styles.navLink} onClick={onToggle}>
          {t('about')}
        </Link>
        <Link href="/contact" className={styles.navLink} onClick={onToggle}>
          {t('contact')}
        </Link>
      </nav>
    </>
  );
};

export default Menu;
