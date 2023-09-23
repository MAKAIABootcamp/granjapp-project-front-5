import React, { useState } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { LiaHomeSolid, LiaHeart, LiaUserSolid } from "react-icons/lia";
import { TfiBlackboard } from "react-icons/tfi";
import { MdSupportAgent } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import "./navBarFooter.scss";

const navBarFooter = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const navigate = useNavigate();

  function redirectHome(e) {
    e.preventDefault();
    navigate("/home");
    setCurrentPage("/home");
  }

  function redirectForum(e) {
    e.preventDefault();
    navigate("/forum");
    setCurrentPage("/forum");
  }

  function redirectSupport(e) {
    e.preventDefault();
    navigate("/support");
    setCurrentPage("/support");
  }

  function redirectShipping(e) {
    e.preventDefault();
    navigate("/shipping");
    setCurrentPage("/shipping");
  }

  function redirectLikes(e) {
    e.preventDefault();
    navigate("/likes");
    setCurrentPage("/likes");
  }

  function redirectUser(e) {
    e.preventDefault();
    navigate("/user");
    setCurrentPage("/user");
  }

  const onHome = () => {
    navigate("/auth/login");
  };
  return (
    <div className="footer">
      <IconContext.Provider
        value={{ color: currentPage === "/auth/login" ? "#ffe031" : "#000" }}
      >
        {/* Home -Inicio */}
        <LiaHomeSolid onClick={onHome} className="home" />
      </IconContext.Provider>

      <IconContext.Provider
        value={{ color: currentPage === "/search" ? "#ffe031" : "#000" }}
      >
        {/* Foro */}
        <TfiBlackboard className="forum " onClick={redirectForum} />
      </IconContext.Provider>

      <IconContext.Provider
        value={{ color: currentPage === "history" ? "#ffe031" : "#000" }}
      >
        {/* Soporte */}
        <MdSupportAgent className="support" onClick={redirectSupport} />
      </IconContext.Provider>

      <IconContext.Provider
        value={{ color: currentPage === "/profile" ? "#ffe031" : "#000" }}
      >
        {/* Envíos */}
        <FaShippingFast className="ship" onClick={redirectShipping} />
      </IconContext.Provider>

      <IconContext.Provider
        value={{ color: currentPage === "/profile" ? "#ffe031" : "#000" }}
      >
        {/* Favoritos */}
        <LiaHeart className="likes" onClick={redirectLikes} />
      </IconContext.Provider>

      <IconContext.Provider
        value={{ color: currentPage === "/profile" ? "#ffe031" : "#000" }}
      >
        {/* Usuario */}
        <LiaUserSolid className="user" onClick={redirectUser} />
      </IconContext.Provider>
    </div>
  );
};

export default navBarFooter;
