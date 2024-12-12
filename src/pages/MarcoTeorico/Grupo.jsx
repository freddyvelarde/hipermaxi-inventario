import PageNavigation from "../../components/PageNavigation/PageNavigation";
import MarcoTeoricoPageStyled, {
  BreadcrumbNav,
  TableStyled,
} from "./MarcoTeoricoStyled";

export const Grupo = () => {
  return (
    <MarcoTeoricoPageStyled>
      <section>
        <BreadcrumbNav>
          <ul>
            <li>Marco Teorico</li>
            <li>Grupo de Interés</li>
          </ul>
        </BreadcrumbNav>
        <h3 id="grupo">1.5 Grupos de Interés</h3>
        <p>
          Hipermaxi gestiona diferentes grupos de interés, tanto internos como
          externos, asegurando relaciones duraderas con empleados, proveedores,
          clientes y el Estado.
        </p>
        <TableStyled>
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Descripción</th>
              <th>Relación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Internos - Empleados</td>
              <td>
                Garantía de empleo estable, salarios adecuados y capacitaciones
                frecuentes.
              </td>
              <td>Desarrollo del talento humano dentro de la organización.</td>
            </tr>
            <tr>
              <td>Internos - Accionistas</td>
              <td>
                Rentabilidad y control de riesgos para el crecimiento del
                capital.
              </td>
              <td>Generación de valor y retorno para los accionistas.</td>
            </tr>
            <tr>
              <td>Externos - Proveedores</td>
              <td>
                Relaciones duraderas con pagos puntuales y estándares de
                calidad.
              </td>
              <td>Colaboración a largo plazo con proveedores clave.</td>
            </tr>
            <tr>
              <td>Externos - Clientes</td>
              <td>Productos de alta calidad a precios competitivos.</td>
              <td>Enfoque en satisfacer las necesidades del cliente.</td>
            </tr>
            <tr>
              <td>Externos - Estado</td>
              <td>Cumplimiento fiscal y de regulaciones laborales.</td>
              <td>Relaciones legales y cumplimiento de regulaciones.</td>
            </tr>
          </tbody>
        </TableStyled>
      </section>
      <PageNavigation
        leftPage={{ name: "Antecedentes", path: "/marco-teorico/antecedentes" }}
        rightPage={{
          name: "Análisis FODA",
          path: "/marco-teorico/analisis_foda",
        }}
      />
    </MarcoTeoricoPageStyled>
  );
};
