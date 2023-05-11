import styled from 'styled-components';

const Container = styled.div`
  padding: 70px 20px 50px 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 400px) {
    max-width: 400px;
  }
  @media screen and (min-width: 780px) {
    max-width: 780px;
  }
  @media screen and (min-width: 1160px) {
    max-width: 1160px;
  }
`;
export default Container;
