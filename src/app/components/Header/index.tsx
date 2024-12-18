'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import {
  HeaderWrapper,
  LogoWrapper,
  NavWrapper,
  NavLink,
  Logo,
} from './Header.styles';

const Header = () => {
  const t = useTranslations('Header');

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <NavLink href="/">
          <Logo src="/logoipsum-329.svg"></Logo>
        </NavLink>
      </LogoWrapper>

      <NavWrapper>
        <NavLink href="/about">{t('about')}</NavLink>
        <NavLink href="/contact">{t('contact')}</NavLink>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
