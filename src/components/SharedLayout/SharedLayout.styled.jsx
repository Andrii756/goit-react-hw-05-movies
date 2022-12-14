import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  
`;

export const Link = styled(NavLink)`
  display: block;
  width: 80px;
  color: black;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;
  text-align: center;

  &.active {
    color: white;
    background-color: green;
  }
`;
