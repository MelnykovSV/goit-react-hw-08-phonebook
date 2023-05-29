import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './auth/authSlice';

// const rootReducer = combineReducers({
//   user: userReducer,

// });

export const store = configureStore({
  reducer: userReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
