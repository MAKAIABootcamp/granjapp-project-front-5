import React from "react";
import locationButton from "../../../../assets/icons/lni_lni-map-marker.png";
import carIcon from "../../../../assets/icons/Group.png";
import notificationsIcon from "../../../../assets/icons/Vector.svg";
import messagesIcon from "../../../../assets/icons/icon_messages.png";
import "./buttonsMain.scss";

export const ButtonsMain = () => {
  return (
    <>
      <div className="buttons-container">
        <button className="locationButton-container">
          <img className="locationButton" src={locationButton} alt="" />
        </button>
        <div className="buttons-right-main">
          <button>
            <img src={carIcon} alt="" />
          </button>
          <button>
            <img src={notificationsIcon} alt="" />
          </button>
          <button>
            <img src={messagesIcon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
