import axios from 'axios';
import {
  addContact,
  deleteContact,
  fetchAllContact,
  setError,
  setLoading,
} from './contactSlice';

axios.defaults.baseURL = 'https://64ac1b909edb4181202f1e3c.mockapi.io';

export const fetchContactsThunk = () => async dispatch => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get('/contacts');
    dispatch(fetchAllContact(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteContactThunk = id => async dispatch => {
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {}
};

export const addContactThunk = newContact => async dispatch => {
  try {
    const { data } = await axios.post(`/contacts`, newContact);
    dispatch(addContact(data));
  } catch (error) {}
};
