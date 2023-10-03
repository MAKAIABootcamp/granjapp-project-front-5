import React from "react";
import { CardAddedProduct } from "../../components/CartComponents/cardAddedProduct";
import { CarouselAddedProduct } from "../../components/CartComponents/CarouselAddedProduct";

export const ShoppingCart = () => {
  return (
    <>
    <div className="h1-container">
        <h1>Carrito</h1>
      </div>
      <CarouselAddedProduct />
    </>
  );
};
