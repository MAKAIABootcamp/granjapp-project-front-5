import React, { useState } from "react";
import "./cartStyles.scss";
import { AiFillMinusCircle, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { BsPlusCircleFill } from "react-icons/bs";
import {
  addToCart,
  updateCartItemSubtotal,
  updateCartItemTotal,
  updateCartItemQuantity,
  setProcessedPurchase,
  removeFromCart,
} from "../../store/granjApp/granjAppSlice";
import {
  updateCartFirestore,
} from "../../store/granjApp/granjAppThunks";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../store/userAuth/userAuthSlice";

export const CardAddedProduct = ({id, productId,
  name,
  storeId,
  url,
  weight,
  cost,
  quantity,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(quantity * cost);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const total = subtotal + 4000;

  const userRef = useSelector(selectUser);

  const handleIncrement = async () => {
    if (productId) {
      setNewQuantity(newQuantity + 1);
      const newSubtotal = newQuantity * cost;
      setSubtotal(newSubtotal);
      dispatch(updateCartItemSubtotal(productId, newQuantity, newSubtotal));

      const newTotal = newSubtotal + 4000;
      dispatch(updateCartItemTotal(productId, newTotal));
      await updateCartFirestore(id, newQuantity, cost);
    }
  };

  const handleDecrement = async () => {
    if (productId && newQuantity > 0) {
      setNewQuantity(newQuantity - 1);
      const newSubtotal = newQuantity * cost;
      setSubtotal(newSubtotal);
      dispatch(updateCartItemSubtotal(productId, newQuantity, newSubtotal));

      const newTotal = newSubtotal + 4000;
      dispatch(updateCartItemTotal(productId, newTotal));
      await updateCartFirestore(id, newQuantity, cost);
    }
  };

  const handleDelete = () => {
    dispatch(removeFromCart(productId));
  };

  const handlePagar = () => {
    dispatch(updateCartItemQuantity({ id: productId, newQuantity }));
    dispatch(
      setProcessedPurchase({
        product: { name, storeId, url, weight, cost, quantity, productId },
        metodoPago: null,
        fecha: new Date(),
        comprador: "",
      })
    );
    navigate("shopping");
  };
  return (
    <>
      <div className="productsCart-container">
        <section className="card-productCart-container">
          <div className="titleShop-deleteButton-container">
            <h3 className="h3-title">{storeId}</h3>
            <button
              onClick={() => handleDelete()}
              className="delete-button-cart"
            >
              <AiOutlineDelete className="icon-delete" />
            </button>
          </div>

          <div className="infoProduct-add-container">
            <div className="info-price-container">
              <div className="img-nameProduct-container">
                <img src={url} className="img-logo" />
                <p className="lil-info">
                  {name} x {weight}
                </p>
              </div>
              <div className="quantity-container">
                <button
                  onClick={() => handleDecrement()}
                  className="button-minus-container"
                >
                  <AiFillMinusCircle className="button" />
                </button>
                <div className="number-container">
                  <p>{newQuantity}</p>
                </div>
                <button
                  onClick={handleIncrement}
                  className="button-plus-container"
                >
                  <BsPlusCircleFill className="button" />
                </button>
              </div>
              <div className="price-container">
                <p className="price">$ {subtotal}</p>
              </div>
            </div>

            <div className="tarifaDomi-container">
              <p className="title-tarifa">Tarifa de entrega</p>
              <p className="price-tarifa">$ 4000</p>
            </div>
            <div className="total-container">
              <p>{total}</p>
              <button onClick={() => handlePagar()}>Pagar</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
