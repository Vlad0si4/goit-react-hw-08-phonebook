import React from 'react';
import { NavBar } from './NavBar';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
