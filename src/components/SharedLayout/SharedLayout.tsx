import { Container } from './SharedLayout.styled';
import { NavLink, Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logOut } from '../../redux/auth/operations';
import { Suspense } from 'react';
import { Watch } from 'react-loader-spinner';
import { getIsLoggedIn } from '../../redux/auth/authSlice';

export const SharedLayout = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {!isLoggedIn ? <NavLink to="/register">SignUp</NavLink> : null}
          {!isLoggedIn ? <NavLink to="/login">SignIn</NavLink> : null}
          {isLoggedIn ? <NavLink to="/contacts">Contacts</NavLink> : null}
          {isLoggedIn ? (
            <NavLink to="/contacts">
              <button
                type="button"
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                Log out
              </button>
            </NavLink>
          ) : null}
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
