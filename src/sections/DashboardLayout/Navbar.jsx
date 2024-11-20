import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useThemeMode from "../../hooks/Theme/useThemeMode";
import { NavbarStyled } from "./NavbarStyled";
import LinkPage from "./LinkPage/LinkPage";
// icons
import homeDark from "./assets/home_dark.svg";
import homeLight from "./assets/home_light.svg";
import marcoTeoricoDark from "./assets/marcoTeoricoDark.svg";
import marcoTeoricoLight from "./assets/marcoTeoricoLight.svg";

const Navbar = () => {
  const { switchTheme } = useThemeMode();
  return (
    <NavbarStyled>
      <nav>
        <ul>
          <LinkPage
            titleLink="Inicio"
            mainLink=""
            icons={{ dark: homeDark, light: homeLight }}
          />
          <LinkPage
            titleLink="Analisis Estructurado"
            mainLink="analisis-estructurado"
            data={[{ name: "analisis 1", link: "analisis1" }]}
          />
          <LinkPage
            titleLink="Orientado a objetos"
            mainLink="orientado-objetos"
          />
          <LinkPage
            titleLink="test"
            mainLink="test"
            data={[{ name: "test1", link: "test1" }]}
          />
          <LinkPage
            titleLink="Marco Teorico"
            mainLink="marco-teorico"
            icons={{ dark: marcoTeoricoDark, light: marcoTeoricoLight }}
            data={[
              { name: "title1", link: "/marco-teorico/#title" },
              { name: "title2", link: "/marco-teorico/#title2" },
            ]}
          />
          <LinkPage titleLink="Video" mainLink="video" />
        </ul>
      </nav>
      <button onClick={switchTheme}>switch theme</button>
    </NavbarStyled>
  );
};

const DashboardLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
