import useThemeMode from "../../hooks/Theme/useThemeMode";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon.svg";
import { SwitchThemeButtonStyled } from "./SwitchButtonStyled";

const SwitchThemeButton = () => {
  const { themeMode, switchTheme } = useThemeMode();

  return (
    <SwitchThemeButtonStyled
      src={themeMode ? sunIcon : moonIcon}
      width={25}
      onClick={switchTheme}
    />
  );
};
export default SwitchThemeButton;
