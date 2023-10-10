import React, { useState } from "react";
import AmericaExpressLogo from "../../assets/american-express.png";
import VisaLogo from "../../assets/visa-logo.png";
import MasterCardLogo from "../../assets/MasterCard.png";
import PaypalLogo from "../../assets/PayPal.png";
import { useLocation,useNavigate  } from "react-router-dom";
import "./metodoPago.scss";
import { FiArrowRight} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";

import Swal from "sweetalert2";
import { addToPurchase, removeCartItemFirestore } from "../../store/granjApp/granjAppThunks";

const formData = {
  nameBuyer: "",
  cardNumber: "",
};

const formValidation = {
  nameBuyer: [(value) => value.length >= 2, "Este campo es obligatorio"],
  cardNumber: [(value) => value.length >= 2, "Este campo es obligatorio"],
};

function MetodoPagos() {
  const [selectedCard, setSelectedCard] = useState("");
  const { processedPurchase } = useSelector((state) => state.granjApp);
  const { uid } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const handleCardSelection = (cardType) => {
    setSelectedCard(cardType);
  };
  const location = useLocation();
const queryParams = new URLSearchParams(location.search);

console.log(queryParams.get("cart"));


  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    nameBuyer,
    cardNumber,
    formState,
    onInputChange,
    nameBuyerValid,
    cardNumberValid,
  } = useForm(formData, formValidation);

 const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    

    const formData = {
      ...processedPurchase,
      comprador:nameBuyer,
      compradorId: uid,
      metodoPago: `${selectedCard} ${cardNumber}`,
    };
    console.log("data", formData)
    dispatch(addToPurchase(formData));
    Swal.fire("Felicitaciones", "Has realizado tu pago exitosamente, puedes ver los detalles de tu pedido en el menú mis pedidos", "success")
    dispatch(await removeCartItemFirestore(queryParams.get("cart")));
    navigate("/purchaseTracking")
    
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
              <label>Titular de la tarjeta</label>
              <input
                onChange={onInputChange}
                name="nameBuyer"
                value={nameBuyer}
                type="text"
                placeholder="Ej: Maria Paloma"
              />
            </div>
            <div>
              <label>Número de tarjeta</label>
              <input
                onChange={onInputChange}
                name="cardNumber"
                value={cardNumber}
                type="text"
                placeholder="XXXX XXXX XXXX XXXX"
              />
              {/* {formSubmitted && !nameBuyerValid && (
                <span className="error-message">
                  {formValidation.nameBuyer[1]}
                </span>
              )} */}
            </div>
            <div>
              <label>Fecha de vencimiento</label>
              <input type="text" placeholder="MM/YYYY" />
            </div>
            <div>
              <label>
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
            <h3 className="price">
              $
              {processedPurchase?.product?.quantity *
                processedPurchase?.product?.cost}{" "}
              COP
            </h3>
            <span className="check">
              <input type="checkbox" name="" id="" />
              Guardar datos para futuras compras
            </span>
          </div>
        </form>
        <div className="buttonPagar-container">
          <button
            onClick={onSubmit}
            type="submit"
            className="buttonPagar"
            id="buttonPagar"
          >
            Pagar ahora
          </button>
        </div>
      </main>
    </div>
  );
}

export default MetodoPagos;
