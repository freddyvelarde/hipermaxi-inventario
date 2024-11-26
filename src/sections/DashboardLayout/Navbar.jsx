import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, NavbarStyled, ToggleNavbar } from "./NavbarStyled";
import LinkPage from "./LinkPage/LinkPage";
// icons
import SwitchThemeButton from "../../components/SwitchThemeButton/SwitchThemeButton";
import menuDark from "./assets/menu_dark.svg";
import menuLight from "./assets/menuLight.svg";
import useThemeMode from "../../hooks/Theme/useThemeMode";
import hipermaxiLogo from "../../assets/hipermaxi-logo.png";
import { links } from "./links";
import { LinkIcon, SimpleNavbarStyled } from "./SimpleNavbarStyled";
import { Link } from "react-router-dom";
import useMiniDashboardActive from "../../hooks/MiniDashboardActive/useMiniDashboardActive";

const SimpleNavbar = ({ simpleNavbarActive, activeLink, setActiveLink }) => {
  const { themeMode } = useThemeMode();

  return (
    <SimpleNavbarStyled simpleNavbarActive={simpleNavbarActive}>
      <nav>
        <ul>
          {links.map(({ link, icons, id }) => (
            <li>
              <LinkIcon
                stateLink={activeLink == id}
                onClick={() => setActiveLink(id)}
              >
                <Link to={link}>
                  <img
                    src={themeMode ? icons.dark : icons.light}
                    alt=""
                    width={20}
                  />
                </Link>
              </LinkIcon>
            </li>
          ))}
        </ul>
      </nav>
      <SwitchThemeButton />
    </SimpleNavbarStyled>
  );
};

const Navbar = ({
  menuOpen,
  activeLink,
  setActiveLink,
  simpleNavbarActive,
}) => {
  return (
    <NavbarStyled state={menuOpen} simpleNavbarActive={simpleNavbarActive}>
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
  const { dashboardLayoutActive, switchDashboardLayoutActive } =
    useMiniDashboardActive();

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
        simpleNavbarActive={dashboardLayoutActive}
      />
      <SimpleNavbar
        simpleNavbarActive={dashboardLayoutActive}
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
      <ToggleNavbar
        simpleNavbarActive={dashboardLayoutActive}
        onClick={switchDashboardLayoutActive}
      >
        &#10148;
      </ToggleNavbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
