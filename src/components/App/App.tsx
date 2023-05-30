// import { Route, Routes } from 'react-router-dom';

import { Container } from '../SignUp/SignUp.styled';

import { fetchCurrentUser } from '../../redux/auth/operations';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignUpPage } from '../../pages/SignUpPage/SignUpPage';
import { SignInPage } from '../../pages/SignInPage/SignInPage';
import { HomePage } from '../../pages/HomePage/HomePage';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Page404 } from '../../pages/Page404/Page404';
import PrivateRoute from '../../UserMenu/PrivateRoute';
import PublicRoute from '../../UserMenu/PublicRoute';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <SignInPage />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <div>Contacts</div>
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Container>
  );
};
