import AnalisisEstructuradoStyled, {
  BreadcrumbNav,
} from "./AnalisisEstructuradoStyled";
import diagramaERImg from "../AnalisisEstruturado/assets/DEER.jpg";
// import diagramaERImg from "../AnalisisEstruturado/assets/Diagrama-ER.jpg";
import { ZoomInImage } from "../../components/ZoomInImage/ZoomInImage";
import PageNavigation from "../../components/PageNavigation/PageNavigation";

export const Deer = () => {
  return (
    <AnalisisEstructuradoStyled>
      <BreadcrumbNav>
        <ul>
          <li>Análisis Estructurado</li>
          <li>Modelo de comportamiento</li>
          <li>Diagrama DEER.</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="diagrama_deer">Diagrama ER</h3>
      <ZoomInImage
        src={diagramaERImg}
        alt="Diagrama ER"
        width="auto"
        className="diagrama"
      />
      <PageNavigation
        leftPage={{
          name: "Diagrama de Flujo de Datos",
          path: "/analisis-estructurado/diagrama_flujo_datos",
        }}
        rightPage={{
          name: "Diccionario de Datos",
          path: "/analisis-estructurado/diccionario_datos",
        }}
      />
    </AnalisisEstructuradoStyled>
  );
};
