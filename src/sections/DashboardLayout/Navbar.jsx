import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, NavbarStyled } from "./NavbarStyled";
import LinkPage from "./LinkPage/LinkPage";
// icons
import homeDark from "./assets/home_dark.svg";
import homeLight from "./assets/home_light.svg";
import orientado_objetos_light from "./assets/orientado_objetos_light.svg";
import orientado_objetos_dark from "./assets/orientado_objetos_dark.svg";
import analisisEstructuradoLight from "./assets/analisis_estructurado_light.svg";
import analisisEstructuradoDark from "./assets/analisis_estructurado_dark.svg";
import videoDark from "./assets/video_dark.svg";
import videoLight from "./assets/video_light.svg";
import documentLight from "./assets/documentLight.svg";
import documentDark from "./assets/documentDark.svg";
import SwitchThemeButton from "../../components/SwitchThemeButton/SwitchThemeButton";
import menuDark from "./assets/menu_dark.svg";
import menuLight from "./assets/menuLight.svg";
import useThemeMode from "../../hooks/Theme/useThemeMode";

const Navbar = ({ menuOpen, activeLink, setActiveLink }) => {
  const links = [
    {
      title: "Inicio",
      link: "",
      icons: { dark: homeDark, light: homeLight },
      id: "inicio",
    },
    {
      title: "Analisis Estructurado",
      link: "analisis-estructurado",
      icons: {
        dark: analisisEstructuradoDark,
        light: analisisEstructuradoLight,
      },
      id: "analisis",
      data: [
        {
          name: "Modelo Ambiental",
          link: "#modelo_ambiental",
          data: [
            {
              name: "Declaración de propósitos",
              link: "#declaracion_de_propositos",
            },
            {
              name: "Lista de acontecimientos",
              link: "#lista_de_acontecimientos",
            },
            {
              name: "Diagrama de contexto",
              link: "#diagrama_de_contexto",
            },
          ],
        },

        {
          name: "modelo de comportamiento",
          link: "#modelo_comportamiento",
          data: [
            {
              name: "Diagrama de flujo de datos",
              link: "#diagrama_flujo_datos",
            },
            {
              name: "Diagrama DEER",
              link: "#diagrama_deer",
            },
            {
              name: "DICCIONARIO DE DATOS",
              link: "#diccionario_datos",
            },
          ],
        },
      ],
    },
    {
      title: "Orientado a objetos",
      link: "orientado-objetos",
      icons: { dark: orientado_objetos_dark, light: orientado_objetos_light },
      id: "orientado",
    },
    {
      title: "Marco Teorico",
      link: "marco-teorico",
      icons: { dark: documentDark, light: documentLight },
      id: "marco",
      data: [{ name: "subtitle", link: "#subtitle" }],
    },
    {
      title: "Video",
      link: "video",
      icons: { dark: videoDark, light: videoLight },
      id: "video",
    },
  ];
  return (
    <NavbarStyled state={menuOpen}>
      <header>
        <h1>Hipermaxi</h1>
        <SwitchThemeButton />
      </header>
      <nav>
        <ul>
          {links.map(({ title, link, icons, id, data }) => (
            <LinkPage
              key={id}
              titleLink={title}
              mainLink={link}
              icons={icons}
              callbackEvent={() => setActiveLink(id)}
              stateLink={activeLink === id}
              data={data}
            />
          ))}
        </ul>
      </nav>
    </NavbarStyled>
  );
};

const DashboardLayout = () => {
  const { themeMode } = useThemeMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("inicio");
  const location = useLocation();

  const switchMenu = () => setMenuOpen(!menuOpen);

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
      <Navbar
        menuOpen={menuOpen}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <Menu>
        <img
          src={themeMode ? menuDark : menuLight}
          onClick={switchMenu}
          alt="Toggle Menu"
        />
      </Menu>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
