import { ContactsPage } from 'pages/contact/Contacts';
import { Login } from 'pages/login/Login';
import { Register } from 'pages/register/Register';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './NavBar/Layout';
import { Home } from 'pages/home/Home';
import { PrivateRoute } from 'hoc/PrivateRoute';
import { PublicRoute } from 'hoc/PublicRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'Redux/auth/operation';
import { selectRefreshing } from 'Redux/auth/selector';
import { LoaderWrapper } from './Loader/Loader.styled';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isRefresh = useSelector(selectRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <LoaderWrapper>
      <Loader />
      <h1>Loading..</h1>
    </LoaderWrapper>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="contact"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
