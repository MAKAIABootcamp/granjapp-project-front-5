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
      {userName && (
          <div className="flex-col items-center justify-center mx-auto p-1 hover:cursor-pointer px-2" onClick={() => dispatch(startLogout())}>
            <img className="object-cover h-12 w-12 rounded-full flex items-center mx-auto" src={userState.photoURL} />
            <strong className="text-center">{userName.split(" ")[0]}</strong>
          </div>
        )}
      <div className="flex items-center justify-center text-center space-x-3 p-2 mx-3 text-[15px] ">
        <BsCart className="h-6 w-6" />
      </div>
    </div>
  );
};

export default HeaderLaptop;
