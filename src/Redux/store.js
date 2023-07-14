import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './contacts/filterSlice';
import { contactsReducer } from './contacts/contactSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    auth: authReducer,
    filter: filterReducer,
  },
});
