'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <Link href="/">
        <Image
          src="/assets/logoipsum-329.svg"
          alt="Logo"
          width={50}
          height={50}
          className={styles.logo}
        />
      </Link>
    </div>
  );
};

export default Logo;
