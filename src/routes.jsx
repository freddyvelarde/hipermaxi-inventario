import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import MarcoTeoricoPage from "./pages/MarcoTeorico/MarcoTeorico";
import DashboardLayout from "./sections/DashboardLayout/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/analisis-estructurado",
        element: <h1>analisis estructura code</h1>,
      },
      { path: "/orientado-objetos", element: <h1>orientado-objetos code</h1> },
      { path: "/marco-teorico", element: <MarcoTeoricoPage /> },
      { path: "/video", element: <h1>video code</h1> },
    ],
  },
]);

export default router;
