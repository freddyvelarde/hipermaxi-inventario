import MarcoTeoricoPageStyled, { BreadcrumbNav } from "./MarcoTeoricoStyled";
import PageNavigation from "../../components/PageNavigation/PageNavigation";

export const AnalisisEstructuradoTeorico = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Marco Teorico</li>
          <li>Análisis y Diseño Estructurado</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="intro">1.1 Análisis y Diseño Estructurado</h3>
      <p>
        Esta sección se enfoca en el análisis detallado de los procesos actuales
        de gestión de inventario. Se utilizan diagramas y modelos para
        representar el flujo de información y las relaciones entre las
        diferentes entidades involucradas.
      </p>
      <p>
        El modelo ambiental describe el contexto general en el que opera el
        sistema, mientras que el modelo de comportamiento se centra en los
        procesos internos. El diagrama entidad-relación, por su parte, muestra
        las relaciones entre los diferentes elementos de datos del sistema.
      </p>

      <PageNavigation
        leftPage={{
          name: "Generalidades",
          path: "/marco-teorico/generalidades",
        }}
        rightPage={{
          name: "Antecedentes",
          path: "/marco-teorico/antecedentes",
        }}
      />
    </MarcoTeoricoPageStyled>
  );
};
