import { SignIn } from '../../components/SignIn/SignIn';
import { ISignInData } from '../../interfaces';
import { useAppDispatch } from '../../redux/hooks';
import { logIn } from '../../redux/auth/operations';

const SignInPage = () => {
  const dispatch = useAppDispatch();

  const signInHandler = (data: ISignInData) => {
    console.log(data);
    dispatch(logIn(data));
    return true;
  };
  return (
    <div>
      <SignIn signInHandler={signInHandler}></SignIn>
    </div>
  );
};

export default SignInPage;
