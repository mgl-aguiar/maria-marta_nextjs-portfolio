'use client';

import React, { useState, useEffect } from 'react';
import styles from './TopButton.module.css';

const TopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // display top button when scrolling down 300px or more
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className={styles.topButton}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span className={styles.arrow}>↑</span>
        </button>
      )}
    </>
  );
};

export default TopButton;
