import React from 'react'
import "./storiesCarousel.scss"

export const StoriesCard = ({
    logo = "",
  }) => {
  return (
    <div className="carousel-container">
    <div  className= "story-avatar" >
         <img src={logo} alt="" />
       </div>
   </div>
  )
}
