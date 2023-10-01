import React from 'react'
import { ShopCard } from './shopCard';
import { useSelector } from 'react-redux';
import "./shopsCarousel.scss"

export const ShopsCarousel = () => {

    const {shop} = useSelector ( state => state.granjApp);

  return (
    <div className='carouselShops-container'>

    {

      shop.map ( shop => (
        <ShopCard key={shop.id} {...shop} />
      ))
     
    }
   
    
   
  
  </div>
  )
}
