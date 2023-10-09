import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./menuDropdown.scss";
import { startLogout } from "../../store/userAuth/thunks";
import { useDispatch, useSelector } from "react-redux";

function DropdownMenu() {
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const dropDownRef = useRef(null);

  const { userType } = useSelector((state) => state.auth);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onLogout = () => {
    dispatch(startLogout());
  };

  const closeDropDown = () => {
    setIsDropdownOpen(false);
  };

  const handleDocumentClick = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      closeDropDown();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.addEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="flex items-start" ref={dropDownRef}>
      <div className="">
        <button
          className="bg-[#34d116] hover:bg-[#29c16e] focus:ring-1 mx-2 focus:outline-none font-medium rounded-[5px] relative p-1  focus:ring-[#b6f1d7] dark:bg-[#34d116] dark:hover:bg-[#29c16e] dark:focus:ring-[#22870f]"
          onClick={toggleDropdown}
          type="button"
        >
          <FiMenu className="" />
        </button>
        {isDropdownOpen && (
          <div className="absolute left-10 top-1 mt-2 w-42 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-[#29c16e] z-{1000}">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {userType == "comprador" && (
                <>
                  <li>
                    <Link
                      to="/store"
                      className="flex items-center justify-between w-full px-4 py-2  dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px] hover:bg-[#b6d1f7]"
                      onClick={toggleDropdown}
                    >
                      Tiendas
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center justify-between w-full px-4 py-2  dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px] hover:bg-[#b6d1f7]"
                      to="/products"
                      onClick={toggleDropdown}
                    >
                      Productos
                    </Link>
                  </li>

                  <li>
                    <button
                      className={
                        "flex items-center justify-between w-full px-4 py-2  dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px] hover:bg-[#b6d1f7]"
                      }
                      onClick={() => {
                        setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                      }}
                    >
                      Categorías
                      <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      {/* Double Dropdown */}
                      {isCategoryDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-[#29c16e] left-[117px] top-[48px]">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <Link
                                to="/products?category=Frutas"
                                className="block px-4 py-2 dark:hover:bg-[#29c16e] dark:hover:text-white text-[14px] hover:bg-[#7c67b1]"
                                onClick={toggleDropdown}
                              >
                                Frutas
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/products?category=Hortalizas"
                                className="block px-4 py-2 dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px] "
                                onClick={toggleDropdown}
                              >
                                Verduras
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/products?category=Huevos y Lacteos"
                                className="block px-4 py-2 dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px]"
                                onClick={toggleDropdown}
                              >
                                Lácteos y huevos
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </button>
                    {/* End of Double Dropdown */}
                  </li>
                </>
              )}

              <li>
                <Link
                  to="/foro"
                  className="flex items-center justify-between w-full px-4 py-2  dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px] hover:bg-[#b6d1f7]"
                  onClick={toggleDropdown}
                >
                  Foro
                </Link>
              </li>

              <li>
                <Link
                  to="/support"
                  className="flex items-center justify-between w-full px-4 py-2  dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px] hover:bg-[#b6d1f7]"
                  onClick={toggleDropdown}
                >
                  Soporte
                </Link>
              </li>

              <li>
                <Link
                  to="purchaseTracking"
                  className="flex items-center justify-between w-full px-4 py-2  dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px] hover:bg-[#b6d1f7]"
                  onClick={toggleDropdown}
                >
                  Envíos
                </Link>
              </li>

              <li
                className="flex items-center justify-between w-full px-4 py-2 hover:cursor-pointer dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px] hover:bg-[#b6d1f7]"
                onClick={onLogout}
              >
                Cerrar sesión
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
