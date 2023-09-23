import React, { useEffect, useState } from "react";
import { currentTime } from "../../services/currentTime.js";
import { BsFillBarChartFill, BsSearch, BsCart } from "react-icons/bs";
import { IoWifi, IoBatteryFullSharp } from "react-icons/io5";
import "./header.scss";

const HeaderMobile = () => {
  const [time, setTime] = useState(currentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        <input
          type="text"
          placeholder="Buscar en granjapp"
          className="inputSearchMobile__inputBusq"
        />
        <BsCart className="inputSearchMobile__inputCart" />
      </div>
    </section>
  );
};

export default HeaderMobile;
