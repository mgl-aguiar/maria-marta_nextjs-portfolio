import Image from 'next/image';
import Link from 'next/link';

import { getLocalizedPath } from '../../../lib/utils';
import styles from '../ArtworkGrid.module.css';
import { Artwork } from '@/src/types/Artwork';

interface ThumbnailProps {
  artwork: Artwork;
  locale?: string;
}

const Thumbnail = ({ artwork, locale = 'en' }: ThumbnailProps) => {
  return (
    <Link
      href={getLocalizedPath(`/artwork/${artwork.id}`, locale)}
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
