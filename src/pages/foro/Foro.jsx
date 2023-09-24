import React from "react";
import "./Foro.scss";
import Historia1 from "../../assets/histories/historia-1.png";
import Historia2 from "../../assets/histories/historia-2.png";
import Historia3 from "../../assets/histories/historia-3.png";
import Historia4 from "../../assets/histories/historia-4.png";
import Historia0 from "../../assets/histories/historia-0.png";
import Publicacion from "../../assets/publicacion.jpg";

import { FaThumbsUp, FaComment, FaRegBookmark, FaShare } from "react-icons/fa";

const Foro = () => {
  return (
    <div className="container-foro">
      <nav className="nav-histories">
        <ul className="lista-histories">
          <li className="historia li-userdefault">
            <a className="userdefault" href="">
              <img src={Historia0} alt="" />
            </a>
            <div className="plus">+</div>
          </li>
          <li className="historia">
            <a href="">
              <img src={Historia1} alt="" />
            </a>
          </li>
          <li className="historia">
            <a href="">
              <img src={Historia2} alt="" />
            </a>
          </li>
          <li className="historia">
            <a href="">
              <img src={Historia3} alt="" />
            </a>
          </li>
          <li className="historia">
            <a href="">
              <img src={Historia4} alt="" />
            </a>
          </li>
        </ul>
      </nav>
      <nav className="nav-filtros">
        <ul className="lista-filtros">
          <li>
            <a href="" className="item-filtro">
              Todos
            </a>
          </li>
          <li>
            <a href="" className="item-filtro">
              Seguidos
            </a>
          </li>
          <li>
            <a href="" className="item-filtro">
              Guardados
            </a>
          </li>
          <li>
            <a href="" className="item-filtro">
              Me Gusta
            </a>
          </li>
        </ul>
      </nav>
      <main className="publicacion">
        <div className="data-up">
          <div className="publicacion-perfil">
            <img src={Historia3} alt="" />
          </div>
          <div className="publicacion-data">
            <h4>Vendedor x</h4>
            <span>Hace 2 dias</span>
          </div>
        </div>
        <div className="media">
          <img src={Publicacion} alt="" />
        </div>
        <div className="descrip">
          <h4>Vendedor x</h4>{" "}
          <span>Un pequeño video de como puede cultivar arandanos.</span>
        </div>
        <div className="acciones">
          <div className="">
            <button className="accion">
              <FaThumbsUp className="icono"></FaThumbsUp> 1 like
            </button>
            <button className="accion">
              <FaComment className="icono"></FaComment> 3 Comentarios
            </button>
            <button className="accion">
              <FaShare className="icono"></FaShare> Compartir
            </button>
          </div>
          <button className="accion">
            <FaRegBookmark className="icono"></FaRegBookmark>
          </button>
        </div>
        <div className="comentario">
          <div className="comentario-perfil">
            <img src={Historia0} alt="" />
          </div>
          <input type="text" placeholder="Escribe un comentario..." />
        </div>
        <div className="comentario">
          <div className="comentario-perfil">
            <img src={Historia0} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            minus, nesciunt atque dignissimos accusamus cum iste error iure
            molestiae ratione sapiente recusandae veritatis omnis velit
            voluptate! Ut quod accusamus minus?
          </p>
        </div>
      </main>
    </div>
  );
};

export default Foro;
