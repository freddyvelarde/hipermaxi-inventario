import { Link } from "react-router-dom";
import arrow_right_light from "../assets/arrow_right_light.svg";
import arrow_right_dark from "../assets/arrow_right_dark.svg";
import { useState } from "react";
import { ArrowRightStyled, LinkPageStyled } from "./LinkPageStyled";
import useThemeMode from "../../../hooks/Theme/useThemeMode";

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

  const mainLinkEvent = () => {
    callbackEvent();
    setDisplayContent(!isDisplayed);
  };

  return (
    <LinkPageStyled state={stateLink}>
      <div className="header-link-menu">
        <div className="main_section">
          {icons ? (
            <img
              id="icon_link"
              src={themeMode ? icons.dark : icons.light}
              alt="main-icon"
              width={18}
            />
          ) : null}

          <Link onClick={mainLinkEvent} to={`/${mainLink}`}>
            {titleLink}
          </Link>
        </div>
        {data ? (
          <ArrowRightStyled
            isDisplayed={isDisplayed}
            onClick={mainLinkEvent}
            src={themeMode ? arrow_right_dark : arrow_right_light}
            alt="arrow-right"
            width={18}
          />
        ) : null}
      </div>

      {isDisplayed && data
        ? data.map((item, key) => (
            <div className="child-links" key={key}>
              <li>
                <Link
                  onClick={callbackEvent}
                  id="child"
                  to={`${mainLink}/${item.link}`}
                >
                  {item.name}
                </Link>
              </li>
            </div>
          ))
        : null}
    </LinkPageStyled>
  );
};
export default LinkPage;
