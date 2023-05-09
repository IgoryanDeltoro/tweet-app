import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkToolBar = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  text-transform: none;
  text-transform: uppercase;
  font-size: 16px;
  &:hover {
    color: black;
  }
  &.active {
    color: orange;
  }
`;
