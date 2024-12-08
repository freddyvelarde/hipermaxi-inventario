import MarcoTeoricoPageStyled, { BreadcrumbNav } from "./MarcoTeoricoStyled";

export const Intro = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Marco Teorico</li>
          <li>Introducción</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="intro">1.1 Introducción</h3>
      <p>
        El Sistema de Gestión de Inventarios del Supermercado Hipermaxi se
        presenta como una solución tecnológica diseñada para optimizar la
        administración de productos, agilizar la toma de decisiones y garantizar
        la disponibilidad de mercancías en función de la demanda.
      </p>
    </MarcoTeoricoPageStyled>
  );
};
