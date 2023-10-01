import React from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";

import Register from "../pages/register/register";
import Home from "../pages/home/home";
import HomeVendors from "../pages/home/HomeVendors";
import Layout from "../components/layout/layout";
import LoginByPhone from "../pages/login/loginByPhone";
import { InsertCode } from "../pages/login/insertCode";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { Support } from "../pages/support/support";
import { Favorites } from "../pages/favorites/favorites";
import { SalesTracking } from "../pages/salesTracking/salesTracking";
import ShopDetails from "../pages/shopDetails/shopDetails";
import Login from "../pages/login/login";
import ForoPage from "../pages/foro/foro";
import DetailProduct from "../pages/detailProducts/detailProducts";
import { ShopsCarousel } from "../components/homeComponents/body/restarantsCarousel/shopsCarousel";
import { ProductCarousel } from "../components/homeComponents/body/porductsCarousel/productCarousel";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userAuth/userAuthSlice";




const Router = () => {
  const userState = useSelector(selectUser);
  const { status } = useCheckAuth();
 console.log(status);
  return (
    <BrowserRouter>
      {status === "authenticated" ? (
        <>
          <Layout />
          <main className="mx-5 pt-2">
            <Routes>
              {userState.userType == "comprador" ? (
                <>
                <Route path="/" element={<Home />} />
                  <Route path="support" element={<Support />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="salesTracking" element={<SalesTracking />} />
                  <Route path="foro" element={<ForoPage />} />
                  <Route path="detailStore" element={<ShopDetails />} />
                  <Route path="/product/:id" element={<DetailProduct />} />
                  <Route path="store" element={<ShopsCarousel />} />
                  <Route path="/products" element={<ProductCarousel />} />
                  <Route path="fruits" element={<ProductCarousel categorie = {"Frutas"}/>} />
                  <Route path="vegetables" element={<ProductCarousel categorie = {"Hortalizas"}/>} />
                </>
                  
              ) : (
                <>
                <Route path="/" element={<HomeVendors />} />
                  <Route path="support" element={<Support />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="salesTracking" element={<SalesTracking />} />
                  <Route path="foro" element={<ForoPage />} />
                  <Route path="detailStore" element={<ShopDetails />} />
                  <Route path="/product/:id" element={<DetailProduct />} />
                  <Route path="store" element={<ShopsCarousel />} />
                  <Route path="/products" element={<ProductCarousel />} />
                  <Route path="fruits" element={<ProductCarousel categorie = {"Frutas"}/>} />
                  <Route path="vegetables" element={<ProductCarousel categorie = {"Hortalizas"}/>} />
                </>
              )}
              


            </Routes>
            </main>
        </>
          ) : (
          <Routes> 
            
              <Route path="/" element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="loginWithCell" element={<LoginByPhone />} />
              <Route path="/insertcode" element={<InsertCode />} />
          </Routes>
          )}
    </BrowserRouter>
  );
};

export default Router;
