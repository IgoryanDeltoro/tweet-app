import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 740px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
