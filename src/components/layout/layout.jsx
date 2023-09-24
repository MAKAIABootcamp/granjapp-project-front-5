import React from "react";
import { Outlet, useParams } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";
import HeaderLaptop from "../header/headerLaptop";
import HeaderTablet from "../header/headerTablet";
import HeaderMobile from "../header/headerMobile";
import LocationMobile from "../location/locationMobile";
import LocationTablet from "../location/locationTablet";
import MobileNavbar from "../mobileNavbar/mobileNavbar";

const Layout = () => {
  const { width } = useScreenSize();
  const params = useParams();
  return (
    <main className="container">
      {width > 768 ? (
        <HeaderLaptop id={params.id} />
      ) : width > 360 && width <= 768 ? (
        <>
          <HeaderTablet id={params.id} />
          <LocationTablet />
        </>
      ) : (
        width <= 360 && (
          <>
            <HeaderMobile id={params.id} />
            <LocationMobile />
          </>
        )
      )}
      <Outlet />
      <MobileNavbar />
    </main>
  );
};

export default Layout;
