'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { getLocalizedPath } from '../../../lib/utils';
import styles from '../ArtworkGrid.module.css';
import { Artwork } from '@/src/types/Artwork';

interface ThumbnailProps {
  artwork: Artwork;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ artwork }) => {
  const params = useParams();
  const currentLocale = (params?.locale as string) || 'en';

  return (
    <Link
      href={getLocalizedPath(`/artwork/${artwork.id}`, currentLocale)}
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
  );
};

export default Thumbnail;
