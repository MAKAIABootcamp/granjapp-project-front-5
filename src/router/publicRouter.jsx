import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRouter = ({ isAuthenticate }) => {
    return <div>{isAuthenticate ? <Navigate to={"/home"} />:<Outlet/>}</div>;
};

export default PublicRouter;