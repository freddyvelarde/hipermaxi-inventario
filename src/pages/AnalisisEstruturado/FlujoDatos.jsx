import AnalisisEstructuradoStyled, {
  BreadcrumbNav,
} from "./AnalisisEstructuradoStyled";
import diagramaFlujoDatosImg from "../AnalisisEstruturado/assets/Diagrama-FlujoDeDatos.jpg";
import { ZoomInImage } from "../../components/ZoomInImage/ZoomInImage";
import PageNavigation from "../../components/PageNavigation/PageNavigation";

export const FlujoDatos = () => {
  return (
    <AnalisisEstructuradoStyled>
      <BreadcrumbNav>
        <ul>
          <li>Análisis Estructurado</li>
          <li>Modelo de comportamiento</li>
          <li>Diagrama de flujo de datos.</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="diagrama_flujo_datos">Diagrama de Flujo de Datos</h3>
      <ZoomInImage
        src={diagramaFlujoDatosImg}
        alt="Diagrama de Flujo de Datos"
        width="auto"
        className="diagrama"
      />
      <PageNavigation
        leftPage={{
          name: "Diagrama de Contexto",
          path: "/analisis-estructurado/diagrama_de_contexto",
        }}
        rightPage={{
          name: "Diagrama DEER",
          path: "/analisis-estructurado/diagrama_deer",
        }}
      />
    </AnalisisEstructuradoStyled>
  );
};
