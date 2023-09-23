import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MdEdit } from "react-icons/md";

const LocationTablet = () => {
  return (
    <div className="flex max-w-full">
      <section className="flex bg-[#2e0986] h-5 w-full">
        <IconContext.Provider value={{ color: "#34d116" }}>
          <FaMapMarkerAlt className="h-3 w-3 left-4 relative top-[2px]" />
        </IconContext.Provider>
        <div className="flex">
          <strong className="text-[#fff] relative w-[54px] h-3 top-1 left-4 text-[13px] leading-[11.72px] text-center whitespace-nowrap ml-1">
            Recibelo en
          </strong>
          <span className="relative w-[146px] h-4 top-[1px] left-[35px] text-[13px] leading-[16.41px] text-center text-[#fff]">
            882 Well St. New-York
          </span>
          <IconContext.Provider value={{ color: "#34d116" }}>
            <MdEdit className="h-4 w-4 left-[80px] relative top-[2px]" />
          </IconContext.Provider>
        </div>
      </section>
    </div>
  );
};

export default LocationTablet;
