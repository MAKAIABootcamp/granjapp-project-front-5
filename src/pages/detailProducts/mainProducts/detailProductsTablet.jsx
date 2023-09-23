import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedin, FaPinterest } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import "./detailProductsMobile.scss";
import { getProductById } from "../../../firebase/Products";

const DetailProductsTablet = ({ id }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductById(id);
      setProduct(product);
    };
    getProduct();
  });
  return (
    <div className="flex mx-auto items-center max-w-full">
      <div key={product.id}>
        <section className="flex">
          <div className="flex-col">
            <p className="mt-2 px-2">
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

          <div className="mt-2 flex-row items-center mx-auto max-w-full py-2">
            <p className="">Costo: ${`${product.cost}/${product.unity}`}</p>
            <strong>Variedad:</strong>
            <div className="flex w-full mx-auto items-center justify-center p-2">
              <p className="text-[12px] ">{product.description}</p>
            </div>

            <section className="bg-transparent relative top-[60px] rounded-[15px] align-[2px]">
              <button className="border-[1px] rounded-[45px] h-5 w-5 absolute top-[0px] text-white bg-[#34d116] text-[13px] font-bold btn">
                -
              </button>
              <strong className="flex left-8 relative top-[-2px]">0</strong>
              <button className="border-[1px] rounded-[45px] h-5 w-5 absolute top-[0px] left-14 text-white bg-[#34d116] text-[13px] font-bold btn">
                +
              </button>
            </section>

            <button className="flex bg-[#34d116] rounded-[15px] w-[200px] top-[35px] left-[100px] relative text-white text-left justify-center">
              <BsCart3 className="flex left-2 absolute top-1" />
              Agregar a la canasta
            </button>
            <button className="flex bg-[#34d116] rounded-[15px] w-[80px] top-[50px] left-0 relative text-white text-left justify-center">
              Volver
            </button>
          </div>
        </section>

        <section className="flex item-center justify-center mx-auto left-[290px] top-[-60px]">
          Comparte:
          <FaFacebookF className="mr-2 top-1 " />
          <FaLinkedin className="mr-2 top-1 " />
          <RiWhatsappFill className="mr-2 top-1 " />
          <FaPinterest className="mr-2 top-1 " />
        </section>
        <hr className="flex top-3 relative" />
      </div>
    </div>
  );
};

export default DetailProductsTablet;
