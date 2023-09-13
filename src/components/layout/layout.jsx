import React from 'react';
import useScreenSize from '../../hooks/useScreenSize';
import MobileNavbar from '../mobileNavbar/mobileNavbar';
import DesktopNavbar from '../desktopNavbar/desktopNavbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const { width} = useScreenSize();
  return (
      <div>
          {
              width>500 && <DesktopNavbar/>
          }
          <Outlet />
          {
              width<=500 && <MobileNavbar/>
          }
    </div>
  )
}

export default Layout