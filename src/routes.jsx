import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import MarcoTeoricoPage from "./pages/MarcoTeorico/MarcoTeorico";
import AnalisisEstructuradoPage from "./pages/AnalisisEstruturado/index";
import OrientadoAObjetosPage from "./pages/OrientadoAObjetos/index";
import DashboardLayout from "./sections/DashboardLayout/Navbar";
import PageStyled from "./styles/PageStyled";
import useMiniDashboardActive from "./hooks/MiniDashboardActive/useMiniDashboardActive";
import HomeRedirect, { Redirect } from "./components/HomeRedirect";
import { DeclaracionPropositos } from "./pages/AnalisisEstruturado/DeclaracionPropositos";
import { ListaAcontecimientos } from "./pages/AnalisisEstruturado/ListaAcontecimientos";
import { DiagramaContexto } from "./pages/AnalisisEstruturado/DiagramaContexto";
import { FlujoDatos } from "./pages/AnalisisEstruturado/FlujoDatos";
import { Deer } from "./pages/AnalisisEstruturado/Deer";
import { Diccionario } from "./pages/AnalisisEstruturado/Diccionario";
import { Intro } from "./pages/MarcoTeorico/Intro";
import { Antecedentes } from "./pages/MarcoTeorico/Antecedentes";
import { Grupo } from "./pages/MarcoTeorico/Grupo";
import { Foda } from "./pages/MarcoTeorico/Foda";
import { ModeloNegocio } from "./pages/MarcoTeorico/ModeloNegocio";
import { Problema } from "./pages/MarcoTeorico/Problema";

const useRouter = () => {
  const { dashboardLayoutActive } = useMiniDashboardActive();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <HomeRedirect />
          <DashboardLayout />
        </div>
      ),
      children: [
        {
          path: "/inicio",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <Home />
            </PageStyled>
          ),
        },
        {
          path: "analisis-estructurado",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <Redirect />
              <AnalisisEstructuradoPage />
            </PageStyled>
          ),
          children: [
            // childs of analisis estructurado
            // {
            //   path: "modelo_ambiental",
            //   element: <ModeloAmbiental />,
            // },
            // {
            //   path: "",
            //   element: <ModeloAmbiental />,
            // },
          ],
        },
        {
          path: "/orientado-objetos",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <OrientadoAObjetosPage />
            </PageStyled>
          ),
        },
        {
          path: "/marco-teorico",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <Redirect />
              <AnalisisEstructuradoPage />
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

        // childs of analisis estrucutrado
        {
          path: "/analisis-estructurado/declaracion_de_propositos",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <DeclaracionPropositos />
            </PageStyled>
          ),
        },
        {
          path: "/analisis-estructurado/lista_de_acontecimientos",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <ListaAcontecimientos />
            </PageStyled>
          ),
        },
        {
          path: "/analisis-estructurado/diagrama_de_contexto",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <DiagramaContexto />
            </PageStyled>
          ),
        },
        {
          path: "/analisis-estructurado/diagrama_flujo_datos",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <FlujoDatos />
            </PageStyled>
          ),
        },
        {
          path: "/analisis-estructurado/diagrama_deer",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <Deer />
            </PageStyled>
          ),
        },
        {
          path: "/analisis-estructurado/diccionario_datos",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <Diccionario />
            </PageStyled>
          ),
        },
        // childs of marco
        {
          path: "/marco-teorico/intro",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <Intro />
            </PageStyled>
          ),
        },
        {
          path: "/marco-teorico/antecedentes",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <Antecedentes />
            </PageStyled>
          ),
        },
        {
          path: "/marco-teorico/grupo_intereses",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <Grupo />
            </PageStyled>
          ),
        },
        {
          path: "/marco-teorico/analisis_foda",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <Foda />
            </PageStyled>
          ),
        },
        {
          path: "/marco-teorico/modelo_negocio",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <ModeloNegocio />
            </PageStyled>
          ),
        },
        {
          path: "/marco-teorico/planteamiento_del_problema",
          element: (
            <PageStyled state={dashboardLayoutActive}>
              <Problema />
            </PageStyled>
          ),
        },
      ],
    },
  ]);

  return { router };
};

export default useRouter;
