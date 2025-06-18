'use client';

import React from 'react';
import { Artwork } from '../../data/artworks';
import Thumbnail from './Thumbnails';
import styles from './ArtworkGrid.module.css';

interface ArtworkGridProps {
  artworks?: Artwork[];
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks = [] }) => {
  return (
    <div className={styles.grid}>
      {artworks.map((artwork) => (
        <Thumbnail key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
};

export default ArtworkGrid;
