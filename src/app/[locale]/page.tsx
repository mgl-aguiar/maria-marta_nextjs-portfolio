import ArtworkGrid from '../components/ArtworkGrid';
import TopButton from '../components/ui/TopButton';
import { artworks } from '../data/artworks';

export default function Home() {
  return (
    <>
      <ArtworkGrid artworks={artworks} />
      <TopButton />
    </>
  );
}
