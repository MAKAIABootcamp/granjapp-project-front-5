import React from "react";
import { CardAddedProduct } from "../../components/CartComponents/cardAddedProduct";
import { CarouselAddedProduct } from "../../components/CartComponents/CarouselAddedProduct";
import { useSelector } from "react-redux";

export const ShoppingCart = () => {

  const {cart} = useSelector ( state => state.granjApp);
  console.log(cart.length);

  return (

    cart.length > 0 && (  <>
      <div className="h1-container">
          <h1>Carrito</h1>
        </div>
        <CarouselAddedProduct />
      </>)
  
  );
};
