import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveShop } from "../../../../store/granjApp/granjAppSlice";
import motoIcon from "../../../../assets/icons/moto-icon.svg";
import ubiIcon from "../../../../assets/icons/ubi-icon.svg";
import "./productCarousel.scss";
import "./productRating.scss";
import { useNavigate } from "react-router";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { deleteProduct } from "../../../../firebase/Products";
import { getRatingByProduct } from "../../../../firebase/RatingProducts";
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

export const ProductCard = ({
  vendor = false,
  name = "",
  url = "",
  id,
  weight = "",
  unity,
  cost,
  activeComponent,
}) => {
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);

  useEffect(() => {
    const getRating = async () => {
      const rat = await getRatingByProduct(id);
      const ratProm = rat.reduce((total, r) => total + r.ratin, 0) / rat.length;
      setRating(Math.round(ratProm));
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
        await deleteProduct(id)
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
    vendor && (
      <section className="card-product-container">
        <img src={url} className="img-logo" />
        <div className="infoProduct-card-container">
          <h3 className="h3-title">{toTitleCase(name)}</h3>
          <div className="rating">
            {arrayRange(5, 1, -1).map((ix) => (
              <>
                <input
                  type="radio"
                  key={ix}
                  value={ix}
                  name="rating"
                  id={"star" + ix}
                  disabled
                  checked={rating === ix ? true : false}
                />
                <label key={"star" + ix} htmlFor={"star" + ix}>
                  <IoIosStar />
                </label>
              </>
            ))}
          </div>
          <p className="lil-info">
            x{weight}
            {unity}
          </p>
          <div className="domi-info">
            <div className="cost-domi-section">
              {/* <img src={motoIcon} alt="moto-icon" /> */}
              <p>{currencyFormat(cost)}</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-5 items-end justify-end w-auto px-3 ml-auto ">
          <button
            type="button"
            onClick={() => activeComponent("update")}
            className="bg-green-600 rounded-full w-10 h-10 mx-auto flex justify-center items-center text-center"
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
      </section>
    )
  );
};
