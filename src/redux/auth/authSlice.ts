import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { signUp } from '../../components/SignUp/SignUp';
import { signUp, signIn } from './operations';
import { IAuthSliceState, IUserPayload, IError } from '../../interfaces';

const initialState: IAuthSliceState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    //fetchContacts
    builder.addCase(signUp.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      signUp.fulfilled,
      (state, action: PayloadAction<IUserPayload>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
    builder.addCase(signIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<IUserPayload>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const userReducer = authSlice.reducer;

// export const getData = state => state.contacts.data;
