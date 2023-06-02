import { Container } from './UserMenu.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUser } from '../../redux/auth/authSlice';
import { logOut } from '../../redux/auth/operations';
import { IUserMenuProps } from '../../interfaces';

export const UserMenu = ({ handleCloseUserMenu }: IUserMenuProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  return (
    <Container>
      <b>{user.name || 'LOADING NAME...'}</b>
      <p>{user.email || 'LOADING EMAIL...'}</p>
      <button
        onClick={() => {
          handleCloseUserMenu();
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </Container>
  );
};
