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
}) => {
  const [isDisplayed, setDisplayContent] = useState(false);
  const { themeMode } = useThemeMode();

  const toggleSubMenu = () => setDisplayContent((prev) => !prev);

  return (
    <SubLinkPageStyled>
      <div className="header-link-submenu">
        <div className="main_section">
          <Link onClick={callbackEvent} to={`/${mainLink}`}>
            {titleLink}
          </Link>
        </div>
        {data && (
          <ArrowRightStyled
            isDisplayed={isDisplayed}
            onClick={toggleSubMenu}
            src={themeMode ? arrow_right_dark : arrow_right_light}
            alt="arrow-right"
            width={18}
          />
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
                  callbackEvent={callbackEvent}
                  data={item.data}
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
  const [isDisplayed, setDisplayContent] = useState(false);
  const { themeMode } = useThemeMode();

  const toggleSubMenu = () => setDisplayContent((prev) => !prev);

  return (
    <LinkPageStyled state={stateLink}>
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
          <Link onClick={callbackEvent} to={`/${mainLink}`}>
            {titleLink}
          </Link>
        </div>
        {data && (
          <ArrowRightStyled
            isDisplayed={isDisplayed}
            onClick={toggleSubMenu}
            src={themeMode ? arrow_right_dark : arrow_right_light}
            alt="arrow-right"
            width={18}
          />
        )}
      </div>
      {isDisplayed && data && (
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
