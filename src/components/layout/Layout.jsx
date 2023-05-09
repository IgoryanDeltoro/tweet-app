import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ResponsiveAppBar } from '../AppBar';
import Container from '../../styled/container/Container.styled';
import { Background } from 'styled/Background.styled';
import { Loading } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Background>
        <Container>
          <Suspense fallback={<Loading>Loading page...</Loading>}>
            <Outlet />
          </Suspense>
        </Container>
      </Background>
    </>
  );
};
export default Layout;
