import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Home from "../pages/home/home";
import Layout from "../components/layout/layout";
import LoginByPhone from "../pages/login/loginByPhone";
import { InsertCode } from "../pages/login/insertCode";
import { useCheckAuth } from "../hooks/useCheckAuth";
import DetailProducts from "../pages/detailProducts/detailProducts";
import useScreenSize from "../hooks/useScreenSize";
import HeaderLaptop from "../components/header/headerLaptop";
import HeaderTablet from "../components/header/headerTablet";
import LocationTablet from "../components/location/locationTablet";
import HeaderMobile from "../components/header/headerMobile";
import LocationMobile from "../components/location/locationMobile";
import ButtonNavigations from "../components/buttonNavigations/buttonNavigations";
import MetodoPago from "../pages/metodoPago/MetodoPago";
import ComfirmPay from "../pages/comfirmPay/ComfirmPay";
import Foro from "../pages/foro/Foro";
const Router = () => {
  const { status } = useCheckAuth();
  const { width } = useScreenSize();
  return (
    <BrowserRouter>
      {width > 768 ? (
        <HeaderLaptop />
      ) : width > 360 && width <= 768 ? (
        <>
          <HeaderTablet />
          <LocationTablet />
        </>
      ) : (
        width <= 360 && (
          <>
            <HeaderMobile />
            <LocationMobile />
          </>
        )
      )}
      <Routes>
        {status === "authenticated" ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<DetailProducts />} />
          </>
        ) : (
          <>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="loginWithCell" element={<LoginByPhone />} />
            <Route path="/insertcode" element={<InsertCode />} />
            <Route path="/metodoPago" element={<MetodoPago />} />
            <Route path="metodoPago/comfirmPay" element={<ComfirmPay />} />
            <Route path="foro" element={<Foro />} />
          </>
        )}
      </Routes>
      <ButtonNavigations />
    </BrowserRouter>
  );
};

export default Router;
