import { useAppSelector } from '../redux/hooks';
import { getIsLoggedIn } from '../redux/auth/authSlice';
import { Navigate } from 'react-router-dom';
import { IRouteProps } from '../interfaces';

export default function PublicRoute({ children, ...routeProps }: IRouteProps) {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <div {...routeProps}>
      {isLoggedIn ? <Navigate to="/contacts" /> : children}
    </div>
  );
}
