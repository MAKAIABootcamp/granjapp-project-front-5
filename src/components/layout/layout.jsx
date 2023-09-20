import React from "react";
import { Outlet } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";

const Layout = () => {
  const { width } = useScreenSize();
  return (
    <main>
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
      <Outlet />
      <ButtonNavigations />
    </main>
  );
};

export default Layout;
