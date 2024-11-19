import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeProvider } from "styled-components";
import useThemeMode from "./hooks/Theme/useThemeMode";
import GlobalStyle from "./styles/GlobalStyles";

const Main = () => {
  const { themeMode, darkColors, lightColors } = useThemeMode();
  return (
    <ThemeProvider theme={themeMode ? darkColors : lightColors}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
