import React from "react";
import inicio from "../../assets/mobileNavBar/Home.svg";
import foro from "../../assets/mobileNavBar/foro.svg";
import soporte from "../../assets/mobileNavBar/soporte.svg";
import ventas from "../../assets/mobileNavBar/Ventas.svg";
import favoritos from "../../assets/mobileNavBar/favoritos.svg";
import perfil from "../../assets/mobileNavBar/Profile.svg";
import cruz from "../../assets/mobileNavBar/cruz.svg";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startNewPost } from "../../store/granjApp/granjAppThunks";
import { setActivePost } from "../../store/granjApp/granjAppSlice";

import "./mobileNavbar.scss"

const MobileNavbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isSaving, activePost} = useSelector(state => state.granjApp);
  const onHome = () => {
    navigate("/");
  };
  const onSupport = () => {
    navigate("support");
  };

  const onFavorites = () => {
    navigate("favorites");
  };
  const onVentas = () => {
    navigate('salesTracking');
  }
  const onForo = () => {
    navigate('foro');
  }

  const handleOpenForm = () => {
    console.log('abrir modal');
    dispatch(setActivePost(!activePost))
  }
  return (
    <>
      <div className="mobileNavBar-container">
        <div className="left-navBar-container">
          <button onClick={onHome}>
            <img src={inicio} alt="" />
            <p>Inicio</p>
          </button>
          <button onClick={onForo}>
            <img src={foro} alt="" />
            <p>Foro</p>
          </button>
          <button onClick={onSupport}>
            <img src={soporte} alt="" />
            <p>Soporte</p>
          </button>
        </div>
        <div className='button-add-container' onClick={handleOpenForm}>
            <button>
              <img src={cruz} alt="" />
            </button>
        </div>
        <div className="right-navBar-container">
          <button onClick={onVentas}>
            <img src={ventas} alt="" />
            <p>Ventas</p>
          </button>
          <button onClick={onFavorites}>
            <img src={favoritos} alt="" />
            <p>Favoritos</p>
          </button>
          <button>
            <img src={perfil} alt="" />
            <p>Perfil</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
