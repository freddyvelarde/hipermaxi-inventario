import PageNavigation from "../../components/PageNavigation/PageNavigation";
import MarcoTeoricoPageStyled, { BreadcrumbNav } from "./MarcoTeoricoStyled";

export const Antecedentes = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Marco Teorico</li>
          <li>Antecedentes</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="ante">1.2 Antecedentes</h3>
      <p>
        Hipermaxi S.A. inició operaciones en 1994 y, desde entonces, ha
        experimentado una expansión significativa en Bolivia. Con sucursales en
        varias ciudades y un modelo de negocio diversificado, la empresa se ha
        consolidado como líder en el mercado de supermercados.
      </p>
      <PageNavigation
        leftPage={{ name: "Introducción", path: "/marco-teorico/intro" }}
        rightPage={{
          name: "Grupo de Interés",
          path: "/marco-teorico/grupo_intereses",
        }}
      />
    </MarcoTeoricoPageStyled>
  );
};
