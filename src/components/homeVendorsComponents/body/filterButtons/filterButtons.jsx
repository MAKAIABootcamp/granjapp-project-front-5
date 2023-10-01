import React from "react";
import "./filterButtons.scss";

export const FilterButtons = ({ mostrarShops, mostrarProductos }) => {
  return (
    <>
      <div className="filter-buttons-container flex mx-auto w-full items-center justify-center space-x-2">
        <button onClick={mostrarShops}>
          <p>Agregar producto</p>
        </button>
        <button onClick={mostrarProductos}>
          <p>Editar producto</p>
        </button>
        <button>
          <p>Eliminar producto</p>
        </button>
      </div>
    </>
  );
};
