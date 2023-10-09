import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./productCarousel.scss";
import { ProductCard } from "./productCard";

export const ProductCarousel = (prop) => {
  const { product } = useSelector((state) => state.granjApp);

  useEffect(() => {
    if (!prop.products) {
      setProducts(product);
    }
  }, [prop.products]);

  const [products, setProducts] = useState(product);
  return (
    <div className="grid shadow md:grid-cols-2 sm:grid-cols-1 p-1 border border-gray-200 rounded-lg">
      {prop.products && (
        products.map((product) => (
          <ProductCard
            key={product.id}
            activeComponent={prop.activeComponent}
            product = {product}
          />
        ))
      ) }
    </div>
  );
};
