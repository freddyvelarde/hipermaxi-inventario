import AnalisisEstructuradoStyled, {
  BreadcrumbNav,
} from "./AnalisisEstructuradoStyled";
// import dic1 from "../AnalisisEstruturado/assets/dic1.png";
// import dic2 from "../AnalisisEstruturado/assets/dic2.png";
import dictionario from "../AnalisisEstruturado/assets/dicdatosv1.jpg";
import { ZoomInImage } from "../../components/ZoomInImage/ZoomInImage";
import PageNavigation from "../../components/PageNavigation/PageNavigation";

export const Diccionario = () => {
  return (
    <AnalisisEstructuradoStyled>
      <BreadcrumbNav>
        <ul>
          <li>Análisis Estructurado</li>
          <li>Modelo de comportamiento</li>
          <li>Diccionario de datos.</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="diccionario_datos">Diccionario de Datos</h3>
      <p>
        El diccionario de datos define los términos, atributos y entidades
        utilizados en el sistema, como los productos, categorías, fechas de
        entrada y salida, y las cantidades disponibles.
      </p>
      <br />
      <ZoomInImage
        src={dictionario}
        alt="Diagrama ER"
        width="auto"
        className="diagrama"
      />
      <PageNavigation
        leftPage={{
          name: "Diagrama DEER",
          path: "/analisis-estructurado/diagrama_deer",
        }}
        rightPage={{
          name: "Orientado a Objetos",
          path: "/orientado-objetos",
        }}
      />
    </AnalisisEstructuradoStyled>
  );
};
