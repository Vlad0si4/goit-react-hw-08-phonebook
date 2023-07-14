import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddUser, fetchContacts, fetchDelete } from 'service/userInstance';
// import { fetchAddUser, fetchContacts, fetchDelete } from 'service/mockApi';

export const fetchContactsThunk = createAsyncThunk(
  'contact/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contact/fetchDelete',
  async (id, { rejectWithValue }) => {
    try {
      await fetchDelete(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contact/addFetchContact',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetchAddUser(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
