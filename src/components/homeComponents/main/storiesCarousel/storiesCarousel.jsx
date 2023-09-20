import React from 'react'
import { StoriesCard } from './storiesCard'
import { useSelector } from 'react-redux';
import "./storiesCarousel.scss"

const StoriesCarousel = () => {

  const {shop} = useSelector ( state => state.granjApp);

  return (
    <div className="carousel-container">

    {

      shop.map ( shop => (
        <StoriesCard key={shop.id} {...shop} />
      ))
     
    }
   
    
   
  
  </div>
  )
}

export default StoriesCarousel