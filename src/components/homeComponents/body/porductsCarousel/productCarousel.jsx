import React from 'react'
import { useSelector } from 'react-redux';
import "./productCarousel.scss"
import { ProductCard } from './productCard';

export const ProductCarousel = () => {

    const {product} = useSelector ( state => state.granjApp);

  return (
    <div>

    {

      product.map ( product => (
        <ProductCard key={product.id} {...product} />
      ))
     
    }
   
    
   
  
  </div>
  )
}
