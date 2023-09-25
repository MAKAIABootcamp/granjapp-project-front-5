import React, { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";

import Map from "../MapComponent/Map";
import { selectAddress, setAddress } from "../../store/userAuth/userAuthSlice";
// import GeoLocation from "../../services/geolocalization";

const LocationMobile = () => {
  const [showLocation, setShowLocation] = useState(false);
  const dispatch = useDispatch();
  const addressState =
    localStorage.getItem("address") || useSelector(selectAddress);

  useEffect(() => {
    if (addressState) {
      localStorage.setItem("address", addressState);
    }
  }, [addressState]);

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
    <div className="bg-[#2e0986] ">
      {showLocation && (
        <div>
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
      <section className="flex w-full mx-auto h-5 items-center space-x-2 justify-center">
        <IconContext.Provider value={{ color: "#34d116" }}>
          <FaMapMarkerAlt className="h-3 w-3" />
        </IconContext.Provider>
        <div className="flex items-center space-x-2">
          <strong className="text-[#fff]  h-3 text-[13px] items-center flex text-center whitespace-nowrap">
            Recibelo en
          </strong>
          <span className="h-4 text-[13px] leading-[16.41px] text-center text-[#fff]">
            {addressState}
          </span>
          <button
            className="hover:bg-transparent"
            onClick={handleDisplayLocation}
          >
            <IconContext.Provider value={{ color: "#34d116" }}>
              <MdEdit className="h-4 w-4 " />
            </IconContext.Provider>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LocationMobile;
