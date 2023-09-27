import React from "react";
import { useDispatch } from "react-redux";
import { setActiveShop } from "../../../../store/granjApp/granjAppSlice";
import start4 from "../../../../assets/Stars4.png";
import "./shopsCarousel.scss";
import { useNavigate } from "react-router-dom";

export const ShopCard = ({
  title = "",
  logo = "",
  description = "",
  id,
  workingTime = "",
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickShop = () => {
    dispatch(setActiveShop({ id, title, description, workingTime, logo }));
    navigate('detailStore');
  };

  return (
    <section onClick={onClickShop} className="card-container">
      <img src={logo} className="img-logo" />
      <div className="info-card-container">
        <h3 className="h3-title">{title}</h3>
        <img src={start4} alt="stars" className="stars-shops" />
        <p className="workTime">{workingTime}</p>
      </div>
    </section>
  );
};
