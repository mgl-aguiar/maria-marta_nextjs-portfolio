'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './template.module.css';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
