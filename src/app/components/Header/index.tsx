'use client';

import React from 'react';
import {
  HeaderWrapper,
  LogoWrapper,
  NavWrapper,
  NavLink,
  Logo,
} from './Header.styles';

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper>
      <NavLink href="/">
        <Logo src="/logoipsum-329.svg"></Logo>
      </NavLink>
    </LogoWrapper>

    <NavWrapper>
      <NavLink href="/about">about</NavLink>
      <NavLink href="/contact">contact</NavLink>
    </NavWrapper>
  </HeaderWrapper>
);

export default Header;
