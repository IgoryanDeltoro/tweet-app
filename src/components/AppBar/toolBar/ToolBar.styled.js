import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;
  &:active {
    color: orange;
  }
`;
