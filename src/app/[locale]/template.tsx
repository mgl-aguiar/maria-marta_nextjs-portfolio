'use client';

import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 10rem auto 16rem;
  grid-template-areas:
    '. header .'
    '. main .'
    '. footer .';
  min-height: 100vh;
  width: 100%;
  background-color: whitesmoke; // placeholder
`;

const Main = styled.main`
  grid-area: main;
`;

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </PageWrapper>
  );
}
