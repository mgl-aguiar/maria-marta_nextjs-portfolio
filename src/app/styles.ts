'use client';

import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 10rem auto 16rem;
  grid-template-areas:
    'header header header'
    '. main .'
    'footer footer footer';
  min-height: 100vh;
  width: 100%;
  background-color: whitesmoke; // placeholder
`;
