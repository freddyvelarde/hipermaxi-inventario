import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import MarcoTeoricoPage from "./pages/MarcoTeorico/MarcoTeorico";
import DashboardLayout from "./sections/DashboardLayout/Navbar";
import PageStyled from "./styles/PageStyled";
import useMiniDashboardActive from "./hooks/MiniDashboardActive/useMiniDashboardActive";

const useRouter = () => {
  const { dashboardLayoutActive } = useMiniDashboardActive();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              {" "}
              <Home />
            </PageStyled>
          ),
        },
        {
          path: "/analisis-estructurado",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <h1>analisis estructura code</h1>
            </PageStyled>
          ),
        },
        {
          path: "/orientado-objetos",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              {" "}
              <h1>orientado-objetos code</h1>{" "}
            </PageStyled>
          ),
        },
        {
          path: "/marco-teorico",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <MarcoTeoricoPage />
            </PageStyled>
          ),
        },
        {
          path: "/video",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <h1>Video page</h1>
            </PageStyled>
          ),
        },
      ],
    },
  ]);
  return { router };
};
export default useRouter;
