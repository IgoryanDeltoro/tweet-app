import styled from 'styled-components';
import img from '../images/beautiful-nature.webp';

export const Background = styled.div`
  min-height: 100vh;
  background-color: white;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
