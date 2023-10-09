import React from "react";
import { useSelector } from "react-redux";
import CardSellingProduct from "./CardSellingProduct";

 const CarouselSellingProducts = () => {
  const { compras } = useSelector((state) => state.granjApp);
  return (
    compras && (
      <div className="grid border border-gray-200 rounded-lg shadow p-5 md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-1" >
        {compras.map((compra) => (
          <CardSellingProduct key={compra.id} compra={compra} /> 
        ))}
        
      </div>
    )
  );
};

export default CarouselSellingProducts
