import Link from 'next/link';

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

export const Logo = styled.img`
  width: 100px;
  height: auto;
`;

export const NavWrapper = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  margin-left: 2rem;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.primary};
  }
`;
