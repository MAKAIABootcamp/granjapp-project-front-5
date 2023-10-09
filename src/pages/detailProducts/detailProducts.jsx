import React from "react";
import useScreenSize from "../../hooks/useScreenSize";

import DetailProductsLaptop from "./mainProducts/detailProductsLaptop";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../firebase/Products";
import DetailProductsMobile from "./mainProducts/detailProductsMobile";
import DetailProductsTablet from "./mainProducts/detailProductsTablet";

const DetailProduct = () => {
  const { width, height } = useScreenSize();
  const params = useParams();

  const [product, setproduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      const productData = await getProductById(params.id);
      console.log(productData);
      setproduct(productData);
    };
    getProduct();
  }, [params.id]);

  // console.log(`width: ${width}, height: ${height}`);

  return (
    <>
      {/* This will disappear when the window is less than 500 pixels wide. */}
      {product && width <= 380 ? (
        <div className="bg-gradient-to-b  w-full fondo">
          <DetailProductsMobile product={product} />
        </div>
      ) : product && width > 380 && width <= 768 ? (
        <div className="bg-gradient-to-b  w-full h-[80vh] max-h-full fondo">
          <DetailProductsTablet product={product} />
        </div>
      ) : (
        product && (
          <div className="bg-gradient-to-b  w-full h-[80vh] max-h-full fondo">
            <DetailProductsLaptop product={product} />
          </div>
        )
      )}
    </>
  );
};

export default DetailProduct;
