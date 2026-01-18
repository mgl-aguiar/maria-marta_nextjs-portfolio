'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Artwork.module.css';
import { Artwork as ArtworkData } from '@/src/types/Artwork';

interface ArtworkProps {
  artwork: ArtworkData;
}

const Artwork: React.FC<ArtworkProps> = ({ artwork }) => {
  // this is a temporary solution to display videos:
  if (artwork.media === 'video') {
    return (
      <div className={styles.videoWrapper}>
        <iframe
          src={artwork.imageUrl}
          title={artwork.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={styles.imageWrapper}>
      <Image
        src={artwork.imageUrl}
        alt={artwork.title}
        width={1200}
        height={1200}
        className={styles.image}
      />
    </div>
  );
};

export default Artwork;
