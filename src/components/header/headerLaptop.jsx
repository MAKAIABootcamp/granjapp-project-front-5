import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/userAuth/thunks";
import logo from "../../assets/logo_fixed.png";
import LocationLaptop from "../location/locationLaptop";
import { BsBell, BsSearch, BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import DropdownMenu from "../menuDropdown/menuDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import SearchPage from "../../pages/searchPage/searchPage";

const HeaderLaptop = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const navigate = useNavigate();

  const [inputSearch, setInputSearch] = useState();

  const cart = useSelector((state) => state.granjApp.cart);

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
    <div className="bg-[#34d116] h-15 w-full flex mx-auto justify-center items-center">
      {/* <DropdownButton /> */}
      {/* Dropdown menu */}

      <DropdownMenu />

      {/* End of Dropdown menu */}
      <NavLink to="/">
        <img src={logo} width={150} height={150} className="p-2 flex" />
      </NavLink>

      <LocationLaptop />
      <div className="flex-col w-full">
        <div className="bg-[#b6f1d7] mx-auto flex items-center justify-stretch rounded-[10px] w-full ">
          <BsSearch className="w-4 h-4 mx-2" />

          <div className="flex-col w-full">
            <input
              type="text"
              placeholder="Buscar en granjapp"
              className="rounded-[10px] bg-[#b6f1d7] w-full flex mx-auto text-[14px] "
              onChange={onSearch}
              ref={inputRef}
            />
          </div>
        </div>
        {inputSearch !== "" && <SearchPage searchInput={inputSearch} />}
      </div>
      <div className="flex items-center justify-between space-x-3 p-2 ">
        <AiOutlineUser className=" h-6 w-6" />
        <BsBell className="h-6 w-6" />
        <div className="relative">
          <BsCart onClick={onCart} className="h-6 w-6 cursor-pointer" />
          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
              {cart.length}
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => dispatch(startLogout())}
        className="border p-2 m-2 ml-5 border-green-800 bg-[#29c16e] border-1 rounded-[10px] text-[10px] text-white"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default HeaderLaptop;
