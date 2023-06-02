import { Container } from './SharedLayout.styled';
import { NavLink, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';

import { Suspense } from 'react';
import { Watch } from 'react-loader-spinner';
import { getToken } from '../../redux/auth/authSlice';
import { UserMenu } from '../UserMenu/UserMenu';
import { ResponsiveAppBar } from './ResponsiveAppBar';

export const SharedLayout = () => {
  const token = useAppSelector(getToken);
  return (
    <Container>
      <header>
        {/* <nav>
          <NavLink to="/">Home</NavLink>
          {!token ? <NavLink to="/register">SignUp</NavLink> : null}
          {!token ? <NavLink to="/login">SignIn</NavLink> : null}
          {token ? <NavLink to="/contacts">Contacts</NavLink> : null}
          {token ? <UserMenu /> : null}
        </nav> */}
        <ResponsiveAppBar />
      </header>
      <main>
        <Suspense
          fallback={
            <Watch
              height="80"
              width="80"
              radius="48"
              color="#4fa94d"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
