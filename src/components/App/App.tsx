// import { Route, Routes } from 'react-router-dom';
import { SignUp } from '../SignUp/SignUp';
import { SignIn } from '../SignIn/SignIn';
import { Container } from '../SignUp/SignUp.styled';
import { ISignUpData, ISignInData } from '../../interfaces';
import { signUp } from '../../redux/auth/operations';

import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const signUpHandler = (data: ISignUpData) => {
    console.log(data);
    dispatch(signUp(data));
    return true;
  };

  const signInHandler = (data: ISignInData) => {
    console.log(data);
    return true;
  };
  return (
    <Container>
      <SignUp signUpHandler={signUpHandler}></SignUp>
      <SignIn signInHandler={signInHandler}></SignIn>

      <button type="button">Log out</button>
    </Container>
  );
};
