import AnalisisEstructuradoStyled, {
  BreadcrumbNav,
} from "./AnalisisEstructuradoStyled";

export const ListaAcontecimientos = () => {
  // <h1>Análisis Estructurado</h1>
  // <h2 id="modelo_ambiental">1. Modelo Ambiental</h2>
  return (
    <AnalisisEstructuradoStyled>
      <BreadcrumbNav>
        <ul>
          <li>Análisis Estructurado</li>
          <li>Modelo Ambiental</li>
          <li>Lista de Acontecimientos</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="lista_de_acontecimientos">Lista de Acontecimientos</h3>
      <p>
        Los eventos clave en este sistema incluyen la entrada de productos, la
        actualización del inventario, la venta de productos y la reposición de
        stock.
      </p>
    </AnalisisEstructuradoStyled>
  );
};
