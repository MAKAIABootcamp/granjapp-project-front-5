import React, { useEffect, useState } from "react";
import { currentTime } from "../../services/currentTime.js";
import { BsFillBarChartFill, BsSearch, BsCart } from "react-icons/bs";
import { IoWifi, IoBatteryFullSharp } from "react-icons/io5";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const HeaderTablet = () => {
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
          onClick={onSearch}
          name="searchText"
        />
        <BsCart className="inputSearchTablet__inputCartT " />
      </div>
    </div>
  );
};

export default HeaderTablet;
