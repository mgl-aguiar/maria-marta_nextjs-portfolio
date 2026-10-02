import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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

export async function generateMetadata({
  params,
}: ArtworkPageProps): Promise<Metadata> {
  const artwork = artworks.find((art) => art.id === params.id);

  if (!artwork) {
    return {
      title: 'Artwork Not Found',
    };
  }

  return {
    title: artwork.title,
    description: artwork.description || `${artwork.title} by Maria Marta`,
    openGraph: {
      title: artwork.title,
      description: artwork.description || `${artwork.title} by Maria Marta`,
      images: artwork.media !== 'video' ? [artwork.imageUrl] : undefined,
    },
  };
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = artworks.find((art) => art.id === params.id);

  if (!artwork) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Artwork artwork={artwork} />
      <ArtworkInfo artwork={artwork} />
    </div>
  );
}
