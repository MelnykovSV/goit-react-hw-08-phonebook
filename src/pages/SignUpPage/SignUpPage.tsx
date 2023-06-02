import { SignUp } from '../../components/SignUp/SignUp';
import { ISignUpData } from '../../interfaces';
import { useAppDispatch } from '../../redux/hooks';
import { signUp } from '../../redux/auth/operations';

const SignUpPage = () => {
  const dispatch = useAppDispatch();

  const signUpHandler = (data: ISignUpData) => {
    dispatch(signUp(data));
    return true;
  };
  return (
    <div>
      <SignUp signUpHandler={signUpHandler}></SignUp>
    </div>
  );
};

export default SignUpPage;
