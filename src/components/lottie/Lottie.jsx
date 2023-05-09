import Lottie from 'lottie-react';
import groovyWalkAnimation from '../../animation/125824-tweet.json';
import { style } from './Lottie.styled';

const LottieAnimation = () => {
  return (
    <Lottie style={style} animationData={groovyWalkAnimation} loop={true} />
  );
};

export default LottieAnimation;
