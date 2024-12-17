import styled from 'styled-components';

export const Grid = styled.main`
  grid-area: main;
  column-count: 1;
  column-gap: 2rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    column-count: 2;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    column-count: 3;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.largeDesktop}) {
    column-count: 4;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 2rem;
  break-inside: avoid;
  display: block;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
