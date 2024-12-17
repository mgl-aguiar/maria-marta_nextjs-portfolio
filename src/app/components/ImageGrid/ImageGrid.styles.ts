import styled from 'styled-components';

export const Grid = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 5/8;
`;
