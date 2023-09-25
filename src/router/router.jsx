import React from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Home from "../pages/home/home";
import Layout from "../components/layout/layout";
import LoginByPhone from "../pages/login/loginByPhone";
import { InsertCode } from "../pages/login/insertCode";
import { useCheckAuth } from "../hooks/useCheckAuth";
import DetailProducts from "../pages/detailProducts/detailProducts";
import { Support } from "../pages/support/support";
import { Favorites } from "../pages/favorites/favorites";
import { SalesTracking } from "../pages/salesTracking/salesTracking";
import ShopDetails from "../pages/shopDetails/shopDetails";
import { Foro } from "../pages/foro/foro";

const Router = () => {
  const { status } = useCheckAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {status === "authenticated" ? (
            <>
              <Route path="/*" element={<Home />} />
              <Route path="/login" element={<Login />} />{" "}
              <Route path="soporte" element={<Support />} />
              <Route path="favoritos" element={<Favorites />} />
              <Route path="seguimientoVentas" element={<SalesTracking />} />
              <Route path="detallesTienda" element={<ShopDetails/>} />
              <Route path="Foro" element={<Foro/>} />
              
            </>
          ) : (
            <>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="loginWithCell" element={<LoginByPhone />} />
              <Route path="/insertcode" element={<InsertCode />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
