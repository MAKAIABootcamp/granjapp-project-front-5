import React from "react";
import { useSelector } from "react-redux";
import { CardAddedProduct } from "./cardAddedProduct";

export const CarouselAddedProduct = () => {
  const { cart } = useSelector((state) => state.granjApp);

  return (
    cart && (
      <div>
        {cart.map((car) => (
          <CardAddedProduct key={car.id} {...car} />
        ))}
      </div>
    )
  );
};
