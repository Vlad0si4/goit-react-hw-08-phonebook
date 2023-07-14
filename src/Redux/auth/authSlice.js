import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operation';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const pending = state => {
  state.loading = true;
  state.error = '';
};

const rejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const initialState = {
  user: {
    email: '',
    password: '',
  },
  token: '',
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        state.user = {
          email: '',
          password: '',
        };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending), pending)
      .addMatcher(
        isAnyOf(loginThunk.rejected, registerThunk.rejected),
        rejected
      )
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
