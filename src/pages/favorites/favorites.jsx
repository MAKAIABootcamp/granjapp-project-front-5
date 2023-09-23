import React from 'react'
import canasta from "../../assets/canasta.png"
import "./favorites.scss"
import StatusBar from '../../components/statusBar/StatusBar'

export const Favorites = () => {
  return (
    <>          
      <div className='h1-favorites-container'>
            <h1>Favoritos</h1>
        </div>
        <section className='section-favorites-container'>
            <img src={canasta} alt="" />
            <h3>Vacío...</h3>
            <p>Aún no has agregado productos a tus favoritos.</p>
        </section>
    
    </>
  )
}
