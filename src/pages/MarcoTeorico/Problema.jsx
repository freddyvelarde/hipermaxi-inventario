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
      <section>
        <h2 id="plante">1.3 Planteamiento del Problema</h2>
        <p>
          Los clientes de Hipermaxi enfrentan dificultades para encontrar
          productos específicos en la tienda, lo que afecta la experiencia de
          compra tanto en línea como en físico.
        </p>
      </section>
      <PageNavigation
        leftPage={{
          name: "Modelo de Negocio",
          path: "/marco-teorico/modelo_negocio",
        }}
        rightPage={null}
      />
    </MarcoTeoricoPageStyled>
  );
};
