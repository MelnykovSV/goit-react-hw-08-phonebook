// import { Route, Routes } from 'react-router-dom';
import { SignUp } from '../SignUp/SignUp';
import { SignIn } from '../SignIn/SignIn';
import { Container } from '../SignUp/SignUp.styled';
import { ISignUpData, ISignInData } from '../../interfaces';
import { signUp, logIn, logOut, isSignedIn } from '../../redux/auth/operations';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isSignedIn());
  }, [dispatch]);
  const signUpHandler = (data: ISignUpData) => {
    console.log(data);
    dispatch(signUp(data));
    return true;
  };

  const signInHandler = (data: ISignInData) => {
    console.log(data);
    dispatch(logIn(data));
    return true;
  };
  return (
    <Container>
      <SignUp signUpHandler={signUpHandler}></SignUp>
      <SignIn signInHandler={signInHandler}></SignIn>

      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </button>
    </Container>
  );
};
