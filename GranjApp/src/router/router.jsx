import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from './publicRouter';
import PrivateRouter from './privateRouter';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Home from '../pages/home/home';
import Layout from '../components/layout/layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route element={<PublicRouter isAuthenticate={false} />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={ <Register/>} />
          </Route>
          <Route element={<PrivateRouter isAuthenticate={false} />}>
            <Route path='home' element={<Home/> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;