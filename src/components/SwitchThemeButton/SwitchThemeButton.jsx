import useThemeMode from "../../hooks/Theme/useThemeMode";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon.svg";

const SwitchThemeButton = () => {
  const { themeMode, switchTheme } = useThemeMode();

  return themeMode ? (
    <img src={sunIcon} width={40} onClick={switchTheme} />
  ) : (
    <img src={moonIcon} width={40} onClick={switchTheme} />
  );
};
export default SwitchThemeButton;
