import { Link } from "react-router-dom";
import arrow_right_light from "../assets/arrow_right_light.svg";
import arrow_right_dark from "../assets/arrow_right_dark.svg";
import { useState } from "react";
import { ArrowRightStyled, LinkPageStyled } from "./LinkPageStyled";
import useThemeMode from "../../../hooks/Theme/useThemeMode";

const LinkPage = ({ data, mainLink, titleLink, icons }) => {
  const [isDisplayed, setDisplayContent] = useState(false);
  const { themeMode } = useThemeMode();

  return (
    <LinkPageStyled>
      <div className="header-link-menu">
        <div className="main_section">
          {icons ? (
            <img
              id="icon_link"
              src={themeMode ? icons.dark : icons.light}
              alt="main-icon"
              width={20}
            />
          ) : null}

          <Link to={`/${mainLink}`}>{titleLink}</Link>
        </div>
        {data ? (
          <ArrowRightStyled
            isDisplayed={isDisplayed}
            onClick={() => setDisplayContent(!isDisplayed)}
            src={themeMode ? arrow_right_dark : arrow_right_light}
            alt="arrow-right"
            width={20}
          />
        ) : null}
      </div>

      {isDisplayed && data
        ? data.map((item, key) => (
            <div className="child-links" key={key}>
              <li>
                <Link to={item.link}>{item.name}</Link>
              </li>
            </div>
          ))
        : null}
    </LinkPageStyled>
  );
};
export default LinkPage;
