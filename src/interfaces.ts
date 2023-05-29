export interface IUserData {
  name: string;
  email: string;
  userPassword: string;
}

export interface ISignUpData {
  name: string;
  email: string;
  userPassword: string;
}

export interface ISignInData {
  email: string;
  userPassword: string;
}

export interface ISignUpProps {
  signUpHandler: (data: ISignUpData) => boolean;
}
export interface ISignInProps {
  signInHandler: (data: ISignInData) => boolean;
}
