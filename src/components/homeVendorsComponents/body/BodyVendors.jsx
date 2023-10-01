import React, { useState } from "react";
import { SearchBar } from "./searchBar/searchBar";
import { FilterButtons } from "./filterButtons/filterButtons";
import { ShopsCarousel } from "./restarantsCarousel/shopsCarousel";
import { ProductCarousel } from "./porductsCarousel/productCarousel";
import CarouselPromo from "../../carouselPromo/carouselPromo";
import "./body.scss"

const BodyVendors = () => {
  const [mostrarShopsCarousel, setMostrarShopsCarousel] = useState(true);

  const mostrarShops = () => {
    setMostrarShopsCarousel(true);
  };

  const mostrarProductos = () => {
    setMostrarShopsCarousel(false);
  };
  return (
    <>
      <div className="filterButtons-container">
        <FilterButtons
          mostrarShops={mostrarShops}
          mostrarProductos={mostrarProductos}
        />
        {/* <CarouselPromo /> */}
        {mostrarShopsCarousel ? <ShopsCarousel /> : <ProductCarousel />}
      </div>
    </>
  );
};

export default BodyVendors;
