import React from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";

import Register from "../pages/register/register";
import Home from "../pages/home/home";
import Layout from "../components/layout/layout";
import LoginByPhone from "../pages/login/loginByPhone";
import { InsertCode } from "../pages/login/insertCode";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { Support } from "../pages/support/support";
import { Favorites } from "../pages/favorites/favorites";
import { PurchaseTracking} from "../pages/purchaseTracking/purchaseTracking";
import ShopDetails from "../pages/shopDetails/shopDetails";
import Login from "../pages/login/login";
import ForoPage from "../pages/foro/foro";
import DetailProduct from "../pages/detailProducts/detailProducts";
import { ShopsCarousel } from "../components/homeComponents/body/restarantsCarousel/shopsCarousel";
import { ProductCarousel } from "../components/homeComponents/body/porductsCarousel/productCarousel";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import { ShoppingCart } from "../pages/shoppingCart/shoppingCart";
import MetodoPagos from "../pages/metodoPago/metodoPago";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userAuth/userAuthSlice";
import HomeSellers from "../pages/home/HomeSellers";
import { ProductSelected } from "../pages/purchaseTracking/productSelected";

const Router = () => {
  
  const { status,user } = useCheckAuth();
  const userState = useSelector(selectUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes isAuthenticate={status === "authenticated"} />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
              <Route path="support" element={<Support />} />
              <Route path="favorites" element={<Favorites />} />
              {/* <Route path="salesTracking" element={<SalesTracking />} /> */}
              <Route path="foro" element={<ForoPage />} />
              <Route path="detailStore" element={<ShopDetails />} />
              <Route path="product/:id" element={<DetailProduct />} />
              <Route path="store" element={<ShopsCarousel />} />
              <Route path="products" element={<ProductCarousel />} />
              <Route path="fruits" element={<ProductCarousel categorie = {"Frutas"}/>} />
              <Route path="vegetables" element={<ProductCarousel categorie = {"Hortalizas"}/>} />
              <Route path="shoppingCart" element={<ShoppingCart />} />
              <Route path="shoppingCart/shopping" element={<MetodoPagos />} />
              <Route path="purchaseTracking" element={<PurchaseTracking />} />
              <Route path="productSelected" element={<ProductSelected/>} />
              
          </Route>
        </Route>
        <Route path="/" element={<PublicRoutes isAuthenticate={status === "authenticated"} />}>
          <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="loginWithCell" element={<LoginByPhone />} />
              <Route path="insertcode" element={<InsertCode />} />
        </Route>

      </Routes>
      {/* /* {status === "authenticated" ? (
        <>
          <Layout />
          <main className="mx-5 pt-2">
            <Routes>
              {user.userType && user.userType == "comprador" ? (
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
                  <Route
                    path="fruits"
                    element={<ProductCarousel categorie={"Frutas"} />}
                  />
                  <Route
                    path="vegetables"
                    element={<ProductCarousel categorie={"Hortalizas"} />}
                  />
                </>
              ) : (
                <>
                  <Route path="/" element={<HomeSellers />} />
                  <Route path="support" element={<Support />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="salesTracking" element={<SalesTracking />} />
                  <Route path="foro" element={<ForoPage />} />
                  <Route path="store" element={<ShopsCarousel />} />
                  <Route path="/products" element={<ProductCarousel />} />
                </>
              )}
            </Routes>
          </main>
        </>
          ) : (
          <Routes> 
            
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="loginWithCell" element={<LoginByPhone />} />
              <Route path="/insertcode" element={<InsertCode />} />
          </Routes>
          )} */}
    </BrowserRouter>
  );
};

export default Router;
