import React from "react";

import "./comfirmPay.scss";

function ComfirmPay() {
  return (
    <div>
      <h3>Informacion de Envio</h3>
      <form action="">
        <div className="form-container">
          <div className="">
            <label htmlFor="">Departamento</label>
            <select name="departamentos">
              <option value="Amazonas">Amazonas</option>
              <option value="Atlantico">Antioquia</option>
              <option value="Bolivar">Bolivar</option>
              <option value="Boyacá">Boyacá</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="">Ciudad</label>
            <select name="municipios">
              <option value="Calamar">Bogota</option>
              <option value="Cartagena">Cartagena</option>
              <option value="Cantagallos">medellin</option>
              <option value=">Magangué">santander</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="">Complete su dirección de entrega</label>
            <input type="text" placeholder="Cartagena De Indias Bolivar" />
          </div>
          <div className="">
            <label htmlFor="">Calle</label>
            <input type="text" placeholder="Carrera 24A # 83 - 15" />
          </div>
          <div className="">
            <label htmlFor="">Información adicional</label>
            <input type="text" placeholder="Dirección complementaria" />
          </div>
          <div className="">
            <label htmlFor="">Barrio</label>
            <input type="text" placeholder="Opcional" />
          </div>
        </div>
        <button className="btn-pagar">Comfirmar Pago</button>
      </form>
    </div>
  );
}

export default ComfirmPay;
