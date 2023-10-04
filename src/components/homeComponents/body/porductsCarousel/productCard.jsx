import React from "react";
import { useDispatch } from "react-redux";
import { setActiveShop } from "../../../../store/granjApp/granjAppSlice";
import motoIcon from "../../../../assets/icons/moto-icon.svg";
import ubiIcon from "../../../../assets/icons/ubi-icon.svg";
import "./productCarousel.scss";
import { useNavigate } from "react-router";

export const ProductCard = ({
  name = "",
  url = "",
  rating = "",
  id,
  weight = "",
  cost,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickProduct = () => {
    dispatch(setActiveShop({ id, name, weight, rating, url, cost }));
    navigate("/product/" + id);
  };

  return (
    <section onClick={onClickProduct} id="card-product-container" className="card-product-container">
      <img src={url} className="img-logo" />
      <div className="infoProduct-card-container">
        <h3 className="h3-title">{name}</h3>
        <img src={rating} alt="stars" className="stars" />
        <p className="lil-info">
          {name} x{weight}
        </p>
        <div className="domi-info">
          <div className="cost-domi-section">
            <img src={motoIcon} alt="moto-icon" />
            <p>$2.500</p>
          </div>
          <section className="dist-domi-section">
            <img src={ubiIcon} alt="ubi-icon" />
            <p>2km</p>
          </section>
        </div>
      </div>
    </section>
  );
};
