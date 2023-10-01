import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./productCarousel.scss"
import { ProductCard } from './productCard';
import { getProductByCategorie } from '../../../../firebase/Products';
import { async } from '@firebase/util';

export const ProductCarousel = (prop) => {

    const {product} = useSelector ( state => state.granjApp);
  useEffect(() =>  {
    if (!prop.categorie){ setProducts(product) }
    else {
      const getProducts = async () => {
        const productsCategorie = await (getProductByCategorie(prop.categorie))
        console.log(productsCategorie);
        setProducts (productsCategorie);
      }
  
      getProducts();
    }
    
  },[,prop.categorie]) 

  const [products, setProducts] = useState(product);
  return (
    <div className='carouselProducts-container'>

    {

      products.map ( product => (
        <ProductCard key={product.id} {...product} />
      ))
     
    }
   
    
   
  
  </div>
  )
}
