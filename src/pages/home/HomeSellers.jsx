import React from "react";
import BodySellers from "../../components/homeSellerComponent/body/BodySellers";
import useScreenSize from "../../hooks/useScreenSize";

const HomeSellers = () => {

  const { width } = useScreenSize();
  return (
    <>
      {/* This will disappear when the window is less than 500 pixels wide. */}
      {width <= 380 ? (
        <div className="bg-gradient-to-b  w-full fondo">
          <BodySellers width={"Mobil"} />
        </div>
      ) : width > 380 && width <= 768  ? (
        <div className="bg-gradient-to-b  w-full h-[80vh] max-h-full fondo">
          <BodySellers width={"Tablet"} />
        </div>
      ) : (
        <div className="bg-gradient-to-b  w-full h-[80vh] max-h-full fondo">
          <BodySellers width={"Laptop"} />
        </div>
      )}
    </>
  );
};

export default HomeSellers;
