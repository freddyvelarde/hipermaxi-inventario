import { Link } from "react-router-dom";
import arrow_right_light from "../assets/arrow_right_light.svg";
import arrow_right_dark from "../assets/arrow_right_dark.svg";
import { useState } from "react";
import {
  ArrowRightStyled,
  LinkPageStyled,
  SubLinkPageStyled,
} from "./LinkPageStyled";
import useThemeMode from "../../../hooks/Theme/useThemeMode";

const SubLinkPage = ({
  data,
  mainLink,
  titleLink,
  callbackEvent,
  shortLink,
  toggleClickMenu,
}) => {
  const [isDisplayed, setDisplayContent] = useState(false);
  const { themeMode } = useThemeMode();

  const toggleClickSubMenu = () => setDisplayContent((prev) => !prev);
  const openSubMenuHover = () => setDisplayContent(true);
  // const closeSubMenuHover = () => setDisplayContent(false);
  //

  const isMobile = window.innerWidth > 768;
  return (
    <SubLinkPageStyled
      onMouseEnter={isMobile ? openSubMenuHover : null}
      // onMouseLeave={closeSubMenuHover}
    >
      <div className="header-link-submenu">
        <div className="main_section">
          <Link
            onClick={() => {
              toggleClickMenu();
              callbackEvent();
            }}
            to={`/${mainLink}`}
          >
            {titleLink}
          </Link>
        </div>
        {data && (
          <ArrowRightStyled
            isDisplayed={isDisplayed}
            src={themeMode ? arrow_right_dark : arrow_right_light}
            alt="arrow-right"
            onClick={() => {
              toggleClickSubMenu();
            }}
            width={18}
          >
            &#10148;
          </ArrowRightStyled>
        )}
      </div>
      {isDisplayed && data && (
        <div className="nested-submenu">
          {data.map((item, key) => (
            <div className="child-links" key={key}>
              <li>
                <SubLinkPage
                  titleLink={item.name}
                  mainLink={`${shortLink}/${item.link}`}
                  callbackEvent={() => {
                    callbackEvent();
                  }}
                  data={item.data}
                  toggleClickMenu={toggleClickMenu}
                />
              </li>
            </div>
          ))}
        </div>
      )}
    </SubLinkPageStyled>
  );
};

const LinkPage = ({
  data,
  mainLink,
  titleLink,
  icons,
  callbackEvent,
  stateLink,
}) => {
  const [clicked, setClicked] = useState(false);
  const [isDisplayed, setDisplayContent] = useState(false);
  const { themeMode } = useThemeMode();

  const toggleClickSubMenu1 = () => {
    setDisplayContent((prev) => !prev);
    setClicked((prev) => !prev);
  };

  const toggleSubMenuToTheParentState = () => {
    setDisplayContent(true);
    setClicked(true);
    console.log("Hey jude!");
  };
  const isMobile = window.innerWidth < 768;

  const openMenuHover = () => setDisplayContent(true);
  const closeMenuHover = () => setDisplayContent(false);

  return (
    <LinkPageStyled
      state={stateLink}
      onMouseEnter={!isMobile ? openMenuHover : null}
      onMouseLeave={!isMobile ? closeMenuHover : null}
    >
      <div className="header-link-menu">
        <div className="main_section">
          {icons && (
            <img
              id="icon_link"
              src={themeMode ? icons.dark : icons.light}
              alt="main-icon"
              width={18}
            />
          )}
          <Link onClick={callbackEvent} to={mainLink ? `${mainLink}` : "/test"}>
            {titleLink}
          </Link>
        </div>
        {data && (
          <ArrowRightStyled
            onClick={toggleClickSubMenu1}
            isClicked={clicked}
            isDisplayed={isDisplayed || clicked}
            src={themeMode ? arrow_right_dark : arrow_right_light}
            alt="arrow-right"
            width={18}
          >
            &#10148;
          </ArrowRightStyled>
        )}
      </div>
      {(isDisplayed || clicked) && data && (
        <div className="submenu">
          {data.map((item, key) => (
            <div className="child-links" key={key}>
              <li>
                <SubLinkPage
                  titleLink={item.name}
                  mainLink={`${mainLink}/${item.link}`}
                  shortLink={mainLink}
                  callbackEvent={callbackEvent}
                  data={item.data}
                  toggleClickMenu={toggleSubMenuToTheParentState}
                />
              </li>
            </div>
          ))}
        </div>
      )}
    </LinkPageStyled>
  );
};

export default LinkPage;
