'use client';

import React from 'react';
import {
  HeaderWrapper,
  LogoWrapper,
  NavigationWrapper,
  NavigationItem,
} from './Header.styles';

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper>Logo</LogoWrapper>
    <NavigationWrapper>
      <NavigationItem>about</NavigationItem>
      <NavigationItem>contact</NavigationItem>
    </NavigationWrapper>
  </HeaderWrapper>
);

export default Header;
