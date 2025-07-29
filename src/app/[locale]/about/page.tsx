'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';

export default function About() {
  const t = useTranslations('About');
  const textParagraphs = t('text').split('\n\n');

  return (
    <div className={styles.container}>
      <div className={styles.aboutTextWrapper}>
        {textParagraphs.map((paragraph, index) => (
          <p key={index} className={styles.aboutTextParagraph}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className={styles.aboutImageWrapper}>
        <Image
          src="/assets/about_photo.png"
          alt="Maria Marta - Artist Portrait"
          width={150}
          height={200}
          className={styles.aboutImage}
          priority
        />
      </div>
    </div>
  );
}
