import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, NavbarStyled } from "./NavbarStyled";
import LinkPage from "./LinkPage/LinkPage";
// icons
import SwitchThemeButton from "../../components/SwitchThemeButton/SwitchThemeButton";
import menuDark from "./assets/menu_dark.svg";
import menuLight from "./assets/menuLight.svg";
import useThemeMode from "../../hooks/Theme/useThemeMode";
import hipermaxiLogo from "../../assets/hipermaxi-logo.png";
import { links } from "./links";

const Navbar = ({ menuOpen, activeLink, setActiveLink }) => {
  return (
    <NavbarStyled state={menuOpen}>
      <header>
        <img src={hipermaxiLogo} alt="hipermaxi-logo" width={120} />

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
              callbackEvent={() => {
                setActiveLink(id);
              }}
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
