import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  margin: 2rem 0rem;
`;

export const LogoWrapper = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
`;

export const NavigationItem = styled.a`
  font-size: 1rem;
  margin-left: 2rem;
`;
