import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from './publicRouter';
import PrivateRouter from './privateRouter';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Home from '../pages/home/home';
import Layout from '../components/layout/layout';
import LoginByPhone from '../pages/login/loginByPhone';
import { InsertCode } from '../pages/login/insertCode';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { Support } from '../pages/support/support';

const Router = () => {

  const {status} = useCheckAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* {status === "authenticated" ? (
            <Route path="/*" element={<Home />} />
          ) : (
            <Route path="/login*" element={<Login />} />
          )} */}
          <Route
            element={
              <PublicRouter isAuthenticate={status === "authenticated"} />
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="loginWithCell" element={<LoginByPhone />} />
            <Route path="/insertcode" element={<InsertCode />} />
            <Route path="support" element={<Support/>} />

          </Route>
          <Route
            element={
              <PrivateRouter isAuthenticate={status === "authenticated"} />
            }
          >
            <Route path="home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;