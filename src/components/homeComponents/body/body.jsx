import React, { useState } from "react";
import { SearchBar } from "./searchBar/searchBar";
import { FilterButtons } from "./filterButtons/filterButtons";
import { ShopsCarousel } from "./restarantsCarousel/shopsCarousel";
import { ProductCarousel } from "./porductsCarousel/productCarousel";
import { CarouselPromo } from "../../carouselPromo/carouselPromo";


const Body = () => {

  const [mostrarShopsCarousel, setMostrarShopsCarousel] = useState(true);

  const mostrarShops = () => {
    setMostrarShopsCarousel(true);
  };

  const mostrarProductos = () => {
    setMostrarShopsCarousel(false);
  };
  return (
    <>
      <FilterButtons mostrarShops={mostrarShops} mostrarProductos={mostrarProductos} />
      <CarouselPromo/>
      {mostrarShopsCarousel ? <ShopsCarousel /> : <ProductCarousel />}
    </>
  );
};

export default Body;
