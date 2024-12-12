import MarcoTeoricoPageStyled, {
  BreadcrumbNav,
} from "../MarcoTeorico/MarcoTeoricoStyled";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import { ZoomInImage } from "../../components/ZoomInImage/ZoomInImage";
import ucSistemas from "./assets/casos_de_uso_sistema.jpeg";
import ucNegocio from "./assets/Negocio_DiagramaGeneral_1.jpg";

export const CasosUsoNegocio = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Casos de uso</li>
          <li>Casos de uso de negocio</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="intro">Casos de uso de Negocio</h3>
      <ZoomInImage
        src={ucNegocio}
        alt="Orientado a objets"
        width="auto"
        className="diagrama"
      />
      <PageNavigation
        leftPage={{
          name: "Orientado a objetos",
          path: "/orientado-objetos",
        }}
        rightPage={{
          name: "Casos de uso de sistemas",
          path: "/casos-uso/sistemas",
        }}
      />
    </MarcoTeoricoPageStyled>
  );
};
