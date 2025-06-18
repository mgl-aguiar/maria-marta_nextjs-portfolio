'use client';

import React from 'react';
import styles from './ArtworkInfo.module.css';
import { Artwork } from '../../data/artworks';
import { useTranslations } from 'next-intl';

interface ArtworkInfoProps {
  artwork: Artwork;
}

const ArtworkInfo: React.FC<ArtworkInfoProps> = ({ artwork }) => {
  const t = useTranslations('Artwork');

  const details = {
    dimensions: '100 x 150 cm',
    media: 'Analog photography',
    year: '2023',
    series: 'Portraits',
    location: 'Rio de Janeiro',
  };

  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{artwork.title}</h1>
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>{t('dimensions')}</span>
          <span className={styles.detailValue}>{details.dimensions}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>{t('media')}</span>
          <span className={styles.detailValue}>{details.media}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>{t('year')}</span>
          <span className={styles.detailValue}>{details.year}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>{t('series')}</span>
          <span className={styles.detailValue}>{details.series}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>{t('location')}</span>
          <span className={styles.detailValue}>{details.location}</span>
        </div>
      </div>
    </div>
  );
};

export default ArtworkInfo;
