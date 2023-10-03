import React, { useState } from "react";
import AmericaExpressLogo from "../../assets/american-express.png";
import VisaLogo from "../../assets/visa-logo.png";
import MasterCardLogo from "../../assets/MasterCard.png";
import PaypalLogo from "../../assets/Paypal.png";
import { Link } from "react-router-dom";

import "./metodoPago.scss";

import { FiArrowLeft, FiArrowRight, FiLock } from "react-icons/fi";

function MetodoPagos() {
  const [selectedCard, setSelectedCard] = useState("");

  const handleCardSelection = (cardType) => {
    setSelectedCard(cardType);
  };

  return (
    <div className="metodo-container" id="metodo-container">
      <header className="container header">
        <div className="metodos-pago">
          <div className="">
            <h1 className="metodo-tittle">Métodos de pago</h1>
          </div>
          <ul className="lista-metodos">
            <button
              className={selectedCard === "visa" ? "selected" : ""}
              onClick={() => handleCardSelection("visa")}
            >
              <img src={VisaLogo} alt="" />
            </button>
            <button
              className={selectedCard === "mastercard" ? "selected" : ""}
              onClick={() => handleCardSelection("mastercard")}
            >
              <img src={MasterCardLogo} alt="" />
            </button>
            <button
              className={selectedCard === "amex" ? "selected" : ""}
              onClick={() => handleCardSelection("amex")}
            >
              <img src={AmericaExpressLogo} alt="" />
            </button>
            <button
              className={selectedCard === "paypal" ? "selected" : ""}
              onClick={() => handleCardSelection("paypal")}
            >
              <img src={PaypalLogo} width="60" />
            </button>
          </ul>
        </div>
      </header>
      <main className="container">
        <form action="">
          <h3 className="form-tittle">Tus datos de pago</h3>
          <div className="form-pago">
            <div>
              <label for="">Titular de la tarjeta</label>
              <input type="text" placeholder="Ej: Maria Paloma" />
            </div>
            <div>
              <label for="">Número de tarjeta</label>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
            </div>
            <div>
              <label for="">Fecha de vencimiento</label>
              <input type="text" placeholder="MM/YYYY" />
            </div>
            <div>
              <label for="">
                CVV <i className="ri-information-line"></i>
              </label>
              <input type="text" placeholder="Ej: 123" />
            </div>
          </div>
          <div className="info-pago">
            <div className="">
              <h4>Monto total</h4>
              <p>
                Ver detalles <FiArrowRight></FiArrowRight>
              </p>
            </div>
            <h3 className="price">$10.000 COP</h3>
            <span className="check">
              <input type="checkbox" name="" id="" />
              Guardar datos para futuras compras
            </span>
          </div>
        </form>
        <div className="buttonPagar-container">
          <button type="submit" className="buttonPagar" id="buttonPagar">
            Pagar ahora
          </button>
        </div>
      </main>
    </div>
  );
}

export default MetodoPagos;
