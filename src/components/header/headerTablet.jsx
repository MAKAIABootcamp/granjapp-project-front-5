import React, { useEffect, useState } from "react";
import { currentTime } from "../../services/currentTime.js";
import { BsFillBarChartFill, BsSearch, BsCart } from "react-icons/bs";
import { IoWifi, IoBatteryFullSharp } from "react-icons/io5";

const HeaderTablet = () => {
  const [time, setTime] = useState(currentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#34d116] h-[60px] w-[768px] flex relative">
      <section className="time text-[10px] m-1 ml-4">{time}</section>
      <section className="icons flex justify-end items-start space-x-1 absolute top-0 right-0 mt-1 mr-3 w-12">
        <BsFillBarChartFill />
        <IoWifi />
        <IoBatteryFullSharp />
      </section>
      <div
        className="bg-[#b6f1d7] h-6
       top-6 flex relative left-[-40px] rounded-[10px] w-[690px] "
      >
        <BsSearch className="w-4 h-4 top-1 flex absolute left-1" />
        <input
          type="text"
          placeholder="Buscar en granjapp"
          className="rounded-[10px] bg-[#b6f1d7] flex absolute left-6 text-[14px] h-6 pl-2 w-[666px]"
        />
        <BsCart className="flex absolute h-4 w-4 right-[-40px] top-1" />
      </div>
    </div>
  );
};

export default HeaderTablet;
