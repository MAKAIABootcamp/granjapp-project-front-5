import React, { useEffect, useState } from "react";
import { currentTime } from "../../services/currentTime.js";
import { BsFillBarChartFill, BsSearch, BsCart } from "react-icons/bs";
import { IoWifi, IoBatteryFullSharp } from "react-icons/io5";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import SearchPage from "../../pages/searchPage/searchPage.jsx";

const HeaderMobile = () => {
  const [time, setTime] = useState(currentTime());
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onSearch = () => {
    navigate("search");
  };

  return (
    <section className="mobile">
      <div className="div">
        <section className="timeMobile">{time}</section>
        <section className="iconosMobile">
          <BsFillBarChartFill />
          <IoWifi />
          <IoBatteryFullSharp />
        </section>
      </div>

      <div className="inputSearchMobile">
        <BsSearch className="searchIconMobile" />
        <SearchPage />
        <BsCart className="inputSearchMobile__inputCart" />
      </div>
    </section>
  );
};

export default HeaderMobile;
