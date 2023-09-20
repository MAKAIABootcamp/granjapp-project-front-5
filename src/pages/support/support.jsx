import React from "react";
import img from "../../assets/supportMaterial/img-support.png";
import { SelectionBar } from "../../components/supportComponents/selectionBar";
import "./support.scss"
import StatusBar from "../../components/statusBar/StatusBar";
export const Support = () => {
  return (
    <>
    <StatusBar/>
      <div className="h1-container">
        <h1>Soporte</h1>
      </div>

      <div className="main-support-container">
        <h3>¿Cómo podemos ayudarte?</h3>
        <img src={img} alt="" />
      </div>

      <SelectionBar />

      <p className="p">Cuentanos tu problema detalladamente</p>
      <div className="input-comment-container">
        <input type="text" placeholder="Comentanos aquí..." />

        <button>
          <p>Enviar</p>
        </button>
      </div>

      <p className="horario-atencion">
        Te enviaremos la respuesta a tu e-mail en máximo 4 horas. Recuerda que
        nuestro horario de antecion es de lunes a viernes de 9am-6pm y Sabado,
        Doingo y festivos 9am-4pm.
      </p>
    </>
  );
};
