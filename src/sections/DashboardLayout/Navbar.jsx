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

const Navbar = ({ menuOpen }) => {
  const [linksState, setLinksState] = useState({
    inicio: true,
    analisis: false,
    orientado: false,
    marco: false,
    video: false,
  });

  const changeLinkStateInicio = () => {
    setLinksState({
      inicio: true,
      analisis: false,
      orientado: false,
      marco: false,
      video: false,
    });
    console.log(linksState);
  };
  const changeLinkStateAnalisis = () => {
    setLinksState({
      inicio: false,
      analisis: true,
      orientado: false,
      marco: false,
      video: false,
    });
    console.log(linksState);
  };
  const changeLinkStateOrientado = () => {
    setLinksState({
      inicio: false,
      analisis: false,
      orientado: true,
      marco: false,
      video: false,
    });
    console.log(linksState);
  };
  const changeLinkStateMarco = () => {
    setLinksState({
      inicio: false,
      analisis: false,
      orientado: false,
      marco: true,
      video: false,
    });
    console.log(linksState);
  };
  const changeLinkStateVideo = () => {
    setLinksState({
      inicio: false,
      analisis: false,
      orientado: false,
      marco: false,
      video: true,
    });
    console.log(linksState);
  };

  return (
    <NavbarStyled state={menuOpen}>
      <header>
        <div>
          <h1>Hipermaxi</h1>
        </div>
      </header>

      <nav>
        <ul>
          <LinkPage
            titleLink="Inicio"
            mainLink=""
            icons={{ dark: homeDark, light: homeLight }}
            callbackEvent={changeLinkStateInicio}
            stateLink={linksState.inicio}
          />
          <LinkPage
            callbackEvent={changeLinkStateAnalisis}
            stateLink={linksState.analisis}
            titleLink="Analisis Estructurado"
            mainLink="analisis-estructurado"
            data={[{ name: "analisis 1", link: "#analisis1" }]}
            icons={{
              dark: analisisEstructuradoDark,
              light: analisisEstructuradoLight,
            }}
          />
          <LinkPage
            stateLink={linksState.orientado}
            callbackEvent={changeLinkStateOrientado}
            titleLink="Orientado a objetos"
            mainLink="orientado-objetos"
            icons={{
              dark: orientado_objetos_dark,
              light: orientado_objetos_light,
            }}
          />
          <LinkPage
            stateLink={linksState.marco}
            callbackEvent={changeLinkStateMarco}
            titleLink="Marco Teorico"
            mainLink="marco-teorico"
            icons={{ dark: documentDark, light: documentLight }}
            data={[
              { name: "title1", link: "#title" },
              { name: "title2", link: "#title2" },
            ]}
          />
          <LinkPage
            stateLink={linksState.video}
            callbackEvent={changeLinkStateVideo}
            titleLink="Video"
            mainLink="video"
            icons={{ dark: videoDark, light: videoLight }}
          />
        </ul>
      </nav>
      <SwitchThemeButton />
    </NavbarStyled>
  );
};

const DashboardLayout = () => {
  const { themeMode } = useThemeMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const switchMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <Navbar menuOpen={menuOpen} />
      <Menu>
        <img src={themeMode ? menuDark : menuLight} onClick={switchMenu} />
      </Menu>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
