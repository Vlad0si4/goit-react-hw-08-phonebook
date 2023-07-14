// import { useDispatch, useSelector } from 'react-redux';
// import { Contacts } from './Contacts/Contacts';

import { ContactsPage } from 'pages/contact/Contacts';
import { Login } from 'pages/login/Login';
import { Register } from 'pages/register/Register';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './NavBar/Layout';
import { Home } from 'pages/home/Home';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
