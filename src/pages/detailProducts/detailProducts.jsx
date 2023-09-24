import React from "react";
import useScreenSize from "../../hooks/useScreenSize";
import DetailProductsMobile from "./mainProducts/DetailProductsMobile";
import DetailProductsTablet from "./mainProducts/DetailProductsTablet";
import DetailProductsLaptop from "./mainProducts/DetailProductsLaptop";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailProducts = () => {
  const { width, height } = useScreenSize();
  const params = useParams();

  // console.log(`width: ${width}, height: ${height}`);

  return (
    <>
      {/* This will disappear when the window is less than 500 pixels wide. */}

      {width <= 380 && height <= 720 ? (
        <div className="bg-gradient-to-b from-white to-[#d69f65] w-full h-full top-[-464px] left-[-214px] fondo">
          <DetailProductsMobile id={params.id} />
        </div>
      ) : width > 380 && width <= 768 && height <= 1024 ? (
        <div className="bg-gradient-to-b from-white to-[#ffbc74] w-full max-h-full fondo">
          <DetailProductsTablet id={params.id} />
        </div>
      ) : (
        <div className="bg-gradient-to-b from-white to-[#ffbc74] w-full h-full top-[-464px] left-[-214px] fondo">
          <DetailProductsLaptop id={params.id} />
        </div>
      )}
    </>
  );
};

export default DetailProducts;
