import axios from 'axios';

export const instance = axios.create({
  baseURL: ' https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const fetchUserAuth = async credential => {
  const { data } = await instance.post('/users/signup', credential);
  return data;
};

export const fetchUserLogin = async credential => {
  const { data } = await instance.post('/users/login', credential);
  return data;
};

export const fetchUserLogout = async () => {
  const { data } = await instance.post('/users/logout');
  return data;
};

//CONTACT
export const fetchContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const fetchDelete = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const fetchAddUser = async user => {
  const { data } = await instance.post(`/contacts`, user);
  return data;
};
