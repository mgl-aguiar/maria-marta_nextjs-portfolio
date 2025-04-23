'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import LanguageSelector from '../LanguageSelector';

import styles from './Header.module.css';

const Header = () => {
  const t = useTranslations('Header');

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image
          src="/logoipsum-329.svg"
          alt="Logo"
          width={50}
          height={50}
          className={styles.logo}
        />
      </div>

      <div className={styles.navWrapper}>
        <Link href="/about" className={styles.navLink}>
          {t('about')}
        </Link>
        <Link href="/contact" className={styles.navLink}>
          {t('contact')}
        </Link>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
