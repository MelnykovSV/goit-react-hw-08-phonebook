// import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import { Container } from '../SignUp/SignUp.styled';

import { fetchCurrentUser } from '../../redux/auth/operations';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import PrivateRoute from '../../UserMenu/PrivateRoute';
import PublicRoute from '../../UserMenu/PublicRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(
  () => import('../../pages/ContactsPage/ContactsPage')
);
const Page404 = lazy(() => import('../../pages/Page404/Page404'));
const SignUpPage = lazy(() => import('../../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../../pages/SignInPage/SignInPage'));

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  console.log(HomePage);

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
                <ContactsPage />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Container>
  );
};
