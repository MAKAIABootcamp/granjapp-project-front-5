import React, { useEffect, useState } from "react";
import { currentTime } from "../../services/currentTime.js";
import { BsFillBarChartFill, BsSearch, BsCart } from "react-icons/bs";
import { IoWifi, IoBatteryFullSharp } from "react-icons/io5";

const HeaderMobile = () => {
  const [time, setTime] = useState(currentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-[#34d116]">
      <div className=" h-[60px] flex items-center flex-wrap">
        <section className="time text-[10px] m-1 ml-2 flex relative ">
          {time}
        </section>
        <section className="flex justify-end items-start space-x-1 absolute top-0 right-0 mt-1 mr-3 w-12">
          <BsFillBarChartFill />
          <IoWifi />
          <IoBatteryFullSharp />
        </section>

        <div className="bg-[#b6f1d7] h-6 w-full flex items-center flex-shrink-0 p-1">
          <BsSearch className="w-4 h-4 " />
          <input
            type="text"
            placeholder="Buscar en granjapp"
            className="rounded-[10px] bg-[#b6f1d7] w-full px-2 mx-2 text-[14px]"
          />
          <BsCart className="" />
        </div>
      </div>
    </nav>
  );
};

export default HeaderMobile;
