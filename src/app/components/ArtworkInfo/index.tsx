'use client';

import React from 'react';
import styles from './ArtworkInfo.module.css';
import { Artwork } from '@/src/types/Artwork';
import { useTranslations } from 'next-intl';

interface ArtworkInfoProps {
  artwork: Artwork;
}

const ArtworkInfo: React.FC<ArtworkInfoProps> = ({ artwork }) => {
  const t = useTranslations('Artwork');

  return (
    <div className={styles.info}>
      <h1 className={styles.title}>
        {artwork.title ? artwork.title : 'Untitled'}
      </h1>
      <div className={styles.details}>
        {artwork.dimensions && (
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>{t('dimensions')}</span>
            <span className={styles.detailValue}>{artwork.dimensions}</span>
          </div>
        )}
        {artwork.media && (
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>{t('media')}</span>
            <span className={styles.detailValue}>{artwork.media}</span>
          </div>
        )}
        {artwork.year && (
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>{t('year')}</span>
            <span className={styles.detailValue}>{artwork.year}</span>
          </div>
        )}
        {artwork.series && (
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>{t('series')}</span>
            <span className={styles.detailValue}>{artwork.series}</span>
          </div>
        )}
        {artwork.location && (
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>{t('location')}</span>
            <span className={styles.detailValue}>{artwork.location}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtworkInfo;
