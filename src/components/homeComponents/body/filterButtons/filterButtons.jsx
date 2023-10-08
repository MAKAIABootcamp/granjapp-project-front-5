import React from "react";
import "./filterButtons.scss";

export const FilterButtons = ({ mostrarShops, mostrarProductos }) => {
  return (
    <>
      <div className="filter-buttons-container">
        <button className="button-filter" onClick={mostrarShops}>
          <p>Tiendas</p>
        </button>
        <button className="button-filter" onClick={mostrarProductos}>
          <p>Productos</p>
        </button>
      </div>
    </>
  );
};
