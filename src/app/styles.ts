'use client';

import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 10rem auto 8rem;
  row-gap: 2rem;
  grid-template-areas:
    'header'
    'main'
    'footer';
  height: 100vh;
  width: 100%;
  background-color: offwhite;
`;
