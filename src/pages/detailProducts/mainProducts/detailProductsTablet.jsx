import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedin, FaPinterest } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import "./detailProductsMobile.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { addToCart } from "../../../store/granjApp/granjAppSlice";
import { addToCartFirestore } from "../../../store/granjApp/granjAppThunks";

const DetailProductsTablet = ({ product }) => {
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
    <div className="mt-10 w-full h-full flex ">
      <div
        className="flex-col w-full p-3 justify-center mx-auto"
        key={product.id}
      >
        <section className="flex w-full rounded-md border border-[#8f50b6] p-5">
          <div className="flex-col">
            <p className="mt-2 px-3">
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
            <div className="p-2">
              <strong className="flex text-center w-full justify-center items-center">{`${product.name} ${product.weight}`}</strong>
              <img
                src={product.url}
                alt={product.name}
                className="h-min flex items-center mx-auto w-min rounded-full"
              />
              <img src={product.rating} className="h-20 flex mx-auto" />
            </div>
          </div>

          <div className="mt-2 flex-row items-center mx-auto  py-2">
            <p className="">Costo: ${`${product.cost}/${product.unity}`}</p>
            <strong>Variedad:</strong>
            <div className="flex w-full mx-auto items-center justify-center p-2">
              <p className="text-[12px] ">{product.description}</p>
            </div>

            <section className="bg-transparent w-full rounded-[15px] flex items-center justify-start space-x-3">
              <button
                onClick={handleMinusButton}
                className="border-[1px] rounded-[45px] h-10 w-10 text-white bg-[#34d116] text-lg font-bold btn"
              >
                <AiOutlineMinus className="text-center" />
              </button>
              <strong className="flex text-center items-center justify-center mx-auto">
                {countProcut}
              </strong>
              <button
                onClick={handlePlusButton}
                className="border-[1px] rounded-[45px] h-10 w-10 text-white bg-[#34d116] text-[13px] font-bold btn"
              >
                <AiOutlinePlus className="text-center" />
              </button>
              <button onClick={handleAddToCart} className="flex bg-[#64be51] rounded-[15px] text-white text-center items-center justify-center p-1">
                <BsCart3 className="w-5 h-5" />
                <p className="ml-3">Agregar al carrito</p>
              </button>
            </section>

            <button
              onClick={handleNavigate}
              className="flex mt-5 bg-[#57b145] rounded-[15px] text-white text-left justify-center p-2 items-center"
            >
              <IoReturnUpBack className="w-5 h-5" />
              <p className="ml-3">Volver</p>
            </button>
          </div>
        </section>
        <section className="flex item-center text-center justify-center mt-2 space-x-5">
          <p className="mr-5">Comparte:</p>
          <FaFacebookF className="w-6 h-6 " />
          <FaLinkedin className=" w-6 h-6" />
          <RiWhatsappFill className="w-6 h-6 " />
          <FaPinterest className="w-6 h-6 " />
        </section>
      </div>
    </div>
  );
};

export default DetailProductsTablet;
