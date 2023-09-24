import React from "react";
import img from "../../assets/supportMaterial/img-support.png";
import { SelectionBar } from "../../components/supportComponents/selectionBar";
import "./support.scss";

export const Support = () => {
  return (
    <>
      <div className="h1-container">
        <h1>Soporte</h1>
      </div>

      <div className="main-support-container">
        <h3>¿Cómo podemos ayudarte?</h3>
        <img src={img} alt="" />
      </div>
      <div className="selectionBar">
        <SelectionBar />
      </div>

      <p className="p">Cuéntanos tu problema de manera detallada:</p>
      <div className="input-comment-container">
        <input type="text" placeholder="Coméntanos aquí..." />
      </div>
      <button className="send-button">
        <p>Enviar</p>
      </button>
      <p className="horario-atencion">
        Te enviaremos la respuesta a tu e-mail en el menor tiempo posible.
        Recuerda que nuestro horario de atención es de lunes a viernes de 9am -
        6pm y sábado - domingo y festivos 9am - 4pm.
      </p>
    </>
  );
};
