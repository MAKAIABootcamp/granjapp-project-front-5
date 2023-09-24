import React, { useEffect, useState } from "react";
import { currentTime } from "../../services/currentTime.js";
import { BsFillBarChartFill, BsSearch, BsCart } from "react-icons/bs";
import { IoWifi, IoBatteryFullSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import "./header.scss";
import { getProductById } from "../../firebase/Products";

const HeaderMobile = ({ id }) => {
  const [time, setTime] = useState(currentTime());
  const [user, setUser] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const user = await getProductById(id);
      setUser(user);
    };
    getUser();
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

      <div className="secondHeader flex">
        <div className="inputSearchMobile">
          <BsSearch className="searchIconMobile" />
          <input
            type="text"
            placeholder="Buscar en granjapp"
            className="inputSearchMobile__inputBusq"
          />
          <BsCart className="inputSearchMobile__inputCart" />
        </div>
        <div className="flex-col divUser">
          <AiOutlineUser className="flex h-6 w-6" />
          <p className="userName">Andrea</p>
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
