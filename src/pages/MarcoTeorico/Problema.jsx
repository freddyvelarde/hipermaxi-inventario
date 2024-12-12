import PageNavigation from "../../components/PageNavigation/PageNavigation";
import MarcoTeoricoPageStyled, { BreadcrumbNav } from "./MarcoTeoricoStyled";

export const Problema = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Marco Teorico</li>
          <li>Planteamiento del problema</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="plante">1.8 Planteamiento del Problema</h3>
      <p>
        Los clientes de Hipermaxi enfrentan dificultades para encontrar
        productos específicos en la tienda, lo que afecta la experiencia de
        compra tanto en línea como en físico.
      </p>
      <PageNavigation
        leftPage={{
          name: "Modelo de Negocio",
          path: "/marco-teorico/modelo_negocio",
        }}
        rightPage={{
          name: "Mision",
          path: "/marco-teorico/mision",
        }}
      />
    </MarcoTeoricoPageStyled>
  );
};
