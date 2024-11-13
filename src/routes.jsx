import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/analisis-estructurado",
    element: <h1>analisis estructura code</h1>,
  },
  { path: "/orientado-objetos", element: <h1>orientado-objetos code</h1> },
  { path: "/marco-teorico", element: <h1>marco-teorico code</h1> },
  { path: "/video", element: <h1>video code</h1> },
]);

export default router;
