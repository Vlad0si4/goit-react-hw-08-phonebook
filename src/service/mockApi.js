import axios from 'axios';

const contactApi = axios.create({
  baseURL: 'https://64ac1b909edb4181202f1e3c.mockapi.io',
});

export const fetchContacts = async () => {
  const { data } = await contactApi.get('/contacts');
  return data;
};

export const fetchDelete = async id => {
  const { data } = await contactApi.delete(`/contacts/${id}`);
  return data;
};

export const fetchAddUser = async user => {
  const { data } = await contactApi.post(`/contacts`, user);
  return data;
};
