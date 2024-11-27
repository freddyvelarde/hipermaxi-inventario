import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: ${(props) => props.theme.textBody || "#333"};
  background: ${(props) => props.theme.background || "#f9f9f9"};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => props.theme.textHeading || "#111"};

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Column = styled.div`
  background: ${(props) => props.theme.overlay || "#fff"};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FeatureTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.$color || props.theme.textHeading || "#333"};

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin: 0;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  color: ${(props) =>
    props.$negative
      ? "#d32f2f"
      : props.theme.textBody || "#333"}; /* Red for negatives */

  @media (max-width: 768px) {
    font-size: 0.875rem;
    gap: 0.25rem;
    padding: 0.5rem 0;
  }
`;

const Check = styled.span`
  color: ${(props) =>
    props.$negative ? "#d32f2f" : "#388e3c"}; /* Green for positives */
  font-weight: bold;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InventoryComparison = () => {
  return (
    <Container id="pros-contras">
      <Title>Sistema de Inventario: Análisis Comparativo</Title>

      <Grid>
        <Column>
          <FeatureTitle id="caracteristicas">
            Características Principales
          </FeatureTitle>
          <List>
            <ListItem>Control en tiempo real del stock</ListItem>
            <ListItem>Seguimiento de productos</ListItem>
            <ListItem>Gestión de proveedores</ListItem>
            <ListItem>Reportes y análisis</ListItem>
            <ListItem>Alertas automáticas</ListItem>
            <ListItem>Gestión de pedidos</ListItem>
            <ListItem>Control de costos</ListItem>
          </List>
        </Column>

        <Column>
          <FeatureTitle $color="#388e3c">Con Sistema</FeatureTitle>
          <List>
            <ListItem>
              <Check>✓</Check> Control preciso del inventario
            </ListItem>
            <ListItem>
              <Check>✓</Check> Reducción de errores humanos
            </ListItem>
            <ListItem>
              <Check>✓</Check> Ahorro de tiempo
            </ListItem>
            <ListItem>
              <Check>✓</Check> Mejor toma de decisiones
            </ListItem>
            <ListItem>
              <Check>✓</Check> Prevención de pérdidas
            </ListItem>
            <ListItem>
              <Check>✓</Check> Optimización de costos
            </ListItem>
            <ListItem>
              <Check>✓</Check> Mayor productividad
            </ListItem>
          </List>
        </Column>

        <Column>
          <FeatureTitle $color="#d32f2f">Sin Sistema</FeatureTitle>
          <List>
            <ListItem $negative>
              <Check $negative>✗</Check> Pérdida de control de stock
            </ListItem>
            <ListItem $negative>
              <Check $negative>✗</Check> Errores frecuentes
            </ListItem>
            <ListItem $negative>
              <Check $negative>✗</Check> Tiempo perdido
            </ListItem>
            <ListItem $negative>
              <Check $negative>✗</Check> Decisiones sin datos
            </ListItem>
            <ListItem $negative>
              <Check $negative>✗</Check> Pérdidas financieras
            </ListItem>
            <ListItem $negative>
              <Check $negative>✗</Check> Costos elevados
            </ListItem>
            <ListItem $negative>
              <Check $negative>✗</Check> Baja eficiencia
            </ListItem>
          </List>
        </Column>
      </Grid>

      <Column>
        <FeatureTitle id="analisis-detallado">Análisis Detallado</FeatureTitle>
        <List>
          <ListItem>
            <strong>Ventajas de tener un sistema:</strong> Automatización de
            procesos, reducción de errores, mejor control de costos, toma de
            decisiones basada en datos, prevención de pérdidas, optimización de
            recursos, mejor servicio al cliente.
          </ListItem>
          <ListItem>
            <strong>Desventajas de no tener un sistema:</strong> Pérdida de
            control sobre el inventario, errores en conteos manuales, tiempo
            excesivo en tareas administrativas, pérdidas financieras por
            sobre/substock, dificultad para planificar compras, servicio al
            cliente deficiente.
          </ListItem>
          <ListItem>
            <strong>Impacto en el negocio:</strong> Un sistema de inventario es
            crucial para la eficiencia operativa, la rentabilidad y el
            crecimiento sostenible del negocio. La falta de uno puede resultar
            en pérdidas significativas y oportunidades perdidas.
          </ListItem>
        </List>
      </Column>
    </Container>
  );
};

export default InventoryComparison;
