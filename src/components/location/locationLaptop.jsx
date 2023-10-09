import React, { useEffect, useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IconContext } from "react-icons";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";

import Map from "../MapComponent/Map";
import { selectAddress, setAddress } from "../../store/userAuth/userAuthSlice";


const LocationLaptop = () => {
  const [showLocation, setShowLocation] = useState(false);
  const dispatch = useDispatch();
  const addressState =
    localStorage.getItem("address") || useSelector(selectAddress);

  useEffect(() => {
    if (addressState) {
      localStorage.setItem("address", addressState);
      // dispatch(setAddress(addressState))
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
    <div className="w-[40%] min-w-[200px] max-w-[400px]">
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
      <section className="flex-col w-auto items-center justify-center mx-auto">
        <div className="w-full flex mx-auto items-center justify-center">
          <IconContext.Provider value={{ color: "#2e0986" }}>
            <CiDeliveryTruck className="w-6 h-6 mx-2" />
          </IconContext.Provider>
          <strong className="text-[#2e0986] text-[14px]  ">
            Compra y recoge:
          </strong>
        </div>
        <button
          className="flex items-center mx-auto justify-center hover:bg-transparent"
          onClick={handleDisplayLocation}
        >
          <div>
            <p className="text-[14px]  text-[#414141]">{addressState}</p>
          </div>
          <MdKeyboardArrowRight className="w-6" />
        </button>
      </section>
    </div>
  );
};

export default LocationLaptop;
