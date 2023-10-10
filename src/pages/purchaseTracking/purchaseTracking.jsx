import React from "react";
import arrow from "../../assets/icons/arrow-circle.svg";
import "./salesTracking.scss";
import { useDispatch, useSelector } from "react-redux";
import { getComprasByUserId } from "../../store/granjApp/granjAppThunks";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { setActivePurchasedProduct } from "../../store/granjApp/granjAppSlice";


export const PurchaseTracking = ({
  id,


    cost,
    name,
    quantity,
    url



}) => {
  const { uid } = useSelector((state) => state.auth);
  const { compras } = useSelector((state) => state.granjApp);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //invocar dispatch de getCompras
    dispatch(getComprasByUserId(uid))
  },[])

  const onProduct = (product) => {
    dispatch(setActivePurchasedProduct(product));
    navigate("/productSelected" );
  }

  return (
    <>
      <div className="h1-SalesTracking-container">
        <h1>Seguimiento de compras</h1>
      </div>
      <h3 className="h3-SalesTracking-container">Seleccione un producto:</h3>
      <div className="body-container-salesTracking">
      { compras?.map(item =>
        <div
          className="body-salesTracking-container"
          id="body-salesTracking-container"
        >
          <div className="card-productSend-container">
            <div className="info-productSend-container">
              <img
                src={item.product.url}
                alt=""
              />
              <section className="section-productSend-container">
                <h3>{item.product.name}</h3>
                <p>Cantidad: {item.product.quantity}</p>
                <p>Total: {item.product.quantity * item.product.cost}</p>
              </section>
            </div>

            <div className="iconarrow-container">
              <button onClick={() => onProduct(item.product)}>
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
        )
        }
      </div>
     
    </>
  );
};
