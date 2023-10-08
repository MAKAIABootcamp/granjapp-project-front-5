import React from 'react'
import { useSelector } from 'react-redux';
import { CardAddedProduct } from './cardAddedProduct';

export const CarouselAddedProduct = () => {

    const {cart} = useSelector ( state => state.granjApp);

  return (
    <div >

    {

      cart.map ( cart => (
        <CardAddedProduct key={cart.id} {...cart} />
      ))
     
    }
   
    
   
  
  </div>
  )
}