import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ResponsiveAppBar } from '../AppBar';
import Container from '../../styled/container/Container.styled';

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Suspense fallback={<>Loading page...</>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default Layout;
