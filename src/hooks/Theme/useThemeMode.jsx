import { useState, useEffect } from "react";
import { darkColors, lightColors } from "../../styles/colors";

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  // const loadTheme = () => {
  //   useEffect(() => {
  //     const data = localStorage.getItem("theme");
  //     if (data !== null) {
  //       setThemeMode(JSON.parse(data));
  //     }
  //   }, []);
  //
  // };
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themeMode));
  }, [themeMode]);

  const switchTheme = () => {
    setThemeMode(!themeMode);
    console.log("theme: ", themeMode);
  };

  return { themeMode, switchTheme, lightColors, darkColors };
};

export default useThemeMode;
