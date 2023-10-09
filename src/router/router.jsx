import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../pages/register/register";
import Home from "../pages/home/home";
import Layout from "../components/layout/layout";
import LoginByPhone from "../pages/login/loginByPhone";
import { InsertCode } from "../pages/login/insertCode";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { Support } from "../pages/support/support";
import { Favorites } from "../pages/favorites/favorites";
import { PurchaseTracking } from "../pages/purchaseTracking/purchaseTracking";
import ShopDetails from "../pages/shopDetails/shopDetails";
import Login from "../pages/login/login";
import ForoPage from "../pages/foro/foro";
import DetailProduct from "../pages/detailProducts/detailProducts";
import { ShopsCarousel } from "../components/homeComponents/body/restarantsCarousel/shopsCarousel";
import { ProductCarousel } from "../components/homeComponents/body/porductsCarousel/productCarousel";
import { ShoppingCart } from "../pages/shoppingCart/shoppingCart";
import MetodoPagos from "../pages/metodoPago/metodoPago";
import HomeSellers from "../pages/home/HomeSellers";
import { ProductSelected } from "../pages/purchaseTracking/productSelected";
import DispatchProducts from "../pages/DispathProducts/DispathProducts";

const Router = () => {
  const { status, user } = useCheckAuth();
  return (
    <BrowserRouter>
      {status === "authenticated" ? (
        <>
          {user.userType && (<Layout />)}
          <main className="lg:mx-5 pt-4 sm:mx-1">
            <Routes>
              {user.userType && user.userType == "comprador" ? (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="support" element={<Support />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="foro" element={<ForoPage />} />
                  <Route path="detailStore" element={<ShopDetails />} />
                  <Route path="product/:id" element={<DetailProduct />} />
                  <Route path="store" element={<ShopsCarousel />} />
                  <Route path="products" element={<ProductCarousel />} />
                  <Route path="shoppingCart" element={<ShoppingCart />} />
                  <Route
                    path="shoppingCart/shopping"
                    element={<MetodoPagos />}
                  />
                  <Route
                    path="purchaseTracking"
                    element={<PurchaseTracking />}
                  />
                  <Route path="productSelected" element={<ProductSelected />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<HomeSellers />} />
                  <Route path="dispatchProducts" element={<DispatchProducts />} />
                  <Route path="support" element={<Support />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="foro" element={<ForoPage />} />
                  <Route path="store" element={<ShopsCarousel />} />
                  <Route path="/products" element={<ProductCarousel />} />
                </>
              )}
            </Routes>
          </main>
        </>
      ) : (
        status !== "checking" && (
          <Routes>
            <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="loginWithCell" element={<LoginByPhone />} />
          <Route path="/insertcode" element={<InsertCode />} />
        </Routes>
        )
      )}
    </BrowserRouter>
  );
};

export default Router;
