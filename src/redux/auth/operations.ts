import axios from 'axios';
import { getErrorMessage } from '../../getErrorMessage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ISignUpData,
  ISignInData,
  IUserPayload,
  IStore,
  IUserInfo,
} from '../../interfaces';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const signUp = createAsyncThunk<IUserPayload, ISignUpData>(
  'auth/signUp',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      console.log(response);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const logIn = createAsyncThunk<IUserPayload, ISignInData>(
  'auth/logIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', {
        email,
        password,
      });
      console.log(response.data.token);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const logOut = createAsyncThunk<void, void>(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');
      console.log(response);
      token.unset();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchCurrentUser = createAsyncThunk<IUserInfo, void>(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as IStore;
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      console.log('no token');
      return;
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
