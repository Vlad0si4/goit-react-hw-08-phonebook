import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  clearToken,
  fetchRefreshUser,
  fetchUserAuth,
  fetchUserLogin,
  fetchUserLogout,
  setToken,
} from 'service/userInstance';

export const registerThunk = createAsyncThunk(
  'auth/reg',
  async (credential, { rejectWithValue }) => {
    try {
      const response = await fetchUserAuth(credential);
      setToken(response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//bill235689@gmail.com
export const loginThunk = createAsyncThunk(
  'user/login',
  async (credential, { rejectWithValue }) => {
    try {
      const response = await fetchUserLogin(credential);
      setToken(response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUserLogout();
      clearToken();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue, getState }) => {
    const persisterToken = getState().auth.token;
    if (!persisterToken) {
      return rejectWithValue('Token not found');
    }
    try {
      setToken(persisterToken);
      const response = await fetchRefreshUser();
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
