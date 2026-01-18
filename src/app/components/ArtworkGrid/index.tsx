import { Artwork } from '@/src/types/Artwork';
import Thumbnail from './Thumbnails';
import styles from './ArtworkGrid.module.css';

interface ArtworkGridProps {
  artworks?: Artwork[];
  locale?: string;
}

const ArtworkGrid = ({ artworks = [], locale = 'en' }: ArtworkGridProps) => {
  return (
    <div className={styles.grid}>
      {artworks.map((artwork) => (
        <Thumbnail key={artwork.id} artwork={artwork} locale={locale} />
      ))}
    </div>
  );
};

export default ArtworkGrid;
