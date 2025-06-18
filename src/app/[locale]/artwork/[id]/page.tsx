'use client';

import React from 'react';
import Image from 'next/image';
import { artworks } from '../../../data/artworks';
import styles from './page.module.css';

interface ArtworkPageProps {
  params: {
    id: string;
    locale: string;
  };
}

const ArtworkPage: React.FC<ArtworkPageProps> = ({ params }) => {
  const artwork = artworks.find((art) => art.id === params.id);

  if (!artwork) {
    return <div>Artwork not found</div>;
  }

  // Placeholder details - in a real app, these would come from your data source
  const details = {
    dimensions: '100 x 150 cm',
    media: 'Analog photography',
    year: '2023',
    series: 'Portraits',
    location: 'Rio de Janeiro',
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          width={1200}
          height={1200}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{artwork.title}</h1>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Dimensions</span>
            <span className={styles.detailValue}>{details.dimensions}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Media</span>
            <span className={styles.detailValue}>{details.media}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Year</span>
            <span className={styles.detailValue}>{details.year}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Series</span>
            <span className={styles.detailValue}>{details.series}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Location</span>
            <span className={styles.detailValue}>{details.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkPage;
