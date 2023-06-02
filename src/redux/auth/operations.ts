import axios from 'axios';
import { getErrorMessage } from '../../getErrorMessage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ISignUpData,
  ISignInData,
  IUserPayload,
  IStore,
  IUserInfo,
  IAxiosError,
} from '../../interfaces';

import { toast } from 'react-toastify';

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
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      const axiosError = error as IAxiosError;
      if (axiosError.response.status === 400) {
        toast.error('User creation error.');
        return thunkAPI.rejectWithValue(getErrorMessage(axiosError));
      }
      toast.error('Unexpected error occured');
      return thunkAPI.rejectWithValue(getErrorMessage(axiosError));
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
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      const axiosError = error as IAxiosError;
      if (axiosError.response.status === 400) {
        toast.error('Login error');

        return thunkAPI.rejectWithValue(getErrorMessage(axiosError));
      }
      toast.error('Unexpected error occured');
      return thunkAPI.rejectWithValue(getErrorMessage(axiosError));
    }
  }
);

export const logOut = createAsyncThunk<void, void>(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchCurrentUser = createAsyncThunk<IUserInfo, void>(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as IStore;
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return;
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
