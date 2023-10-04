import React from 'react'
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux';


export const ProductSelected = () => {

    const { activePurchasedProduct } = useSelector(
        (state) => state.granjApp
      );
      
      const {  url, name, quantity} = useForm(activePurchasedProduct);
  return (
    <div className="body-container-salesTracking">
    <div
      className="body-salesTrackingSelected-container"
      id="body-salesTracking-container"
    >
      <div className="card-productSend-container">
        <div className="info-productSend-container">
          <img
            src={url}
            alt=""
          />
          <section className="section-productSend-container">
            <h3>{name}</h3>
            <p>cantidad: {quantity}</p>
          </section>
        </div>
      </div>
      <div className="tracking-container">
        <div className="p-buttonSave-container">
          <p>Estado de la compra:</p>
        </div>
        <div className="status-container">
          <div className="button-status-container">
            <button></button>
            <p>En preparación.</p>
          </div>
          <div className="button-status-container">
            <button></button>
            <p>Producto listo para ser enviado.</p>
          </div>
          <div className="button-status-container">
            <button></button>
            <p>Producto enviado.</p>
          </div>
          <div className="button-status-container">
            <button></button>
            <p>Producto entregado.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
