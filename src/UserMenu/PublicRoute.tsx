import { useAppSelector } from '../redux/hooks';
import { getIsLoggedIn } from '../redux/auth/authSlice';
import { Route, Navigate } from 'react-router-dom';

export default function PublicRoute({ children, ...routeProps }) {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <div {...routeProps}>{isLoggedIn ? <Navigate to="/" /> : children}</div>
  );
}
