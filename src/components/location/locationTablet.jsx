import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MdEdit } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import Map from "../MapComponent/Map";
import { useDispatch, useSelector } from "react-redux";
import { selectAddress, setAddress } from "../../store/userAuth/userAuthSlice";
// import GeoLocation from "../../services/geolocalization";

const LocationTablet = () => {
  const [showLocation, setShowLocation] = useState(false);
  const dispatch = useDispatch();
  const addressState =
    localStorage.getItem("address") || useSelector(selectAddress);

  const handleDisplayLocation = () => {
    setShowLocation(!showLocation);
  };

  const handleAddress = (address) => {
    dispatch(setAddress(address));
    setShowLocation(!showLocation);

    // Save the address to localStorage
    localStorage.setItem("address", address);
  };
  return (
    <div className="max-w-full block">
      {showLocation && (
        <div className="">
          <button
            onClick={handleDisplayLocation}
            className="absolute top-16 right-2 hover:bg-gray-500 z-40 "
          >
            <IoIosCloseCircle width={50} height={50} />
          </button>
          <div className="w-full">
            <Map handleAddress={handleAddress} />
          </div>
        </div>
      )}
      <section className="flex mx-auto items-center bg-[#2e0986] h-5 w-full">
        <div className="flex mx-auto items-center justify-around space-x-4">
          <strong className="text-[#fff] w-[54px] h-3 top-1 left-4 text-[13px] leading-[11.72px] text-center whitespace-nowrap ml-1">
            Recibelo en
          </strong>
          <span className=" w-full px-4 h-4 top-[1px] left-[35px] text-[13px] leading-[16.41px] text-center text-[#fff]">
            {addressState}
          </span>
          <button
            className="hover:bg-transparent"
            onClick={handleDisplayLocation}
          >
            <IconContext.Provider value={{ color: "#34d116" }}>
              <MdEdit className="h-4 w-4 left-[80px] top-[2px] hover:bg-green-800" />
            </IconContext.Provider>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LocationTablet;
