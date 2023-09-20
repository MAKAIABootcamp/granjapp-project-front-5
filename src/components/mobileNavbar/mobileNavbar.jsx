import React from 'react'
import inicio from '../../assets/mobileNavBar/Home.svg';
import foro from '../../assets/mobileNavBar/foro.svg';
import soporte from '../../assets/mobileNavBar/soporte.svg';
import ventas from '../../assets/mobileNavBar/Ventas.svg';
import favoritos from '../../assets/mobileNavBar/favoritos.svg';
import perfil from '../../assets/mobileNavBar/Profile.svg';
import cruz from '../../assets/mobileNavBar/cruz.svg';
import './mobileNavBar.scss';
import { useNavigate } from 'react-router-dom';

const MobileNavbar = () => {

  const navigate = useNavigate();
  const onHome = () => {
    navigate('home');
  }
  const onSupport = () => {
    navigate('support');
  }
  return (
    <>
      <div className='mobileNavBar-container'>
        <div className='left-navBar-container'>
          <button onClick={onHome}>
            <img src={inicio} alt="" />
            <p>Inicio</p>
          </button>
          <button>
            <img src={foro} alt="" />
            <p>Foro</p>
          </button>
          <button onClick={onSupport}>
            <img src={soporte} alt="" />
            <p>Soporte</p>
          </button>
        </div>
        <div className='button-add-container'>
            <button>
              <img src={cruz} alt="" />
            </button>
        </div>
        <div className='right-navBar-container' >
        <button>
            <img src={ventas} alt="" />
            <p>Ventas</p>
          </button>
          <button>
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
  )
}

export default MobileNavbar