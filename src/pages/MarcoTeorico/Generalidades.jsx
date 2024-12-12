import MarcoTeoricoPageStyled, { BreadcrumbNav } from "./MarcoTeoricoStyled";
import PageNavigation from "../../components/PageNavigation/PageNavigation";

export const Generalidades = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Marco Teorico</li>
          <li>Generalidade</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="intro">1.1 Generalidades</h3>
      <p>
        Esta sección establece las bases del estudio. Se introduce el tema
        central y se contextualiza dentro de la empresa en cuestión. Se presenta
        la misión, visión y valores de la empresa, así como los grupos de
        interés involucrados en el proyecto.
      </p>
      <p>
        Además, se realiza un análisis del entorno externo (PESTEL) para
        identificar las oportunidades y amenazas que podrían afectar la
        implementación del nuevo sistema. El planteamiento del problema detalla
        las dificultades actuales en la gestión del inventario, sus causas y
        consecuencias. Los objetivos del estudio definen claramente lo que se
        busca lograr con la investigación.
      </p>
      <p>
        Finalmente, se describe la metodología que se utilizará para recolectar
        y analizar los datos, incluyendo la justificación de las técnicas
        empleadas.
      </p>

      <PageNavigation
        leftPage={{
          name: "Introduccion",
          path: "/marco-teorico/intro",
        }}
        rightPage={{
          name: "Analisis estructurado teorico",
          path: "/marco-teorico/analisis-estructurado-teorico",
        }}
      />
    </MarcoTeoricoPageStyled>
  );
};
