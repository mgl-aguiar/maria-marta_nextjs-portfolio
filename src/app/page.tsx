import Header from './components/Header';
import Footer from './components/Footer';
import ImageGrid from './components/ImageGrid';

import { HomeWrapper } from './styles';

export default function Home() {
  return (
    <HomeWrapper>
      <Header />
      <ImageGrid />
      <Footer />
    </HomeWrapper>
  );
}
