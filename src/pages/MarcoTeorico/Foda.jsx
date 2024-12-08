import { BreadcrumbNav } from "../AnalisisEstruturado/AnalisisEstructuradoStyled";
import MarcoTeoricoPageStyled, { TableStyled } from "./MarcoTeoricoStyled";

export const Foda = () => {
  return (
    <MarcoTeoricoPageStyled>
      <section>
        <BreadcrumbNav>
          <ul>
            <li>Marco Teorico</li>
            <li>Analisis Foda</li>
          </ul>
        </BreadcrumbNav>
        <h2 id="foda">1.2.7 Análisis FODA</h2>
        <p>
          El análisis FODA muestra las fortalezas de Hipermaxi como su variedad
          de productos y su personal capacitado, mientras que las amenazas
          incluyen la entrada de nuevos competidores y la sustitución de
          productos por tiendas de barrio.
        </p>
        <TableStyled>
          <thead>
            <tr>
              <th>Fortalezas</th>
              <th>Oportunidades</th>
              <th>Estrategias F-O</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amplia variedad de productos</td>
              <td>Expansión en marketing</td>
              <td>
                Crear campañas publicitarias en medios digitales y físicos.
              </td>
            </tr>
            <tr>
              <td>Personal calificado y comprometido</td>
              <td>Apertura de sucursales en nuevas regiones</td>
              <td>Fortalecer la capacitación y fidelización del personal.</td>
            </tr>
            <tr>
              <td>Precios accesibles</td>
              <td>Aprovechamiento de tecnología</td>
              <td>Potenciar la app para mejorar la experiencia del cliente.</td>
            </tr>
          </tbody>
        </TableStyled>

        <TableStyled>
          <thead>
            <tr>
              <th>Debilidades</th>
              <th>Amenazas</th>
              <th>Estrategias D-A</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Altos costos de marcas propias</td>
              <td>Entrada de nuevos competidores</td>
              <td>Realizar estudios para ajustar márgenes de ganancia.</td>
            </tr>
            <tr>
              <td>Incumplimiento de proveedores</td>
              <td>Sustitución de productos por tiendas de barrio</td>
              <td>
                Mejorar contratos con proveedores clave y campañas de
                fidelización.
              </td>
            </tr>
          </tbody>
        </TableStyled>
      </section>
    </MarcoTeoricoPageStyled>
  );
};
