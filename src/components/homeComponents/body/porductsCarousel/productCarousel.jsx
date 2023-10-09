import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./productCarousel.scss"
import { ProductCard } from './productCard';
import { getProductByCategorie } from '../../../../firebase/Products';
import { async } from '@firebase/util';
import { useLocation, useParams } from 'react-router-dom';

export const ProductCarousel = (prop) => {

    const {product} = useSelector ( state => state.granjApp);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

  
    useEffect(() =>  {
    if (!queryParams.get('category')){ setProducts(product) }
    else {
      const getProducts = async () => {
        const productsCategorie = await (getProductByCategorie(queryParams.get('category')))
        console.log(productsCategorie);
        setProducts (productsCategorie);
      }
  
      getProducts();
    }
    
  },[queryParams.get('category')]) 

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
