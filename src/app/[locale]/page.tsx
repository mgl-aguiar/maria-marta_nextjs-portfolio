import ArtworkGrid from '../components/ArtworkGrid';
import TopButton from '../components/ui/TopButton';
import { artworks } from '../data/artworks';

interface HomeProps {
  params: {
    locale: string;
  };
}

export default function Home({ params }: HomeProps) {
  return (
    <>
      <ArtworkGrid artworks={artworks} locale={params.locale} />
      <TopButton />
    </>
  );
}
