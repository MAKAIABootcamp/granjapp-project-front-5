import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IconContext } from "react-icons";
import { MdKeyboardArrowRight } from "react-icons/md";
// import GeoLocation from "../../services/geolocalization";

const LocationLaptop = () => {
  return (
    <div>
      <section className="flex left-[130px] absolute top-3">
        <IconContext.Provider value={{ color: "#2e0986" }}>
          <CiDeliveryTruck className="left-4 relative top-[8px] w-6 h-6" />
        </IconContext.Provider>
        <div className="flex ">
          <strong className="text-[#2e0986] relative w-[54px] h-3 top-[14px] left-6 text-[14px] leading-[11.72px] text-center whitespace-nowrap">
            Compra y recoge:
          </strong>
          <span className="relative w-[146px] h-4 top-[13px] left-[91px] text-[14px] leading-[16.41px] text-center text-[#414141]">
            Rionegro, Antioquia
          </span>
          <MdKeyboardArrowRight className="absolute w-6 top-[14px] left-[310px]" />
        </div>
      </section>
    </div>
  );
};

export default LocationLaptop;
