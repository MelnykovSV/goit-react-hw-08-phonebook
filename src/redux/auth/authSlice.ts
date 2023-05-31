import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, fetchCurrentUser } from './operations';
import {
  IAuthSliceState,
  IUserPayload,
  IUserInfo,
  IStore,
} from '../../interfaces';
import { isError, isPending } from '../statusCheckers';

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
    builder.addCase(
      signUp.fulfilled,
      (state, action: PayloadAction<IUserPayload>) => {
        setUserData(state, action);
      }
    );
    builder.addCase(
      logIn.fulfilled,
      (state, action: PayloadAction<IUserPayload>) => {
        setUserData(state, action);
      }
    );
    builder.addCase(logOut.fulfilled, state => {
      clearUserData(state);
    });
    builder.addCase(
      fetchCurrentUser.fulfilled,
      (state, action: PayloadAction<IUserInfo>) => {
        state.user = action.payload;
        fulfill(state);
        if (action.payload) {
          state.isLoggedIn = true;
        }
      }
    );
    builder.addMatcher(isPending, state => {
      state.isLoading = true;
    });
    builder.addMatcher(isError, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

function fulfill(state: IAuthSliceState) {
  state.isLoading = false;
  state.error = null;
}

function setUserData(state: IAuthSliceState, action: AnyAction) {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  fulfill(state);
}

function clearUserData(state: IAuthSliceState) {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  fulfill(state);
}

export const userReducer = authSlice.reducer;
export const getIsLoggedIn = (state: IStore) => state.auth.isLoggedIn;
export const getUser = (state: IStore) => state.auth.user;
