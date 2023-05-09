import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

export const LinkFilter = styled(NavLink)`
  color: #1976d2;
  &.active {
    color: orange;
  }
`;

export const FilterButton = styled(DropdownButton)`
  & [type='button'] {
    background-color: #1976d2;
  }
`;
