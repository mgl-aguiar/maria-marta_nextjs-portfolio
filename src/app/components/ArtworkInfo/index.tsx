'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { Artwork } from '@/src/types/Artwork';
import { getMediaTranslationString } from '../../lib/utils';

import styles from './ArtworkInfo.module.css';

interface ArtworkInfoProps {
  artwork: Artwork;
}

const ArtworkInfo: React.FC<ArtworkInfoProps> = ({ artwork }) => {
  const t = useTranslations('Media');

  const mediaString = artwork.media
    ? getMediaTranslationString(artwork.media)
    : null;

  return (
    <div className={styles.infoWrapper}>
      <h1 className={styles.title}>
        {artwork.title ? artwork.title : 'Untitled'}
      </h1>
      <p className={styles.details}>
        {artwork.description && artwork.description}
      </p>
      <p className={styles.details}>{mediaString && t(mediaString)}</p>
      <p className={styles.details}>
        {artwork.location && `${artwork.location},`}{' '}
        {artwork.year && `${artwork.year}`}
      </p>
    </div>
  );
};

export default ArtworkInfo;
