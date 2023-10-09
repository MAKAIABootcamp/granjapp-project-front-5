import React, { useEffect, useState } from "react";
import "./productCarousel.scss";
import "./productRating.scss";
import { useNavigate } from "react-router";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { deleteProduct } from "../../../../../firebase/Products";
import { getRatingByProduct } from "../../../../../firebase/RatingProducts";
import { IoIosStar } from "react-icons/io";

const arrayRange = (start, stop, step) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
};

function currencyFormat(num) {
  return (
    "$" +
    parseFloat(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}

function toTitleCase(str) {
  const titleCase = str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return titleCase;
}

export const ProductCard = ({ product, activeComponent }) => {
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);

  useEffect(() => {
    const getRating = async () => {
      const rat = await getRatingByProduct(product.id);
      if (rat) {
        const ratProm =
          rat.reduce((total, r) => total + r.ratin, 0) / rat.length;
        setRating(Math.round(ratProm));
      }
    };
    getRating();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Está seguro de eliminar el producto?",
      icon: "question",
      showConfirmButton: true,
      showDenyButton: true,
    }).then(async (value) => {
      if (value.isConfirmed == true && value.isDenied == false) {
        await deleteProduct(product.id)
          .then((value) => {
            Swal.fire({
              title: value.message,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
          })
          .then(() => navigate("/"))
          .catch((e) => {
            Swal.fire({
              title: e.message,
              icon: "error",
              showConfirmButton: false,
              timer: 3000,
            });
          });
      }
    });
  };

  return (
    <section
      key={product.id + "card"}
      className="flex hover:bg-green-100  m-3 flex-col h-auto items-center rounded-lg border-2 bg-white border-[#34d116] "
    >
      <img
        src={product.url}
        className="object-cover w-full rounded-t-lg h-[50%]"
      />
      <div className="flex-col items-center justify-center">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {toTitleCase(product.name)}
          </h3>
          <hr />
          <div className="inline-flex space-x-4">
            <p className="">
              x{product.weight}
              {product.unity}
            </p>
            <div className="domi-info">
              <div className="cost-domi-section">
                {/* <img src={motoIcon} alt="moto-icon" /> */}
                <p>{currencyFormat(product.cost)}</p>
              </div>
            </div>
          </div>
          <span>{product.description}</span>
          <div role="group" className="rating mx-auto py-4">
            {arrayRange(5, 1, -1).map((ix) => (
              <React.Fragment key={ix}>
                <input
                  type="radio"
                  value={ix}
                  name="rating"
                  id={"star" + ix}
                  disabled
                  checked={rating === ix ? true : false}
                />
                <label htmlFor={"star" + ix}>
                  <IoIosStar />
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-auto mx-auto p-1">
          <button
            type="button"
            onClick={() => activeComponent(product)}
            className="bg-green-600 hover:bg-green-800 rounded-full w-10 h-10 mx-auto flex justify-center items-center text-center"
          >
            <GrEdit className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-400 rounded-full w-10 h-10 mx-auto flex justify-center items-center text-center"
          >
            <MdDeleteForever className="w-5 h-5" />{" "}
          </button>
        </div>
      </div>
    </section>
  );
};
