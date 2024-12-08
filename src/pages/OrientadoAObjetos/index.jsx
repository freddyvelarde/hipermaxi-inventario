import React from "react";
import OrientadoAObjetosStyled from "./OrientadoAObjetosStyled"; // Importa el archivo de estilos

// Importación de la imagen del diagrama
import DiagramaOrientadoAObjetos from "../OrientadoAObjetos/assets/Diagrama-OrientadoAObjetos.jpg";
import { ZoomInImage } from "../../components/ZoomInImage/ZoomInImage";
import { BreadcrumbNav } from "../AnalisisEstruturado/AnalisisEstructuradoStyled";
import PageNavigation from "../../components/PageNavigation/PageNavigation";

const OrientadoAObjetos = () => {
  return (
    <OrientadoAObjetosStyled>
      <BreadcrumbNav>
        <ul>
          <li>Orientado a Objetos</li>
        </ul>
      </BreadcrumbNav>
      <h3>Diagrama Orientado a Objetos</h3>

      <p>
        En esta sección se presenta el diagrama orientado a objetos, el cual
        describe las clases y objetos en el sistema de gestión de inventarios.
        Este diagrama permite visualizar la estructura del sistema, mostrando
        las relaciones entre las clases, atributos y métodos que forman el
        núcleo de la aplicación.
      </p>

      <p>
        Este diagrama es crucial para entender la arquitectura del sistema y
        cómo cada componente interactúa dentro del sistema de gestión de
        inventarios, permitiendo una mejor comprensión y desarrollo del
        software.
      </p>
      <ZoomInImage
        src={DiagramaOrientadoAObjetos}
        alt="Diagrama Orientado a Objetos"
        width="auto"
        className="diagrama"
      />
      <PageNavigation
        leftPage={{
          name: "Analisis Estructurado",
          path: "/analisis-estructurado/declaracion_de_propositos",
        }}
        rightPage={{
          name: "Marco Teorico",
          path: "/marco-teorico/intro",
        }}
      />
    </OrientadoAObjetosStyled>
  );
};

export default OrientadoAObjetos;
