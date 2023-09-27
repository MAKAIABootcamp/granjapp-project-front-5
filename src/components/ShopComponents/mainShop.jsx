import React from "react";
import "../../pages/shopDetails/shopStyle.scss";
import stars from '../../assets/Stars4.png'
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import "./mainShop.scss"


export const MainShop = () => {

  const { activeShop } = useSelector(
  (state) => state.granjApp
);

const {  title, logo, description, workTime } = useForm(activeShop);
  return (
    <>
      <div className="shop-container">
        <div className="img-logoShop-container">
          <img
            src={logo}
            alt=""
          />
        </div>
        <div className="info-shopContanier">
          <section className="section-infoShop-container">
            <h1>{title}</h1>
            <p>
              {description}
            </p>
            <p>{workTime}</p>
            <div className="stars-container">
            <img src={stars} alt="" />
          </div>
          </section>
          
          <p className="p-productos-en-venta">Productos en venta: </p>
        </div>
      </div>
    </>
  );
};

// {id, title ='', logo = '', description= '', workTime=''}
// const { activeRestaurant: restaurant } = useSelector(
//   (state) => state.foodApp
// );

// const { id, title, logo, description, workTime } = useForm(restaurant);
