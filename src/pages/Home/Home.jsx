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
  ImageGallery,
  ImageContainer,
  BannerContainer,
  TextSection,
  BodyContainer,
} from "./HomeStyled";
import mainDrawDark from "./assets/main_draw_dark.svg";
import { Link } from "react-router-dom";

import React from "react";
import styled from "styled-components";

// Styled Components
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

// React Component
const Card = ({ title, desc, link, linkDesc }) => {
  return (
    <CardContainer>
      <IconWrapper>
        <span role="img" aria-label="icon">
          👤
        </span>
      </IconWrapper>
      <CardTitle>{title}</CardTitle>
      <Description>{desc}</Description>
      <CardLink>
        <Link to={link}>{linkDesc} &rarr;</Link>
      </CardLink>
    </CardContainer>
  );
};

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
          Comenzemos <span> &#10158;</span>{" "}
        </Link>
        <img id="draw" src={mainDrawDark} alt="" />
      </Header>

      <BodyContainer id="que-es-hipermaxi">
        <TextSection>
          <h1>Que es Hipermaxi?</h1>
          <p>
            Hipermaxi es una de las cadenas de supermercados más importantes del
            país, reconocida por su compromiso con la calidad y la satisfacción
            del cliente.
          </p>
          <p>
            Este proyecto tiene como objetivo desarrollar un sistema de
            inventario que optimice la gestión de productos y reduzca errores
            operativos.
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
            generará reportes analíticos para la toma de decisiones. No incluye
            la gestión de empleados ni procesos de facturación.
          </p>
        </TextSection>
        <BannerContainer>
          <img src={inv1} alt="Hipermaxi banner" />
        </BannerContainer>
      </BodyContainer>

      <div className="cards">
        <Card
          title="Análisis Estructurado"
          desc="El análisis estructurado es una metodología que descompone el sistema en componentes más pequeños y manejables, permitiendo entender y documentar cada proceso en detalle. Este enfoque utiliza herramientas como diagramas de flujo y diagramas de contexto para representar gráficamente la funcionalidad del sistema."
          link="/analisis-estructurado"
          linkDesc="Explora mas del Analisis Estructurado"
        />
        <Card
          title="Análisis Orientado a Objetos"
          desc="El análisis orientado a objetos se centra en modelar el sistema basándose en objetos que representan entidades reales o abstractas del dominio del problema. Estos objetos encapsulan atributos y comportamientos, permitiendo una mayor modularidad y reutilización del código"
          link="/orientado-objetos"
          linkDesc="Explora mas del Analisis orientado-objetos"
        />
        <Card
          title="Marco Teórico"
          desc="El marco teórico establece los fundamentos conceptuales y metodológicos que sustentan el desarrollo del sistema de inventario. Incluye definiciones clave, principios de diseño de software, y referencias a metodologías de desarrollo como el modelo en cascada y los enfoques ágiles. Este apartado es esencial para justificar las decisiones tomadas y alinear el proyecto con las mejores prácticas del desarrollo de sistemas modernos."
          link="/marco-teorico"
          linkDesc="Explora mas del marco teorico"
        />
      </div>

      {/*
      <ImageGallery>
        {images.map((img, index) => (
          <ImageContainer key={index}>
            <img src={img} alt={`Inventory view ${index + 1}`} />
          </ImageContainer>
        ))}
      </ImageGallery>
      */}
    </HomeContainer>
  );
};

export default Home;
