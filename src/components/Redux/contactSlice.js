import { createSlice, nanoid } from '@reduxjs/toolkit';

const ContactsInitialState = {
  contacts: [],
  isLoading: true,
  error: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: ContactsInitialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },

    fetchAllContact: (state, { payload }) => {
      state.contacts = payload;
    },
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const {
  addContact,
  deleteContact,
  fetchAllContact,
  setLoading,
  setError,
} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
