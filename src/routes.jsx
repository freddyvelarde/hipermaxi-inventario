import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import MarcoTeoricoPage from "./pages/MarcoTeorico/MarcoTeorico";
import DashboardLayout from "./sections/DashboardLayout/Navbar";
import PageStyled from "./styles/PageStyled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: (
          <PageStyled>
            {" "}
            <Home />
          </PageStyled>
        ),
      },
      {
        path: "/analisis-estructurado",
        element: (
          <PageStyled>
            <h1>analisis estructura code</h1>
          </PageStyled>
        ),
      },
      {
        path: "/orientado-objetos",
        element: (
          <PageStyled>
            {" "}
            <h1>orientado-objetos code</h1>{" "}
          </PageStyled>
        ),
      },
      {
        path: "/marco-teorico",
        element: (
          <PageStyled>
            <MarcoTeoricoPage />
          </PageStyled>
        ),
      },
      {
        path: "/video",
        element: (
          <PageStyled>
            <h1>Video page</h1>
          </PageStyled>
        ),
      },
    ],
  },
]);

export default router;
