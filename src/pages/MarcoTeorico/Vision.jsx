import PageNavigation from "../../components/PageNavigation/PageNavigation";
import MarcoTeoricoPageStyled, { BreadcrumbNav } from "./MarcoTeoricoStyled";

export const Vision = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Marco Teorico</li>
          <li>Vision</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="ante">1.8 Vision</h3>
      <p>
        Convertirse en un referente tecnológico en la gestión de inventarios
        para cadenas de supermercados, alineándose con la visión de expansión y
        liderazgo de Hipermaxi.
      </p>
      <p>
        Este sistema será una herramienta estratégica que no solo modernice la
        administración de inventarios, sino que también impulse la innovación y
        contribuya al crecimiento sostenible de la empresa en el competitivo
        mercado del retail boliviano.
      </p>
      <PageNavigation
        leftPage={{ name: "Mision", path: "/marco-teorico/mision" }}
        rightPage={null}
      />
    </MarcoTeoricoPageStyled>
  );
};
