import React from "react";
import useScreenSize from "../../hooks/useScreenSize";

import DetailProductsMobile from "./mainProducts/DetailProductsMobile";
import DetailProductsTablet from "./mainProducts/DetailProductsTablet";
import DetailProductsLaptop from "./mainProducts/detailProductsLaptop";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../firebase/Products";

const DetailProducts = () => {
  const { width, height } = useScreenSize();
  const params = useParams();

  const [product, setproduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const productData = await getProductById(params.id);
      setproduct(productData);
    };
    getProduct();
  }, []);

  // console.log(`width: ${width}, height: ${height}`);

  return (
    <>
      {/* This will disappear when the window is less than 500 pixels wide. */}
      {product && width <= 380 ? (
        <div className="bg-gradient-to-b from-white to-[#d69f65] w-full fondo">
          <DetailProductsMobile product={product} />
        </div>
      ) : product && width > 380 && width <= 768 && height <= 1024 ? (
        <div className="bg-gradient-to-b from-white to-[#ffbc74] w-full h-[80vh] max-h-full fondo">
          <DetailProductsTablet product={product} />
        </div>
      ) : (
        <div className="bg-gradient-to-b from-white to-[#ffbc74] w-full h-[80vh] max-h-full fondo">
          <DetailProductsLaptop product={product} />
        </div>
      )}
    </>
  );
};

export default DetailProducts;
