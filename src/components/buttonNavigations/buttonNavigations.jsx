import React, { useState } from "react";
import "./buttonNavigations.scss";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { PiClockCounterClockwiseThin, PiUser } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const ButtonNavigations = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const navigate = useNavigate();

  function redirectSearch(e) {
    e.preventDefault();
    navigate("/search");
    setCurrentPage("/search");
  }

  function redirectProfile(e) {
    e.preventDefault();
    navigate("/profile");
    setCurrentPage("/profile");
  }

  const onHome = () => {
    navigate("/auth/login");
  }
  return (
    <div className="flex w-[323px] h-[37px] bottom-0 left-[34px] bg-transparent absolute top-[800px]">
      <IconContext.Provider
        value={{ color: currentPage === "/auth/login" ? "#ffe031" : "#000" }}
      >
        <IoHomeOutline onClick={onHome} className="flex absolute w-8 h-8 left-0" />
      </IconContext.Provider>

      <IconContext.Provider
        value={{ color: currentPage === "/search" ? "#ffe031" : "#000" }}
      >
        <IoIosSearch
          className="flex absolute w-[26px] h-[26px] left-[100px] cursor-pointer"
          onClick={redirectSearch}
        />
      </IconContext.Provider>

      <IconContext.Provider
        value={{ color: currentPage === "history" ? "#ffe031" : "#000" }}
      >
        <PiClockCounterClockwiseThin className="flex absolute w-8 h-8 left-[194px] cursor-pointer" />
      </IconContext.Provider>
      <IconContext.Provider
        value={{ color: currentPage === "/profile" ? "#ffe031" : "#000" }}
      >
        <PiUser
          className="flex absolute w-8 h-8 left-[291px] cursor-pointer"
          onClick={redirectProfile}
        />
      </IconContext.Provider>
    </div>
  );
};

export default ButtonNavigations;
