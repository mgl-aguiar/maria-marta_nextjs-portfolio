'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ArtworkGrid.module.css';
import { Artwork } from '../../data/artworks';

interface ArtworkGridProps {
  artworks?: Artwork[];
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks = [] }) => {
  return (
    <div className={styles.grid}>
      {artworks.map((artwork) => (
        <Link
          href={`/artwork/${artwork.id}`}
          key={artwork.id}
          className={styles.gridItem}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={artwork.thumbnailUrl}
              alt={artwork.title}
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArtworkGrid;
