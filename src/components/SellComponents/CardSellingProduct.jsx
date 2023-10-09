import React, { useState } from "react";
import "./cartStyles.scss";
import { AiFillMinusCircle, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { BsPlusCircleFill, BsSendCheck } from "react-icons/bs";
import {
  addToCart,
  updateCartItemSubtotal,
  updateCartItemTotal,
  updateCartItemQuantity,
  setProcessedPurchase,
  removeFromCart,
} from "../../store/granjApp/granjAppSlice";
import { updateCartFirestore } from "../../store/granjApp/granjAppThunks";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../store/userAuth/userAuthSlice";

const CardSellingProduct = ({ compra }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cost, name, quantity, url, weight } = compra.product;

  const userRef = useSelector(selectUser);

  // const handleIncrement = async () => {
  //   if (productId) {
  //     setNewQuantity(newQuantity + 1);
  //     const newSubtotal = newQuantity * cost;
  //     setSubtotal(newSubtotal);
  //     dispatch(updateCartItemSubtotal(productId, newQuantity, newSubtotal));

  //     const newTotal = newSubtotal + 4000;
  //     dispatch(updateCartItemTotal(productId, newTotal));
  //     await updateCartFirestore(id, newQuantity, cost);
  //   }
  // };

  // const handleDecrement = async () => {
  //   if (productId && newQuantity > 0) {
  //     setNewQuantity(newQuantity - 1);
  //     const newSubtotal = newQuantity * cost;
  //     setSubtotal(newSubtotal);
  //     dispatch(updateCartItemSubtotal(productId, newQuantity, newSubtotal));

  //     const newTotal = newSubtotal + 4000;
  //     dispatch(updateCartItemTotal(productId, newTotal));
  //     await updateCartFirestore(id, newQuantity, cost);
  //   }
  // };

  // const handlePagar = () => {
  //   dispatch(updateCartItemQuantity({ id: productId, newQuantity }));
  //   dispatch(
  //     setProcessedPurchase({
  //       product: { name, storeId, url, weight, cost, quantity, productId },
  //       metodoPago: null,
  //       fecha: new Date(),
  //       comprador: "",
  //     })
  //   );
  //   navigate("shopping");
  // };
  return (
    <div className="w-full lg:p-5 lg:m-5 m-2 p-2 bg-white border border-gray-200 rounded-lg shadow ">
      <img className="rounded-t-lg object-cover lg:w-full md:w-full" src={url} alt="" />
      <div className="inline-flex mx-auto w-full items-center justify-between">
        <div className="p-5 flex-col">
          <h2 className="mb-2 capitalize text-xl font-bold tracking-tight text-gray-900 ">
            {name}
          </h2>
          <p className="mb-3 font-normal text-gray-700">
            Total Pagado: {cost * quantity}
          </p>
          <p>Precio Unidad: {cost}</p>
          <p>Cantidad: {quantity}</p>
          <span>comprador: {compra.comprador}</span>
        </div>
        <div className="lg:p-5 p-2 flex items-center justify-center w-auto ml-auto">
          <button className="text-green-600" title="Enviar producto" >
            <BsSendCheck className="w-12 h-12 animate-pulse " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSellingProduct;
