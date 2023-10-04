import React, { useState } from "react";
import "./supportStyle.scss";

export const SelectionBar = () => {
  const [selectedOption, setSelectedOption] = useState(""); // Estado para rastrear la opción seleccionada

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="selectionBar-container">
        <select onChange={handleSelectChange} value={selectedOption} className="bar">
          <option value="">Selecciona una opción</option>
          <option value="cancelaciones">Cancelaciones</option>
          <option value="problemas">Problemas con pedido</option>
          <option value="cuenta">Mi cuenta</option>
          <option value="reembolso">Reembolso</option>
          <option value="facturacion">Facturación</option>
          <option value="garantias">Garantías</option>
          <option value="informacion">Información</option>
        </select>
      </div>
    </>
  );
};
