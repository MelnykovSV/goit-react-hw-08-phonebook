import { Route, Navigate } from 'react-router-dom';

import { useAppSelector } from '../redux/hooks';

import { getIsLoggedIn } from '../redux/auth/authSlice';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedin = useAppSelector(getIsLoggedIn);
  console.log(isLoggedin);
  return (
    <div {...routeProps}>
      {isLoggedin ? children : <Navigate to="/login" />}
    </div>
  );
}
