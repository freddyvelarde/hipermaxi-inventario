import AnalisisEstructuradoStyled, {
  BreadcrumbNav,
} from "./AnalisisEstructuradoStyled";
import diagramaERImg from "../AnalisisEstruturado/assets/Diagrama-ER.jpg";
import { ZoomInImage } from "../../components/ZoomInImage/ZoomInImage";

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
    </AnalisisEstructuradoStyled>
  );
};
