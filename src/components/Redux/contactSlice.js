import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const ContactsInitialState = {
  contacts: [],
  isLoading: true,
  error: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: ContactsInitialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      //Delete
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      //Add
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
        state.isLoading = false;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactSlice.reducer;
