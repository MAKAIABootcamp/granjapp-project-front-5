import React, { useState } from "react";
import { FaFacebookF, FaLinkedin, FaPinterest } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import "./detailProductsMobile.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const DetailProductsLaptop = ({ product }) => {
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

  return (
    <div className="mt-10 w-full h-full flex  ">
      <div
        className="flex-col w-full p-3 justify-center mx-auto "
        key={product.id}
      >
        <div className="">
          <section className="flex items-center w-full mx-auto justify-center rounded-md border border-[#8f50b6] p-5">
            <div className="flex-col">
              <p className="mt-2">
                <a href="#" className="mr-1">
                  Inicio/
                </a>
                <a href="#" className="mr-1">
                  Productos/
                </a>
                <a href="#" className="mr-1">
                  {product.variety}/
                </a>
                <a href="#" className="mr-1">
                  {product.name}
                </a>
              </p>
              <strong className="items-center m-3 text-lg justify-center mx-auto flex">{`${product.name} ${product.weight}`}</strong>
              <img src={product.rating} className="h-20 w-full px-5" />
              <img
                src={product.url}
                alt={product.name}
                className="rounded-full h-[250px] w-full flex mx-auto items-center"
              />
            </div>

            <div className="flex-col w-full h-full items-center justify-center space-y-5 pl-5">
              <strong className="text-lg">
                Costo: ${`${product.cost}/${product.unity}`}
              </strong>

              <p className="text-md">
                <strong>Variedad:</strong> {product.description}
              </p>
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
                <button className="flex bg-[#64be51] rounded-[15px] text-white text-center items-center justify-center p-2">
                  <BsCart3 className="w-5 h-5" />
                  <p className="ml-3">Agregar a la canasta</p>
                </button>
              </section>

              <button
                onClick={handleNavigate}
                className="flex bg-[#57b145] rounded-[15px] text-white text-left justify-center p-2 items-center"
              >
                <IoReturnUpBack className="w-5 h-5" />
                <p className="ml-3">Volver</p>
              </button>
            </div>
          </section>
        </div>

        <section>
          <div className="flex mx-auto items-center justify-center space-x-2 mt-10">
            <p className="mr-5">Comparte:</p>
            <FaFacebookF width={100} height={100} className="" />
            <FaLinkedin width={100} height={100} className="" />
            <RiWhatsappFill width={100} height={100} className="" />
            <FaPinterest width={100} height={100} className="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailProductsLaptop;
