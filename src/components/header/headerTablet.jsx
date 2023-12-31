import React, { useEffect, useState, useRef } from "react";
import { currentTime } from "../../services/currentTime.js";
import { BsFillBarChartFill, BsSearch, BsCart } from "react-icons/bs";
import { IoWifi, IoBatteryFullSharp } from "react-icons/io5";
import "./header.scss";
import SearchPage from "../../pages/searchPage/searchPage.jsx";
import DropdownMenu from "../menuDropdown/menuDropdown.jsx";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userAuth/userAuthSlice.js";
import { useNavigate } from "react-router";

const HeaderTablet = () => {
  const [time, setTime] = useState(currentTime());
  const [inputSearch, setInputSearch] = useState();
  /** @type string */
  const [userName, setUserName] = useState("");

  const userState = useSelector(selectUser);

  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setUserName(userState.displayName);
  }, [userState]);


  const onSearch = () => {
    if (inputRef.current.value !== "") {
      setInputSearch(inputRef.current.value);
    } else {
      setInputSearch("");
    }
  };

  const onCart = () => {
    navigate("shoppingCart")
  
  }

  return (
    <div className="tablet flex-col">
      <div className="div">
        <section className="timeTablet">{time}</section>
        <section className="iconosTablet">
          <BsFillBarChartFill />
          <IoWifi />
          <IoBatteryFullSharp />
        </section>
      </div>

      <section className="flex justify-between w-full">
        <DropdownMenu className="justify-start w-4 flex relative" />
        <div className="inputSearchTablet items-baseline">
          <input
            type="text"
            placeholder="Buscar en granjapp"
            className="rounded-[10px] bg-[#b6f1d7] flex mx-auto text-[14px] cursor-pointer inputSearchTablet__inputBusq focus:ring-1 focus:outline-none"
            onClick={onSearch}
            name="searchText"
            ref={inputRef}
          />
          {inputSearch !== "" && <SearchPage searchInput={inputSearch} />}
          <BsSearch className="searchIconTablet " />
          <BsCart onClick={onCart} className="inputSearchTablet__inputCartT " />
        </div>
        {userName && (
          <div className="flex-col items-center text-center mx-auto px-2 text-[15px]">
            <p>Bienvenido</p>
            <strong>{userName.split(" ")[0]}</strong>
          </div>
        )}
      </section>
    </div>
  );
};

export default HeaderTablet;
