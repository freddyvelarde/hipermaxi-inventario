import MarcoTeoricoPageStyled, {
  BreadcrumbNav,
} from "../MarcoTeorico/MarcoTeoricoStyled";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import { ZoomInImage } from "../../components/ZoomInImage/ZoomInImage";
import ucSistemas from "./assets/casos_de_uso_sistema.jpeg";

export const CasosUso = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Casos de uso</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="intro">Casos de usos</h3>
    </MarcoTeoricoPageStyled>
  );
};
