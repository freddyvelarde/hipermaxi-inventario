import AnalisisEstructuradoStyled, {
  BreadcrumbNav,
} from "./AnalisisEstructuradoStyled";

export const DeclaracionPropositos = () => {
  return (
    <AnalisisEstructuradoStyled>
      <BreadcrumbNav>
        <ul>
          <li>Análisis Estructurado</li>
          <li>Modelo Ambiental</li>
          <li>Declaración de Propósitos</li>
        </ul>
      </BreadcrumbNav>

      <h3 id="declaracion_de_propositos">Declaración de Propósitos</h3>
      <p>
        El objetivo de este modelo es establecer una visión general del sistema
        de gestión de inventarios, permitiendo entender la interacción entre los
        actores externos e internos, así como los propósitos fundamentales del
        sistema.
      </p>
    </AnalisisEstructuradoStyled>
  );
};
