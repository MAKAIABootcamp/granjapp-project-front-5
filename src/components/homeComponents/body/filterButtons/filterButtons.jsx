import React from "react";
import "./filterButtons.scss";

export const FilterButtons = ({ mostrarShops, mostrarProductos }) => {
  return (
    <>
      <div className="filter-buttons-container flex mx-auto w-full items-center justify-center space-x-2">
        <button onClick={mostrarShops}>
          <p>Tiendas</p>
        </button>
        <button onClick={mostrarProductos}>
          <p>Productos</p>
        </button>
        <button>
          <p>Categorías</p>
        </button>
      </div>
    </>
  );
};
