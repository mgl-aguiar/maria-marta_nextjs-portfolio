'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Artwork.module.css';
import { Artwork as ArtworkData } from '../../data/artworks';

interface ArtworkProps {
  artwork: ArtworkData;
}

const Artwork: React.FC<ArtworkProps> = ({ artwork }) => {
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
