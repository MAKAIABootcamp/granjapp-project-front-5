import React, { useEffect, useState } from "react";
import { currentTime } from "../../services/currentTime.js";
import { BsFillBarChartFill, BsSearch, BsCart } from "react-icons/bs";
import { IoWifi, IoBatteryFullSharp } from "react-icons/io5";
import "./header.scss";

const HeaderTablet = () => {
  const [time, setTime] = useState(currentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tablet">
      <div className="div">
        <section className="timeTablet">{time}</section>
        <section className="iconosTablet">
          <BsFillBarChartFill />
          <IoWifi />
          <IoBatteryFullSharp />
        </section>
      </div>

      <div className="inputSearchTablet">
        <BsSearch className="searchIconTablet " />
        <input
          type="text"
          placeholder="Buscar en granjapp"
          className="inputSearchTablet__inputBusq"
        />
        <BsCart className="inputSearchTablet__inputCartT " />
      </div>
    </div>
  );
};

export default HeaderTablet;
