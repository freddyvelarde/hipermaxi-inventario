import banner from "./assets/banner-hipermaxi.jpg";
import inv1 from "./assets/1.jpeg";
import inv2 from "./assets/2.jpeg";
import inv3 from "./assets/3.jpeg";
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
import Card from "../../components/Card";
import InventoryComparison from "../../components/ComparisoTable";
import NoticeCard from "../../components/Notice/Notice";

const Home = () => {
  // const images = [inv1, inv2, inv3, inv4];

  return (
    <HomeContainer>
      <NoticeCard
        title="Nueva funcionalidad"
        description="Haz click y luego scroll sobre los diagramas para ampliarlos."
        tag="Imagenes"
      />
      <Header>
        <Title>Sistemas y Gestion de Inventario</Title>
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

      <InventoryComparison />
      <div className="cards">
        <Card
          title="Anális Estructurado"
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
