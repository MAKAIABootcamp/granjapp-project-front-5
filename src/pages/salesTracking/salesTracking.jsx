import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMarketAction } from "../../store/sales/salesThunks";
import arrow from "../../assets/icons/arrow-circle.svg";
import "./salesTracking.scss";
import StatusBar from "../../components/statusBar/StatusBar";
import save from "../../assets/icons/save.svg";

export const SalesTracking = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getMarketAction(uid));
  }, [uid]);

  return (
    <>
      <div className="h1-SalesTracking-container">
        <h1>Seguimiento de venta</h1>
      </div>
      <h3 className="h3-SalesTracking-container">Seleccione su producto:</h3>
      <div className="body-container-salesTracking">
        <div
          className="body-salesTracking-container"
          id="body-salesTracking-container"
        >
          <div className="card-productSend-container">
            <div className="info-productSend-container">
              <img
                src="https://imagenes.20minutos.es/files/image_654_369/uploads/imagenes/2022/07/22/huevos.jpeg"
                alt=""
              />
              <section className="section-productSend-container">
                <h3>Huevos</h3>
                <p>Huevos AAA x30und</p>
              </section>
            </div>

            <div className="iconarrow-container">
              <button>
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="body-container-salesTracking">
        <div
          className="body-salesTrackingSelected-container"
          id="body-salesTracking-container"
        >
          <div className="card-productSend-container">
            <div className="info-productSend-container">
              <img
                src="https://imagenes.20minutos.es/files/image_654_369/uploads/imagenes/2022/07/22/huevos.jpeg"
                alt=""
              />
              <section className="section-productSend-container">
                <h3>Huevos</h3>
                <p>Huevos AAA x30und</p>
              </section>
            </div>
          </div>
          <div className="tracking-container">
            <div className="p-buttonSave-container">
              <p>Seleccione cómo va su producto y guarde el estado:</p>
              <button>
                <img src={save} alt="" />
              </button>
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

          <button className="confirm-sale-button">Confirmar venta</button>
        </div>
      </div>
    </>
  );
};
