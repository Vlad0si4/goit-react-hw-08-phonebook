import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';
import { logoutThunk } from 'Redux/auth/operation';

const ContactsInitialState = {
  contacts: [],
  isLoading: true,
  error: '',
};

const pending = state => {
  state.isLoading = true;
  state.error = '';
};
const rejected = state => {
  state.isLoading = false;
  state.error = true;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: ContactsInitialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, state => {
        state.contacts = [];
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        rejected
      );
  },
});

export const contactsReducer = contactSlice.reducer;
