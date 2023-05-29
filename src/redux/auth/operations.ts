import axios from 'axios';
import { getErrorMessage } from '../../getErrorMessage';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
