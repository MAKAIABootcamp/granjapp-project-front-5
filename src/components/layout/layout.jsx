import React from "react";
import useScreenSize from "../../hooks/useScreenSize";
import HeaderLaptop from "../header/headerLaptop";
import HeaderTablet from "../header/headerTablet";
import HeaderMobile from "../header/headerMobile";
import LocationMobile from "../location/locationMobile";
import LocationTablet from "../location/locationTablet";
import MobileNavBar from "../mobileNavbar/mobileNavbar";

const Layout = () => {
  const { width } = useScreenSize();
  return (
    <>
      {width > 768 ? (
        <HeaderLaptop />
      ) : width > 360 && width <= 768 ? (
        <>
          <HeaderTablet />
          <LocationTablet />
          <MobileNavBar />
        </>
      ) : (
        width <= 360 && (
          <>
            <HeaderMobile />
            <LocationMobile />
            <MobileNavBar />
          </>
        )
      )}
      {/* <Outlet/> */}
    </>
  );
};

export default Layout;
