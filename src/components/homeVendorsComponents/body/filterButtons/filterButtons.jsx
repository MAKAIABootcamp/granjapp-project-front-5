import React from "react";
import "./filterButtons.scss";

export const FilterButtons = ({ activeComponent }) => {

  const handleClick = (e) => {
    console.log(e.target.getAttribute("name"))
  }

  return (

      <div
        className="filter-buttons-container inline-flex rounded-md shadow-sm mx-auto w-full items-center justify-center space-x-2"
      >
        <button
          type="button"
          name="products"
          onClick={() => {activeComponent("products")}}
        >
          <p>Ver productos</p>
        </button>
        <button type="button" name="add" onClick={() => {activeComponent("add")}}>
          Agregar producto
        </button>
        <button type="button" name="update" onClick={() => {activeComponent("update")}}>
          <p>Editar producto</p>
        </button>
        <button type="button" name="delete" onClick={() => {activeComponent("delete")}}>
          <p>Eliminar producto</p>
        </button>
      </div>

  );
};
