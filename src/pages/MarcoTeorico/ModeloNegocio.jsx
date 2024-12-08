import PageNavigation from "../../components/PageNavigation/PageNavigation";
import MarcoTeoricoPageStyled, {
  BreadcrumbNav,
  TableStyled,
} from "./MarcoTeoricoStyled";

export const ModeloNegocio = () => {
  return (
    <MarcoTeoricoPageStyled>
      <section>
        <BreadcrumbNav>
          <ul>
            <li>Marco Teorico</li>
            <li>Modelo de negocio</li>
          </ul>
        </BreadcrumbNav>
        <h2 id="negocio">1.2.8 Modelo de Negocio</h2>
        <p>
          El modelo de negocio de Hipermaxi incluye una propuesta de valor
          basada en calidad y precios competitivos, y se enfoca en segmentos de
          clientes mayores de 18 años.
        </p>
        <TableStyled>
          <thead>
            <tr>
              <th>Componente</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Propuesta de Valor</td>
              <td>Variedad, calidad y precios competitivos.</td>
            </tr>
            <tr>
              <td>Segmento de Clientes</td>
              <td>Personas mayores de 18 años.</td>
            </tr>
            <tr>
              <td>Relaciones con Clientes</td>
              <td>Atención personalizada y eficaz.</td>
            </tr>
            <tr>
              <td>Canales</td>
              <td>Redes sociales, app móvil, letreros y televisión.</td>
            </tr>
            <tr>
              <td>Recursos Clave</td>
              <td>
                Personal capacitado, infraestructura moderna, liderazgo fuerte.
              </td>
            </tr>
            <tr>
              <td>Estructura de Costos</td>
              <td>Salarios, impuestos, servicios básicos y proveedores.</td>
            </tr>
            <tr>
              <td>Fuentes de Ingresos</td>
              <td>Ventas de productos y promociones estacionales.</td>
            </tr>
          </tbody>
        </TableStyled>
      </section>
      <PageNavigation
        leftPage={{
          name: "Análisis FODA",
          path: "/marco-teorico/analisis_foda",
        }}
        rightPage={{
          name: "Planteamiento del Problema",
          path: "/marco-teorico/planteamiento_del_problema",
        }}
      />
    </MarcoTeoricoPageStyled>
  );
};
