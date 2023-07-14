import { loginThunk, logoutThunk, registerThunk } from './operation';
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
  loading: false,
  isLoggedIn: false,
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
        state.loading = false;
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
          state.loading = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
