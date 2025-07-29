'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { getLocalizedPath } from '../../../lib/utils';
import styles from './Logo.module.css';

const Logo = () => {
  const params = useParams();
  const currentLocale = (params?.locale as string) || 'en';

  return (
    <div className={styles.logoWrapper}>
      <Link
        href={getLocalizedPath('/', currentLocale)}
        className={styles.logoLink}
      >
        <span className={styles.logoText}>Maria Marta</span>
      </Link>
    </div>
  );
};

export default Logo;
