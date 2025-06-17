import ArtworkGrid from '../components/ArtworkGrid';
import { artworks } from '../data/artworks';

export default function Home() {
  return <ArtworkGrid artworks={artworks} />;
}
