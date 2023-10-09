import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedin, FaPinterest } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import "./detailProductsMobile.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import "../detailProducts.scss";
import {
  addRating,
  getRatingByProductUser,
  updateRating,
} from "../../../firebase/RatingProducts";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/userAuth/userAuthSlice";
import Swal from "sweetalert2";
import { addToCart } from "../../../store/granjApp/granjAppSlice";
import { addToCartFirestore } from "../../../store/granjApp/granjAppThunks";


/**
 * Convert a string to title case.
 * @param {string} str - The input string to be converted to title case.
 * @returns {string} The string in title case.
 */
function toTitleCase(str) {
  console.log(str);
  const titleCase = str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return titleCase;
}

const arrayRange = (start, stop, step) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
};

const DetailProductsLaptop = ({ product }) => {
  const [countProcut, setCountProcut] = useState(0);

  const [rating, setRating] = useState({
    userId: null,
    productId: product.id,
    ratin: 0,
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  const user = useSelector(selectUser);

  useEffect(() => {
    const getRating = async () => {
      const rattingFire = await getRatingByProductUser(user.uid, product.id);
      setRating(rattingFire);
    };
    getRating();
  }, [product.id]);

  

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
    //dispatch(addToCart(cantidadProducto));
    dispatch(addToCartFirestore({...cantidadProducto, userId: uid}));
  };

  const handleRating = async (e) => {
    if (user) {
      if (!rating) {
        await addRating({
          productId: product.id,
          userId: user.uid,
          ratin: e.target.value,
        })
          .then((data) =>
            Swal.fire({
              title: data.message,
              icon: "success",
              showConfirmButton: false,
              position: "top-end",
              timer: 2000,
              toast: true,
            })
          ).then(() => setRating(e.target.value))
          .catch((e) => Swal.fire({ title: e, icon: "error" }));
        
      } else {
        await updateRating({ ratinId: rating.id, ratin: e.target.value })
          .then((data) =>
            Swal.fire({
              title: data.message,
              icon: "success",
              showConfirmButton: false,
              position: "top-end",
              timer: 2000,
              toast: true,
            })
          ).then(() => setRating(e.target.value))
          .catch((e) => Swal.fire({ title: e, icon: "error" }));
      }
    }
  };

  return (
    <div className="mt-10 w-[70%] h-full flex mx-auto ">
      <div
        className="flex-col w-full p-5 justify-center mx-auto "
        key={product.id}
      >
        <div className="">
          <section className="flex items-center w-full mx-auto justify-center rounded-md border border-[#8f50b6] p-5">
            <div className="flex-col">
              <p className="mt-2">
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
              <strong className="items-center m-3 text-lg justify-center mx-auto flex">{`${product.name} ${product.weight} ${product.unity}`}</strong>
              <div role="group" onChange={handleRating} className="rating">
                {arrayRange(5, 1, -1).map((ix) => (
                  < >
                    <input
                      type="radio"
                      key={ix}
                      value={ix}
                      name="rating"
                      id={"star" + ix}
                      //checked={rating && rating.ratin == ix ? true : false}
                    />
                    <label key={"star" + ix} htmlFor={"star" + ix}>
                      <IoIosStar />
                    </label>
                  </>
                ))}
              </div>

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
                <button onClick={handleAddToCart} className="flex bg-[#64be51] rounded-[15px] text-white text-center items-center justify-center p-2">
                  <BsCart3 className="w-5 h-5" />
                  <p className="ml-3">Agregar al carrito</p>
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