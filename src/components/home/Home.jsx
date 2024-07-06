import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../navigation/NavBar';

const Home = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default Home;
