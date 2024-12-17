'use client';

import React from 'react';
import { FooterWrapper } from './Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      © {currentYear} — Todos os direitos reservados
    </FooterWrapper>
  );
};

export default Footer;
