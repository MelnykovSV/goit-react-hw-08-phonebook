import { Container } from './SharedLayout.styled';
import { NavLink, Outlet } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { logOut } from '../../redux/auth/operations';
import { Suspense } from 'react';
import { Watch } from 'react-loader-spinner';

export const SharedLayout = () => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">SignUp</NavLink>
          <NavLink to="/login">SignIn</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
        <button
          type="button"
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Log out
        </button>
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
