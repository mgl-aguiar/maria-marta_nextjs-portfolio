'use client';

import React from 'react';
import Link from 'next/link';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <Link href="/" className={styles.logoLink}>
        <span className={styles.logoText}>Maria Marta</span>
      </Link>
    </div>
  );
};

export default Logo;
