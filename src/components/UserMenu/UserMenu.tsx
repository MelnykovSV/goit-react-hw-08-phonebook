import { Container } from './UserMenu.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUser } from '../../redux/auth/authSlice';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  return (
    <Container>
      <b>{user.name || 'LOADING NAME...'}</b>
      <p>{user.email || 'LOADING EMAIL...'}</p>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </Container>
  );
};
