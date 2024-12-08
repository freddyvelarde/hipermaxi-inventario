import AnalisisEstructuradoStyled, {
  BreadcrumbNav,
} from "./AnalisisEstructuradoStyled";
import diagramaContextoImg from "../AnalisisEstruturado/assets/Diagrama-Contexto.jpg";
import { ZoomInImage } from "../../components/ZoomInImage/ZoomInImage";
import NoticeCard from "../../components/Notice/Notice";

export const DiagramaContexto = () => {
  return (
    <>
      <NoticeCard
        title="Cerrar Imagenes"
        description="Presiona ESC para cerrar las imagenes."
        tag="IMAGENES"
      />
      <AnalisisEstructuradoStyled>
        <BreadcrumbNav>
          <ul>
            <li>Análisis Estructurado</li>
            <li>Modelo Ambiental</li>
            <li>Diagrama de Contexto</li>
          </ul>
        </BreadcrumbNav>
        <h3 id="diagrama_de_contexto">Diagrama de Contexto</h3>

        <ZoomInImage
          src={diagramaContextoImg}
          alt="Diagrama de Contexto"
          width="auto"
          className="diagrama"
        />
      </AnalisisEstructuradoStyled>
    </>
  );
};
