'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { FooterWrapper } from './Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('Footer');

  return <FooterWrapper>{`© ${currentYear} — ${t('rights')}`}</FooterWrapper>;
};

export default Footer;
