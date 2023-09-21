import React from "react";
import AmericaExpressLogo from "../../assets/AmericanExpress-Logo.png";
import VisaLogo from "../../assets/VISA-Logo.png";
import MasterCardLogo from "../../assets/MasterCard-Logo.png";
import PaypalLogo from "../../assets/Paypal-Logo.png";
import PerfilLogo from "../../assets/perfil.jpg";
import { Link } from "react-router-dom";

import "../metodoPago/MetodoPago.scss";

import { FiArrowLeft, FiArrowRight, FiLock } from "react-icons/fi";

function MetodoPago() {
  return (
    <div className="metodo-container">
      <header className="container header">
        <nav classNameName="nav-pagos">
          <div className="btn-volver">
            <a href="">
              <FiArrowLeft></FiArrowLeft>
            </a>
          </div>
          <h4>Pagar</h4>
          <div className="perfil">
            <img src={PerfilLogo} alt="" />
          </div>
        </nav>
        <div className="metodos-pago">
          <div className="">
            <p className="metodo-tittle">Métodos de pago</p>
            <p className="ver-todo">
              Ver Todos <FiArrowRight></FiArrowRight>
            </p>
          </div>
          <ul className="lista-metodos">
            <li className="selected">
              <img src={VisaLogo} alt="" />
            </li>
            <li>
              <img src={MasterCardLogo} alt="" />
            </li>
            <li>
              <img src={AmericaExpressLogo} alt="" />
            </li>
            <li>
              <img src={PaypalLogo} width="60" />
            </li>
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
          <Link to="comfirmPay">
            <button type="submit" className="btn-pagar">
              Pagar ahora <FiLock></FiLock>
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
}

export default MetodoPago;
