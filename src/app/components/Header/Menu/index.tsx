'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

import HamburgerButton from '../../ui/HamburgerButton';
import LanguageSelector from '../LanguageSelector';
import { getLocalizedPath } from '../../../lib/utils';

import styles from './Menu.module.css';

interface MenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onToggle }) => {
  const t = useTranslations('Header');
  const params = useParams();
  const currentLocale = (params?.locale as string) || 'en';

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={onToggle} />
      <nav className={`${styles.navWrapper} ${isOpen ? styles.active : ''}`}>
        <Link
          href={getLocalizedPath('/about', currentLocale)}
          className={styles.navLink}
        >
          {t('about')}
        </Link>

        {/* TODO: setup contact page */}
        {/* <Link href={getLocalizedPath('/contact', currentLocale)} className={styles.navLink}>
          {t('contact')}
        </Link> */}

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
