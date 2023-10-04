import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./productCarousel.scss";
import { ProductCard } from "./productCard";

export const ProductCarousel = (prop) => {
  const { product } = useSelector((state) => state.granjApp);
  useEffect(() => {
    if (!prop.categorie && !prop.products) {
      setProducts(product);
    }
  }, [, prop.categorie]);

  useEffect(() => {
    if (!prop.products) {
      setProducts(product);
    }
  }, [prop.products]);

  const [products, setProducts] = useState(product);
  return (
    <div className="carouselProducts-container">
      {prop.products ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            activeComponent={prop.activeComponent}
            setProduct={prop.setProduct}
            {...{ vendor: true, ...product }}
          />
        ))
      ) : (
        <ProductCard key={product.id} {...product} />
      )}
    </div>
  );
};
