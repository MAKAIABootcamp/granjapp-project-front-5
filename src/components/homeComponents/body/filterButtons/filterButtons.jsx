import React from "react";
import "./filterButtons.scss";

export const FilterButtons = ({ mostrarShops, mostrarProductos }) => {
  return (
    <>
      <div className="filter-buttons-container">
        <button onClick={mostrarShops}>
          <p>Tiendas</p>
        </button>
        <button  onClick={mostrarProductos}>
          <p>Productos</p>
        </button>
        <button>
          <p>Cateogrias</p>
        </button>
      </div>
    </>
  );
};
