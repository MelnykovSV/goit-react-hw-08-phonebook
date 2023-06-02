import { Container } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ResponsiveAppBar } from './ResponsiveAppBar';
import { LinearProgress } from '@mui/material';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        <Suspense fallback={<LinearProgress />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
