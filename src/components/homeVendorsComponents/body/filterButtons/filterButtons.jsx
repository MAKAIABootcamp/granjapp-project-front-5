import React from "react";
import "./filterButtons.scss";

export const FilterButtons = ({ activeComponent }) => {
  const handleClick = (e) => {
    console.log(e.target.getAttribute("name"));
  };

  return (
    <div className="filter-buttons-container inline-flex rounded-md shadow-sm mx-auto w-full items-center justify-center space-x-2">
      <button
        type="button"
        name="products"
        onClick={() => {
          activeComponent("products");
        }}
      >
        <p>Ver productos</p>
      </button>
      <button
        type="button"
        className=""
        name="add"
        onClick={() => {
          activeComponent("add");
        }}
      >
        Agregar producto
      </button>
    </div>
  );
};
