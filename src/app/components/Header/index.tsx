'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <Menu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </header>
  );
};

export default Header;
