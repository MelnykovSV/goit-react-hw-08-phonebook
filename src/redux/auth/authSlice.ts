import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, isSignedIn } from './operations';
import { IAuthSliceState, IUserPayload } from '../../interfaces';

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
    //signUp
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

    //logIn
    builder.addCase(logIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      logIn.fulfilled,
      (state, action: PayloadAction<IUserPayload>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(logIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
    //logOut
    builder.addCase(logOut.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
    //isSignedIn
    builder.addCase(isSignedIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(isSignedIn.fulfilled, state => {
      // state.user = { name: null, email: null };
      // state.token = null;s
      // state.isLoggedIn = false;
      // state.isLoading = false;
      // state.error = null;
    });
    builder.addCase(isSignedIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const userReducer = authSlice.reducer;

// export const getData = state => state.contacts.data;
