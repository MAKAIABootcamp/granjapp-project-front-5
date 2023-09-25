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
import { useDispatch, useSelector } from 'react-redux';
import { startNewPost } from '../../store/granjApp/granjAppThunks';
import { setActivePost } from '../../store/granjApp/granjAppSlice';

const MobileNavbar = ({id, image='', description= ''}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isSaving} = useSelector(state => state.granjApp);
  const onHome = () => {
    navigate('home');
  }
  const onSupport = () => {
    navigate('soporte');
  }

  const onFavorites = () => {
    navigate('favoritos');
  }
  const onVentas = () => {
    navigate('seguimientoVentas');
  }

  const onForo = () => {
    navigate('foro');
  }

  const onNewPost = () => {
    dispatch(startNewPost());
    dispatch (setActivePost({ id, image, description}))
  }
  return (
    <>
      <div id='mobileNavbar' className='mobileNavBar-container'>
        <div className='left-navBar-container'>
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
        <div className='button-add-container'>
            <button onClick={onNewPost}
            disabled={isSaving}>
              <img src={cruz} alt="" />
            </button>
        </div>
        <div className='right-navBar-container' >
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
  )
}

export default MobileNavbar