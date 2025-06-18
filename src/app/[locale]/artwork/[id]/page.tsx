'use client';

import React from 'react';
import { artworks } from '../../../data/artworks';
import Artwork from '../../../components/Artwork';
import ArtworkInfo from '../../../components/ArtworkInfo';
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

  return (
    <div className={styles.container}>
      <Artwork artwork={artwork} />
      <ArtworkInfo artwork={artwork} />
    </div>
  );
};

export default ArtworkPage;
