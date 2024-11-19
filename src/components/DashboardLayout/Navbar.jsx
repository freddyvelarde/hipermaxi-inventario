import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import useThemeMode from "../../hooks/Theme/useThemeMode";
import NavbarStyled from "./NavbarStyled";

const Navbar = () => {
  const { switchTheme } = useThemeMode();
  return (
    <NavbarStyled>
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
      <button onClick={switchTheme}>switch theme</button>
    </NavbarStyled>
  );
};

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
