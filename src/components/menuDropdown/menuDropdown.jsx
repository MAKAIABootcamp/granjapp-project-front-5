import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./menuDropdown.scss";

function DropdownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  return (
    <div className="fixed">
      <button
        className="bg-[#34d116] hover:bg-[#29c16e] focus:ring-1 left-6 focus:outline-none font-medium rounded-[5px] relative top-6 p-1 inline-flex focus:ring-[#b6f1d7] dark:bg-[#34d116] dark:hover:bg-[#29c16e] dark:focus:ring-[#22870f]"
        onClick={toggleDropdown}
        type="button"
      >
        <FiMenu className=" top-6 left-6" />
      </button>
      {isDropdownOpen && (
        <div className="relative left-6 top-4 right-0 mt-2 w-42 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-[#29c16e] z-{1000}">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
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
              <Link
                to="/categories"
                className={`flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#29c16e] dark:hover:text-white text-[14px] ${
                  isCategoryDropdownOpen ? "bg-[#29c16e]" : ""
                }`}
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
                  <div className="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 left-40 top-16">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <Link
                          tp="/fruits"
                          className="block px-4 py-2 dark:hover:bg-[#29c16e] dark:hover:text-white text-[14px] hover:bg-[#7c67b1]"
                          onClick={toggleDropdown}
                        >
                          Frutas
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/vegetables"
                          className="block px-4 py-2 dark:hover:bg-[#29c16e] dark:hover:text-white text-[14px] hover:bg-[#7c67b1]"
                          onClick={toggleDropdown}
                        >
                          Verduras
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="eggs&dairies"
                          className="block px-4 py-2 dark:hover:bg-[#29c16e] dark:hover:text-white text-[14px] hover:bg-[#7c67b1]"
                          onClick={toggleDropdown}
                        >
                          Lácteos y huevos
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </Link>
              {/* End of Double Dropdown */}
            </li>

            <li>
              <Link
                to="/forum"
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
                to="/ship"
                className="flex items-center justify-between w-full px-4 py-2  dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px] hover:bg-[#b6d1f7]"
                onClick={toggleDropdown}
              >
                Envíos
              </Link>
            </li>

            <li>
              <Link
                to="Logout"
                className="flex items-center justify-between w-full px-4 py-2  dark:hover:bg-[#b6f1d7] dark:hover:text-black text-[14px] hover:bg-[#b6d1f7]"
                onClick={toggleDropdown}
              >
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
