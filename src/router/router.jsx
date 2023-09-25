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
import SearchPage from "../pages/searchPage/searchPage";

const Router = () => {
  const { status } = useCheckAuth();

  return (
    <BrowserRouter>
      {status === "authenticated" ? (
        <>
          <Layout />
          <main className="mx-5 pt-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<DetailProducts />} />
              <Route path="support" element={<Support />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="salesTracking" element={<SalesTracking />} />
              <Route path="search" element={<SearchPage />} />
            </Routes>
          </main>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="loginWithCell" element={<LoginByPhone />} />
          <Route path="/insertcode" element={<InsertCode />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
