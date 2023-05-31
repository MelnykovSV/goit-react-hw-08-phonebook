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

export interface IUserInfo {
  name: string;
  email: string;
}

export interface ISignUpProps {
  signUpHandler: (data: ISignUpData) => boolean;
}
export interface ISignInProps {
  signInHandler: (data: ISignInData) => boolean;
}

export interface IAuthSliceState {
  user: { name: string | null; email: string | null };
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: null | string;
}

export interface IUserPayload {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export interface IError {
  message: string;
}

export interface IAxiosObject {
  defaults: { common: { Authorization?: string } };
}

export interface IStore {
  auth: IAuthSliceState;
}
export interface IRouteProps {
  children: React.ReactNode;
}

///Contacts

export interface IContact {
  name: string;
  number: string;
  id: string;
}

export interface IContactsState {
  items: IContact[];
  isLoading: boolean;
  error: null | string;
}

export interface IContact {
  name: string;
  number: string;
  id: string;
}

export interface IFullState {
  contacts: IContactsState;
  filter: string;
}

export interface IContactPostData {
  name: string;
  number: string;
}

export interface IContactProps {
  name: string;
  number: string;
  id: string;
  deleteHandler: (id: string) => void;
}
export interface IContactsListProps {
  filteredContacts: IContact[];
  contactDeleteHandler: (id: string) => void;
}

export interface IFilterProps {
  contactsFilter: (value: string) => void;
}

export interface IFormProps {
  formSubmit: (data: IContact) => boolean;
}
