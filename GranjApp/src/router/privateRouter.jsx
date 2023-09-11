import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRouter = ({isAuthenticate}) => {
  return <div>{isAuthenticate?<Outlet/>:<Navigate to={"/login"}/>}</div>;
}

export default PrivateRouter