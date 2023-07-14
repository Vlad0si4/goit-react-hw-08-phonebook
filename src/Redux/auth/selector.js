import { createSelector } from '@reduxjs/toolkit';

export const selectLogIn = state => state.auth.isLoggedIn;

export const selectUser = createSelector(
  [state => state.auth.user],
  user => user
);
