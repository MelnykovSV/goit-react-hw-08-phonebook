import { Container } from './SharedLayout.styled';
import { NavLink, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';

import { Suspense } from 'react';
import { Watch } from 'react-loader-spinner';
import { getIsLoggedIn } from '../../redux/auth/authSlice';
import { UserMenu } from '../UserMenu/UserMenu';

export const SharedLayout = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {!isLoggedIn ? <NavLink to="/register">SignUp</NavLink> : null}
          {!isLoggedIn ? <NavLink to="/login">SignIn</NavLink> : null}
          {isLoggedIn ? <NavLink to="/contacts">Contacts</NavLink> : null}
          {isLoggedIn ? <UserMenu /> : null}
        </nav>
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