import { SignUp } from '../../components/SignUp/SignUp';
import { ISignUpData } from '../../interfaces';
import { useAppDispatch } from '../../redux/hooks';
import { signUp } from '../../redux/auth/operations';

export const SignUpPage = () => {
  const dispatch = useAppDispatch();

  const signUpHandler = (data: ISignUpData) => {
    console.log(data);
    dispatch(signUp(data));
    return true;
  };
  return (
    <div>
      <SignUp signUpHandler={signUpHandler}></SignUp>
    </div>
  );
};
