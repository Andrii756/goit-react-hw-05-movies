import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieList = styled.ul`

`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 40px) / 2);
  font-size: 26px;
  font-weight: 500;
`;

export const Link = styled(NavLink)`
  color: black;

  &:hover,
  &:focus {
    color: green;
    font-weight: 700;
  }
`;
