import LottieAnimation from 'components/lottie/Lottie';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const Location = useLocation();
  console.log(Location);
  return <LottieAnimation />;
};
export default Home;
