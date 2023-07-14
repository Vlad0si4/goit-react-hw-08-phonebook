import { selectLogIn } from 'Redux/auth/selector';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

export const PublicRoute = ({ children }) => {
  const isLogIn = useSelector(selectLogIn);
  const location = useLocation();

  if (isLogIn) {
    return <Navigate to={location.state?.from ?? '/'} />;
  }
  return children;
};
