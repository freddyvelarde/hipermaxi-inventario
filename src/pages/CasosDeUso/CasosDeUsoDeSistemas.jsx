import MarcoTeoricoPageStyled, {
  BreadcrumbNav,
} from "../MarcoTeorico/MarcoTeoricoStyled";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import { ZoomInImage } from "../../components/ZoomInImage/ZoomInImage";
import ucSistemas from "./assets/casos_de_uso_sistema.jpeg";

export const CasosUsoSistemas = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Casos de uso</li>
          <li>Casos de uso de sistemas</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="intro">Casos de uso de sistemas</h3>
      <ZoomInImage
        src={ucSistemas}
        alt="Diagrama de Contexto"
        width="auto"
        className="diagrama"
      />
      <PageNavigation
        leftPage={{
          name: "Casos de uso de negocios",
          path: "/casos-uso/negocio",
        }}
        rightPage={{
          name: "Casos de uso de texto",
          path: "/casos-uso/texto",
        }}
      />
    </MarcoTeoricoPageStyled>
  );
};
