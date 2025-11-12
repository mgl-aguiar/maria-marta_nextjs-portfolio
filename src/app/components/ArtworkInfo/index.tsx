'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { Artwork, Media } from '@/src/types/Artwork';
import { getMediaTranslationString } from '../../lib/utils';

import styles from './ArtworkInfo.module.css';

interface ArtworkInfoProps {
  artwork: Artwork;
}

const ArtworkInfo: React.FC<ArtworkInfoProps> = ({ artwork }) => {
  const t = useTranslations('Media');

  const mediaString = getMediaTranslationString(artwork.media as Media);

  return (
    <div className={styles.infoWrapper}>
      <h1 className={styles.title}>
        {artwork.title ? artwork.title : 'Untitled'}
      </h1>
      <p className={styles.details}>
        {artwork.description && artwork.description}
      </p>
      <p className={styles.details}>{artwork.media && `${t(mediaString)}`}</p>
      <p className={styles.details}>
        {artwork.location && `${artwork.location},`}{' '}
        {artwork.year && `${artwork.year}`}
      </p>
    </div>
  );
};

export default ArtworkInfo;
