export interface IUserData {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpData {
  name: string;
  email: string;
  password: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpProps {
  signUpHandler: (data: ISignUpData) => boolean;
}
export interface ISignInProps {
  signInHandler: (data: ISignInData) => boolean;
}
