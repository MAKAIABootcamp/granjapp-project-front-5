import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/userAuth/thunks";
import logo from "../../assets/logo_fixed.png";
import LocationLaptop from "../location/locationLaptop";
import { BsBell, BsSearch, BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import DropdownMenu from "../menuDropdown/menuDropdown";
import { NavLink } from "react-router-dom";
import SearchPage from "../../pages/searchPage/searchPage";
import { selectUser } from "../../store/userAuth/userAuthSlice";

const HeaderLaptop = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const [inputSearch, setInputSearch] = useState();
  /** @type string */
  const [userName, setUserName] = useState();

  const userState = useSelector(selectUser);

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
      <div className="flex items-center justify-center text-center space-x-3 p-2 text-[15px] ">
        {/* <AiOutlineUser className=" h-6 w-6" /> */}
        {/* <BsBell className="h-6 w-6" /> */}
        {userName && (
          <div className="flex-col items-center mx-auto w-full">
            <p>Bienvenido</p>
            <strong className="text-center">{userName.split(" ")[0]}</strong>
          </div>
        )}
        <BsCart className="h-6 w-6" />
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
