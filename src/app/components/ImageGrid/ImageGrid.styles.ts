import styled from 'styled-components';

export const ImageGridWrapper = styled.main`
  display: flex;
  justify-content: space-between;
  grid-area: main;
  background-color: lightskyblue;
  width: 100%;
  padding: 0 2rem;
`;

export const ImageGrid = styled.div`
  display: grid;
  max-width: 100%;
`;
