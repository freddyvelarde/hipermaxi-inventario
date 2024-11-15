import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/analisis-estructurado">Analisis Estructurado</Link>
        </li>
        <li>
          <Link to="/orientado-objetos">Orientado a objetos</Link>
        </li>
        <li>
          <Link to="/marco-teorico">Marco Teorico</Link>
        </li>
        <li>
          <Link to="/video">video</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
