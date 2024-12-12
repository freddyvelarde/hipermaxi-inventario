import styled from "styled-components";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import MarcoTeoricoPageStyled, {
  BreadcrumbNav,
} from "../MarcoTeorico/MarcoTeoricoStyled";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto; /* Scroll horizontal en pantallas pequeñas */
  margin: 1.5rem 0;
`;

const TableStyled = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 0 auto;
  background: ${(props) => props.theme.overlay};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 1.2rem;
    text-align: left;
    border-bottom: 1px solid ${(props) => props.theme.border};
    transition:
      background 0.3s ease,
      box-shadow 0.3s ease;
  }

  th {
    background: ${(props) => props.theme.primaryButton};
    color: ${(props) => props.theme.textHeading};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  tbody tr {
    &:nth-child(even) {
      background: ${(props) => props.theme.tableRowEven};
    }

    &:hover {
      background: ${(props) => props.theme.hoverBackground};
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 0.75rem;
      font-size: 0.9rem;
    }
  }
`;

export const CasosUsoTexto = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Casos de uso</li>
          <li>Casos de uso de texto</li>
        </ul>
      </BreadcrumbNav>
      <section>
        <h3>Casos de Uso de texto a Nivel Expandido</h3>
        <p>
          Describe en detalle cada paso de un caso de uso, incluyendo flujos
          alternativos y excepciones. Especifica cómo se lleva a cabo la
          interacción entre el sistema y los actores de manera detallada.
        </p>

        <br />
        <h4>Caso expandido de uso de Registrar Productos</h4>
        <TableContainer>
          <TableStyled>
            <tbody>
              <tr>
                <td>Caso de uso</td>
                <td>Registrar Productos</td>
              </tr>
              <tr>
                <td>Actores</td>
                <td>Empleado</td>
              </tr>
              <tr>
                <td>Propósito</td>
                <td>
                  Permitir a los empleados registrar nuevos productos en el
                  inventario.
                </td>
              </tr>
              <tr>
                <td>Resumen</td>
                <td>
                  El empleado accede al módulo de gestión de productos, ingresa
                  los datos del producto (nombre, categoría, precio, stock
                  inicial) y guarda la información. El sistema valida los datos
                  y confirma el registro.
                </td>
              </tr>
              <tr>
                <td>Tipo</td>
                <td>Primario y real</td>
              </tr>
            </tbody>
          </TableStyled>
        </TableContainer>

        <h4>Curso normal de los eventos</h4>
        <TableContainer>
          <TableStyled>
            <thead>
              <tr>
                <th>Acción de los actores</th>
                <th>Respuesta del sistema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>El empleado selecciona la opción 'Registrar Productos'.</td>
                <td>
                  El sistema muestra la interfaz para registrar nuevos
                  productos.
                </td>
              </tr>
              <tr>
                <td>El empleado ingresa los datos del producto y confirma.</td>
                <td>
                  El sistema valida los datos y registra el producto en la base
                  de datos.
                </td>
              </tr>
              <tr>
                <td>El empleado cierra la ventana.</td>
                <td>
                  El sistema muestra un mensaje de confirmación y limpia los
                  campos.
                </td>
              </tr>
            </tbody>
          </TableStyled>
        </TableContainer>

        <h4>Caso expandido de uso de Actualizar Inventario</h4>
        <TableContainer>
          <TableStyled>
            <tbody>
              <tr>
                <td>Caso de uso</td>
                <td>Actualizar Inventario</td>
              </tr>
              <tr>
                <td>Actores</td>
                <td>Empleado, Sistema de Ventas</td>
              </tr>
              <tr>
                <td>Propósito</td>
                <td>
                  Registrar entradas y salidas de productos en el inventario en
                  tiempo real.
                </td>
              </tr>
              <tr>
                <td>Resumen</td>
                <td>
                  El empleado selecciona el producto, indica la cantidad y el
                  tipo de operación (entrada/salida). El sistema actualiza el
                  inventario y muestra un mensaje de confirmación.
                </td>
              </tr>
              <tr>
                <td>Tipo</td>
                <td>Primario y real</td>
              </tr>
            </tbody>
          </TableStyled>
        </TableContainer>

        <h4>Curso normal de los eventos</h4>
        <TableContainer>
          <TableStyled>
            <thead>
              <tr>
                <th>Acción de los actores</th>
                <th>Respuesta del sistema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  El empleado selecciona el producto y el tipo de operación.
                </td>
                <td>
                  El sistema verifica la existencia del producto y su estado.
                </td>
              </tr>
              <tr>
                <td>El empleado ingresa la cantidad y confirma.</td>
                <td>
                  El sistema actualiza el inventario y guarda los cambios.
                </td>
              </tr>
              <tr>
                <td>El empleado cierra la operación.</td>
                <td>
                  El sistema muestra un mensaje de confirmación y finaliza la
                  acción.
                </td>
              </tr>
            </tbody>
          </TableStyled>
        </TableContainer>
        {/* Tablas anteriores */}
        {/* Aquí siguen las tablas ya existentes */}

        {/* Nueva tabla agregada */}
        <h4>Caso expandido de uso de Procesar Pedidos a Proveedores</h4>
        <TableContainer>
          <TableStyled>
            <tbody>
              <tr>
                <td>Caso de uso</td>
                <td>Procesar Pedidos a Proveedores</td>
              </tr>
              <tr>
                <td>Actores</td>
                <td>Gerente, Proveedor</td>
              </tr>
              <tr>
                <td>Propósito</td>
                <td>
                  Automatizar la generación de pedidos para reponer productos
                  con bajo stock.
                </td>
              </tr>
              <tr>
                <td>Resumen</td>
                <td>
                  El gerente revisa el reporte de productos bajos en stock,
                  genera el pedido al proveedor y confirma. El sistema envía el
                  pedido al proveedor y actualiza el estado del inventario.
                </td>
              </tr>
              <tr>
                <td>Tipo</td>
                <td>Primario y real</td>
              </tr>
            </tbody>
          </TableStyled>
        </TableContainer>

        <h4>Curso normal de los eventos</h4>
        <TableContainer>
          <TableStyled>
            <thead>
              <tr>
                <th>Acción de los actores</th>
                <th>Respuesta del sistema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  El gerente revisa el reporte de productos bajos en stock.
                </td>
                <td>El sistema muestra el reporte generado.</td>
              </tr>
              <tr>
                <td>
                  El gerente selecciona los productos a reponer y genera el
                  pedido.
                </td>
                <td>El sistema registra el pedido y lo envía al proveedor.</td>
              </tr>
              <tr>
                <td>El proveedor confirma la recepción del pedido.</td>
                <td>
                  El sistema actualiza el estado del pedido y lo registra como
                  confirmado.
                </td>
              </tr>
            </tbody>
          </TableStyled>
        </TableContainer>
      </section>

      <PageNavigation
        leftPage={{
          name: "Casos de uso de sistemas",
          path: "/casos-uso/sistemas",
        }}
        rightPage={{ name: "Marco Teorico", path: "/marco-teorico/intro" }}
      />
    </MarcoTeoricoPageStyled>
  );
};

export default CasosUsoTexto;
