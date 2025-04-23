'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

const Footer = () => {
  const t = useTranslations('Footer');

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>{`© ${currentYear} — ${t('rights')}`}</p>
    </footer>
  );
};

export default Footer;
