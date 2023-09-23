import React from "react";
import { useSelector } from "react-redux";
import { PromoCard } from "./PromoCard";
import "./cardPromo.scss"

export const CarouselPromo = () => {

    const {promos} = useSelector ( state => state.granjApp);

  return (

    <div>
      {promos.map((promos) => (
        <PromoCard key={promos.id} {...promos} />
      ))}
    </div>
  );
};
