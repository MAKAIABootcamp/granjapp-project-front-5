import React, { useEffect, useState } from "react";
import { imgsProducts } from "../../../components/imgs/imgs";
import { FaFacebookF, FaLinkedin, FaPinterest } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import "./detailProductsMobile.scss";
import { getProductById } from "../../../firebase/Products";

const DetailProductsLaptop = ({ id }) => {
  const [product, setproduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductById(id);
      console.log(product);
      setproduct(product);
    };
    getProduct();
  }, []);
  return (
    <div className="ml-2 w-[768px]">
      <div key={product.id}>
        <section className="flex">
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
            <strong>{`${product.name} ${product.weight}`}</strong>
            <img src={product.rating} className="h-7 w-16 mt-1" />
            <img
              src={product.url}
              alt={product.name}
              className="rounded-[5px] h-17 flex left-10 relative"
            />
          </div>

          <div>
            <p className="mt-1 top-8 relative">
              Costo: ${`${product.cost}/${product.unity}`}
            </p>
            <p className="text-[12px] text-left relative top-10 w-[400px]">
              <strong>Variedad:</strong> {product.description}
            </p>
            <section className="bg-transparent relative top-[60px] w-[80px] rounded-[15px] align-[2px]">
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

        <section className="flex align-baseline left-[290px] relative top-[-60px]">
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

export default DetailProductsLaptop;
