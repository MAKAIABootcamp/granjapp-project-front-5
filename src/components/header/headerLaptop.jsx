import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/userAuth/thunks";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo1.png";
import LocationLaptop from "../location/locationLaptop";
import { BsBell, BsSearch, BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const HeaderLaptop = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#34d116] h-[60px] w-[1440px] flex relative">
      <FiMenu className="flex absolute top-6 left-6" />
      <img src={logo} className="flex absolute w-18 h-10 left-14 top-2" />
      <LocationLaptop />
      <div
        className="bg-[#b6f1d7] h-6
       top-5 flex relative left-[480px] rounded-[10px] w-[410px] "
      >
        <BsSearch className="w-4 h-4 top-1 flex absolute left-1" />
        <input
          type="text"
          placeholder="Buscar en granjapp"
          className="rounded-[10px] bg-[#b6f1d7] flex absolute left-6 text-[14px] h-6 pl-2 w-[386px]"
        />
        <AiOutlineUser className="flex absolute h-6 w-6 left-[470px] top-0" />
        <BsBell className="flex absolute h-6 w-6 left-[520px] top-0" />
        <BsCart className="flex absolute h-6 w-6 left-[570px] top-0" />
        <button
          onClick={() => dispatch(startLogout())}
          className="flex absolute h-6 w-[30px] left-[610px] top-0 border-white border-1 rounded-[5px]"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default HeaderLaptop;
