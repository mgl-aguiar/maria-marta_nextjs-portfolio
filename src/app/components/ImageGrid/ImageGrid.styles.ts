import styled from 'styled-components';

export const Grid = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  width: 100%;
`;

export const Image = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 5/8;
  background-color: white;
`;
