import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedin, FaPinterest } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import "./detailProductsMobile.scss";
import "firebase/firestore";
import { getProductById } from "../../../firebase/Products";

const DetailProductsMobile = ({ id }) => {
  const [product, setproduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const collectionFruver = await getProductById(id);
      setproduct(collectionFruver);
    };

    fetchData();
  }, []);

  return (
    <div className="ml-2">
      <div key={product.id}>
        <p className="mt-2">
          <a href="#" className="mr-1">
            Inicio/
          </a>
          <a href="#" className="mr-1">
            Productos/
          </a>
          <a href="#" className="mr-1">
            tipo
          </a>
          <a href="#" className="mr-1">
            {product.name}
          </a>
        </p>
        <strong>{`${product.name} ${product.weight}`}</strong>
        <img src={product.rating} className="h-7 w-16 mt-1" />
        <img
          src={product.url}
          alt={product.name}
          className="rounded-full h-17 flex left-10 relative"
        />
        <p className="mt-1">Costo: ${`${product.cost}/${product.unity}`}</p>
        <p className="text-[12px] text-left w-auto flex">
          <strong>Variedad:</strong> {product.description}
        </p>
        <section>
          <button className="border-[1px] rounded-[45px] h-5 w-5 absolute top-[515px] left-3 text-white bg-[#34d116] text-[13px] font-bold btn">
            -
          </button>
          <strong className="flex left-8 relative top-[1px]">0</strong>
          <button className="border-[1px] rounded-[45px] h-5 w-5 absolute top-[515px] left-14 text-white bg-[#34d116] text-[13px] font-bold btn">
            +
          </button>
        </section>
        <button className="flex bg-[#34d116] rounded-[15px] w-[200px] top-[-16px] left-20 relative text-white text-left justify-center">
          <BsCart3 className="flex left-2 absolute top-1" />
          Agregar a la canasta
        </button>
        <button className="flex bg-[#34d116] rounded-[15px] w-[80px] top-[-8px] left-0 relative text-white text-left justify-center">
          Volver
        </button>
        <section className="flex align-baseline">
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
