import React, { useRef, useState, useEffect } from "react";
import { currentTime } from "../../services/currentTime.js";
import { BsFillBarChartFill, BsSearch, BsCart } from "react-icons/bs";
import { IoWifi, IoBatteryFullSharp } from "react-icons/io5";
import DropdownMenu from "../menuDropdown/menuDropdown.jsx";
import SearchPage from "../../pages/searchPage/searchPage.jsx";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const HeaderMobile = () => {
  const [time, setTime] = useState(currentTime());
  const inputRef = useRef();
  const navigate = useNavigate();
  // const inputRefClean = useRef();

  const [inputSearch, setInputSearch] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onSearch = () => {
    if (inputRef.current.value !== "") {
      setInputSearch(inputRef.current.value);
    } else {
      setInputSearch("");
    }
  };

  // const handleBlur = () => {
  //   setInputSearch("");
  // };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setInputSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onCart = () => {
    navigate("shoppingCart")
   
  }

  return (
    <section className="mobile flex-col">
      <div className="div">
        <section className="timeMobile">{time}</section>
        <section className="iconosMobile">
          <BsFillBarChartFill />
          <IoWifi />
          <IoBatteryFullSharp />
        </section>
      </div>
      <section className="flex justify-between w-full">
        <DropdownMenu className="justify-start w-4 flex relative" />
        <div className="inputSearchMobile">
          <input
            type="text"
            placeholder="Buscar en granjapp"
            className="rounded-[10px] bg-[#b6f1d7] flex mx-auto text-[14px]focus:ring-1 focus:outline-none inputSearchMobile__inputBusq"
            onClick={onSearch}
            name="searchText"
            ref={inputRef}
            // onChange={onSearch}
            // onBlur={handleBlur}
          />
          {inputSearch !== "" && <SearchPage searchInput={inputSearch} />}
          <BsSearch className="searchIconMobile cursor-pointer" />
        </div>
        <BsCart onClick={onCart} className="inputSearchMobile__inputCart" />
      </section>
    </section>
  );
};

export default HeaderMobile;
