import { useEffect } from "react";
import { darkColors, lightColors } from "../../styles/colors";
import { useSelector, useDispatch } from "react-redux";
import { setThemeMode } from "../../redux/slices/theme";

const useThemeMode = () => {
  const themeMode = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const setTheme = (data) => dispatch(setThemeMode(data));
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themeMode));
  }, [themeMode]);

  const switchTheme = () => {
    dispatch(setThemeMode(!themeMode));
    // console.log("Ari theme: ", themeMode);
  };

  return { themeMode, switchTheme, lightColors, darkColors, setTheme };
};

export default useThemeMode;
