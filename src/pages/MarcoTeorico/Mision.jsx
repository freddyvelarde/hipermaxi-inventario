import PageNavigation from "../../components/PageNavigation/PageNavigation";
import MarcoTeoricoPageStyled, { BreadcrumbNav } from "./MarcoTeoricoStyled";

export const Mision = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Marco Teorico</li>
          <li>Mision</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="ante">1.7 Mision</h3>
      <p>
        Desarrollar un sistema de inventario eficiente y confiable que optimice
        la gestión de productos en la cadena de supermercados Hipermaxi.{" "}
      </p>
      <p>
        Este sistema buscará apoyar la misión de la empresa de liderar el
        mercado de retail en Bolivia, mejorando la calidad del servicio a través
        de procesos automatizados, reducción de errores operativos y una
        administración ágil de los recursos.
      </p>
      <PageNavigation
        leftPage={{
          name: "Plateamiento del Problema",
          path: "/marco-teorico/planteamiento_del_problema",
        }}
        rightPage={{
          name: "Vision",
          path: "/marco-teorico/vision",
        }}
      />
    </MarcoTeoricoPageStyled>
  );
};
