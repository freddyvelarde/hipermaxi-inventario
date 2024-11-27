import banner from "./assets/banner-hipermaxi.jpg";
import inv1 from "./assets/1.jpeg";
import inv2 from "./assets/2.jpeg";
import inv3 from "./assets/3.jpeg";
import inv4 from "./assets/4.jpeg";
import {
  HomeContainer,
  Header,
  Title,
  Subtitle,
  // ImageGallery,
  // ImageContainer,
  BannerContainer,
  TextSection,
  BodyContainer,
} from "./HomeStyled";
import mainDrawDark from "./assets/main_draw_dark.svg";
import { Link } from "react-router-dom";

import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import InventoryComparison from "../../components/ComparisoTable";

const CardContainer = styled.div`
  width: 320px;
  background-color: ${(props) => props.theme.overlay};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.textHeading};
  font-family: Arial, sans-serif;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3a3a3c; /* Slightly lighter background for the icon */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 12px 0;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
`;

const CardLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.primaryButton};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// const Card = ({ title, desc, link, linkDesc }) => {
//   return (
//     <CardContainer>
//       <IconWrapper>
//         <span role="img" aria-label="icon">
//           👤
//         </span>
//       </IconWrapper>
//       <CardTitle>{title}</CardTitle>
//       <Description>{desc}</Description>
//       <CardLink>
//         <Link to={link}>{linkDesc} &rarr;</Link>
//       </CardLink>
//     </CardContainer>
//   );
// };
//
const Home = () => {
  // const images = [inv1, inv2, inv3, inv4];

  return (
    <HomeContainer>
      <Header>
        <Title>Análisis y Diseño de Sistemas de Inventario</Title>
        <Subtitle>
          Hipermaxi, el supermercado de Bolivia que transforma tu experiencia de
          compra con calidad, variedad y confianza en cada pasillo.
        </Subtitle>
        <Link to="#que-es-hipermaxi">
          Comencemos <span> &#10158;</span>{" "}
        </Link>
        <img id="draw" src={mainDrawDark} alt="Ilustración de inicio" />
      </Header>

      <BodyContainer id="que-es-hipermaxi">
        <TextSection>
          <h1>¿Qué es Hipermaxi?</h1>
          <p>
            Hipermaxi es una de las cadenas de supermercados más importantes de
            Bolivia, reconocida por su compromiso con la calidad, variedad y la
            satisfacción del cliente.
          </p>
          <p>
            Este proyecto tiene como objetivo desarrollar un sistema de
            inventario que optimice la gestión de productos, automatice procesos
            clave y reduzca los errores operativos.
          </p>
        </TextSection>
        <BannerContainer>
          <img src={banner} alt="Hipermaxi banner" />
        </BannerContainer>
      </BodyContainer>

      <BodyContainer id="alcance">
        <TextSection>
          <h1>Alcance del Proyecto</h1>
          <p>
            El sistema de inventario gestionará el registro de entradas y
            salidas de productos, controlará niveles de stock en tiempo real y
            generará reportes analíticos que facilitarán la toma de decisiones
            estratégicas.
          </p>
          <p>
            Es importante destacar que el alcance del sistema se limita a la
            gestión del inventario y no incluye aspectos como la administración
            de empleados ni procesos de facturación.
          </p>
        </TextSection>
        <BannerContainer>
          <img src={inv1} alt="Vista del sistema de inventario en desarrollo" />
        </BannerContainer>
      </BodyContainer>

      <BodyContainer id="mision">
        <TextSection>
          <h1>Misión del Proyecto</h1>
          <p>
            Desarrollar un sistema de inventario eficiente y confiable que
            optimice la gestión de productos en la cadena de supermercados
            Hipermaxi.{" "}
          </p>
          <p>
            Este sistema buscará apoyar la misión de la empresa de liderar el
            mercado de retail en Bolivia, mejorando la calidad del servicio a
            través de procesos automatizados, reducción de errores operativos y
            una administración ágil de los recursos.
          </p>
        </TextSection>
        <BannerContainer>
          <img src={inv2} alt="Vista del sistema de inventario en desarrollo" />
        </BannerContainer>
      </BodyContainer>
      <BodyContainer id="vision">
        <TextSection>
          <h1>Visión del Proyecto</h1>
          <p>
            Convertirse en un referente tecnológico en la gestión de inventarios
            para cadenas de supermercados, alineándose con la visión de
            expansión y liderazgo de Hipermaxi.
          </p>
          <p>
            Este sistema será una herramienta estratégica que no solo modernice
            la administración de inventarios, sino que también impulse la
            innovación y contribuya al crecimiento sostenible de la empresa en
            el competitivo mercado del retail boliviano.
          </p>
        </TextSection>
        <BannerContainer>
          <img src={inv3} alt="Vista del sistema de inventario en desarrollo" />
        </BannerContainer>
      </BodyContainer>

      <InventoryComparison />
      <div className="cards">
        <Card
          title="Análisis Estructurado"
          desc="El análisis estructurado es una metodología que descompone el sistema en componentes más pequeños y manejables, permitiendo entender y documentar cada proceso en detalle. Este enfoque utiliza herramientas como diagramas de flujo y diagramas de contexto para representar gráficamente la funcionalidad del sistema."
          link="/analisis-estructurado"
          linkDesc="Explora más del análisis estructurado"
        />
        <Card
          title="Análisis Orientado a Objetos"
          desc="El análisis orientado a objetos se centra en modelar el sistema basándose en objetos que representan entidades reales o abstractas del dominio del problema. Estos objetos encapsulan atributos y comportamientos, permitiendo una mayor modularidad y reutilización del código."
          link="/orientado-objetos"
          linkDesc="Explora más del análisis orientado a objetos"
        />
        <Card
          title="Marco Teórico"
          desc="El marco teórico establece los fundamentos conceptuales y metodológicos que sustentan el desarrollo del sistema de inventario. Incluye definiciones clave, principios de diseño de software y referencias a metodologías de desarrollo como el modelo en cascada y los enfoques ágiles. Este apartado es esencial para justificar las decisiones tomadas y alinear el proyecto con las mejores prácticas del desarrollo de sistemas modernos."
          link="/marco-teorico"
          linkDesc="Explora más del marco teórico"
        />
      </div>
    </HomeContainer>
  );
};

export default Home;
