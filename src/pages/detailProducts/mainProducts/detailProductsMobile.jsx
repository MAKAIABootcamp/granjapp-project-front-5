import React, { useState } from "react";
import { FaFacebookF, FaLinkedin, FaPinterest } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import "./detailProductsMobile.scss";
import "firebase/firestore";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { addToCart } from "../../../store/granjApp/granjAppSlice";
import { addToCartFirestore } from "../../../store/granjApp/granjAppThunks";

const DetailProductsMobile = ({ product }) => {
  const [countProcut, setCountProcut] = useState(0);

  const navigate = useNavigate();

  const handleMinusButton = () => {
    if (countProcut > 0) {
      setCountProcut(countProcut - 1);
    }
  };

  const handlePlusButton = () => {
    setCountProcut(countProcut + 1);
  };

  const handleNavigate = () => {
    navigate("/");
  };

  const handleAddToCart = () => {

    const cantidadProducto = {...product, quantity: countProcut };
    dispatch(addToCart(cantidadProducto));
    dispatch(addToCartFirestore(cantidadProducto));
  };
  return (
    <div className="flex-col ml-2 w-full h-full">
      <div className="p-2">
        <div key={product.id}>
          <p className="mt-2 flex items-center mx-auto justify-center">
            <Link to="/" className="mr-1">
              Inicio/
            </Link>
            <Link to="#" className="mr-1">
              Productos/
            </Link>
            <Link to="#" className="mr-1">
              {product.variety}/
            </Link>
          </p>
          <div className="text-center items-center justify-center">
            <strong>{`${product.name} ${product.weight}`}</strong>
            <img
              src={product.rating}
              className="h-20 flex mx-auto justify-center items-center"
            />
          </div>
          <img
            src={product.url}
            alt={product.name}
            className="rounded-full w-full flex items-center justify-center mx-auto"
          />
        </div>

        <div className="mx-auto items-center justify-center mt-5">
          <p className="text-center p-2">
            <strong>Costo: ${`${product.cost}/${product.unity}`}</strong>
          </p>
          <p className="text-[15px] w-full">{product.description}</p>
        </div>
        <section className="bg-transparent w-full rounded-[15px] flex items-center justify-start space-x-3 mt-2">
          <button
            onClick={handleMinusButton}
            className="border-[1px] rounded-[45px] h-8 w-8 text-white bg-[#34d116] text-lg font-bold btn"
          >
            <AiOutlineMinus className="text-center" />
          </button>
          <strong className="flex text-center items-center justify-center mx-auto">
            {countProcut}
          </strong>
          <button
            onClick={handlePlusButton}
            className="border-[1px] rounded-[45px] h-8 w-8 text-white bg-[#34d116] text-[13px] font-bold btn"
          >
            <AiOutlinePlus className="text-center" />
          </button>
          <button onClick={handleAddToCart} className="flex bg-[#64be51] rounded-[15px] text-white text-center items-center justify-center w-full h-10 p-1">
            <BsCart3 className="h-5" />
            <p className="ml-3 ">Agregar al carrito</p>
          </button>
        </section>
        <button
          onClick={handleNavigate}
          className="flex mt-5 bg-[#57b145] rounded-[15px] text-white text-left mx-auto justify-center p-1 items-center"
        >
          <IoReturnUpBack className="w-5 h-5" />
          <p className="ml-3">Volver</p>
        </button>
        <section className="flex align-baseline mt-10 items-center mx-auto justify-center">
          Comparte:
          <FaFacebookF className="mr-2 top-1 relative" />
          <FaLinkedin className="mr-2 top-1 relative" />
          <RiWhatsappFill className="mr-2 top-1 relative" />
          <FaPinterest className="mr-2 top-1 relative" />
        </section>
        <hr className="flex top-3 relative" />
      </div>
    </div>
  );
};

export default DetailProductsMobile;
