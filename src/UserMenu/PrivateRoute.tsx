import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../redux/hooks';

import { getToken } from '../redux/auth/authSlice';
import { IRouteProps } from '../interfaces';

export default function PrivateRoute({ children, ...routeProps }: IRouteProps) {
  const token = useAppSelector(getToken);
  return (
    <div {...routeProps}>{token ? children : <Navigate to="/login" />}</div>
  );
}
