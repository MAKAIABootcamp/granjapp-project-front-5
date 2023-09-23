import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MdEdit } from "react-icons/md";
// import GeoLocation from "../../services/geolocalization";

const LocationMobile = () => {
  return (
    <div className="bg-[#2e0986] ">
      <section className="flex w-full mx-auto h-5 items-center space-x-2 justify-center">
        <IconContext.Provider value={{ color: "#34d116" }}>
          <FaMapMarkerAlt className="h-3 w-3" />
        </IconContext.Provider>
        <div className="flex items-center space-x-2">
          <strong className="text-[#fff]  h-3 text-[13px] items-center flex text-center whitespace-nowrap">
            Recibelo en
          </strong>
          <span className="h-4 text-[13px] leading-[16.41px] text-center text-[#fff]">
            Rionegro, Antioquia
          </span>
          <IconContext.Provider value={{ color: "#34d116" }}>
            <MdEdit className="h-4 w-4 " />
          </IconContext.Provider>
        </div>
      </section>
    </div>
  );
};

export default LocationMobile;
