import MarcoTeoricoPageStyled, { BreadcrumbNav } from "./MarcoTeoricoStyled";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import { ZoomInImage } from "../../components/ZoomInImage/ZoomInImage";
import genero from "./assets/genero.png";
import frecuencia from "./assets/frecuencia.png";
import concurrida from "./assets/concurrida.png";
import dificultad from "./assets/dificultad.png";
import tiempo from "./assets/tiempo.png";
import agotados from "./assets/agotados.png";
import sisact from "./assets/sistema-actual.png";
import eficiencia from "./assets/eficiencia.png";
import problemas from "./assets/problemas.png";
import problemasinfo from "./assets/problemasinfo.png";
import stock from "./assets/problemasinfo.png";
import productosOnline from "./assets/productosonline.png";
import dispo from "./assets/disponibilidad.png";
import visita from "./assets/visitaPaginaweb.png";
import paginaClara from "./assets/paginaclara.png";
import satisfecho from "./assets/satisfecho.png";
import mejorar from "./assets/mejorar.png";

export const Encuestas = () => {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Marco Teorico</li>
          <li>Resultado de Encuestas</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="intro">1.10 Resultado de Encuestas</h3>

      <p>
        La gráfica muestra la distribución de género entre los clientes que
        visitan el supermercado Hipermaxi.
      </p>
      <ZoomInImage
        src={genero}
        alt="Distribución de género"
        width="auto"
        className="diagrama"
      />

      <p>
        La siguiente gráfica presenta la frecuencia con la que los clientes
        visitan el supermercado, identificando los hábitos de compra.
      </p>
      <ZoomInImage
        src={frecuencia}
        alt="Frecuencia de visita"
        width="auto"
        className="diagrama"
      />

      <p>
        Aquí se observa cuál es la sucursal más concurrida por los clientes, lo
        que permite analizar la demanda en diferentes ubicaciones.
      </p>
      <ZoomInImage
        src={concurrida}
        alt="Sucursal más concurrida"
        width="auto"
        className="diagrama"
      />

      <p>
        Este gráfico muestra la dificultad que los clientes enfrentan al buscar
        productos en el supermercado.
      </p>
      <ZoomInImage
        src={dificultad}
        alt="Dificultad de búsqueda de productos"
        width="auto"
        className="diagrama"
      />

      <p>
        Se presenta el tiempo que los clientes tardan en encontrar productos
        dentro del supermercado.
      </p>
      <ZoomInImage
        src={tiempo}
        alt="Tiempo de búsqueda de productos"
        width="auto"
        className="diagrama"
      />

      <p>
        La gráfica refleja la frecuencia con la que los clientes encuentran
        productos agotados durante sus compras.
      </p>
      <ZoomInImage
        src={agotados}
        alt="Productos agotados"
        width="auto"
        className="diagrama"
      />

      <p>
        Se analiza la eficiencia de los filtros de búsqueda actuales para
        encontrar productos en el sistema.
      </p>
      <ZoomInImage
        src={eficiencia}
        alt="Eficiencia de los filtros de búsqueda"
        width="auto"
        className="diagrama"
      />

      <p>
        Este gráfico presenta los principales problemas identificados con el
        sistema actual de Hipermaxi.
      </p>
      <ZoomInImage
        src={problemas}
        alt="Problemas con el sistema actual"
        width="auto"
        className="diagrama"
      />

      <p>
        Se observa en detalle los problemas relacionados con la información del
        sistema actual.
      </p>
      <ZoomInImage
        src={problemasinfo}
        alt="Problemas de información"
        width="auto"
        className="diagrama"
      />

      <p>
        Este gráfico muestra los problemas relacionados con la falta de
        actualización de inventario y stock de productos.
      </p>
      <ZoomInImage
        src={stock}
        alt="Problemas de stock"
        width="auto"
        className="diagrama"
      />

      <p>
        Aquí se destaca cómo afecta la falta de productos online a la
        experiencia de compra de los clientes.
      </p>
      <ZoomInImage
        src={productosOnline}
        alt="Problemas con productos online"
        width="auto"
        className="diagrama"
      />

      <p>
        La siguiente gráfica refleja los problemas de disponibilidad de
        productos en las sucursales.
      </p>
      <ZoomInImage
        src={dispo}
        alt="Disponibilidad de productos"
        width="auto"
        className="diagrama"
      />

      <p>
        Este gráfico muestra la frecuencia con la que los clientes visitan la
        página web del supermercado.
      </p>
      <ZoomInImage
        src={visita}
        alt="Visita a la página web"
        width="auto"
        className="diagrama"
      />

      <p>
        Se evalúa la claridad de la página web de Hipermaxi y su facilidad de
        uso según los clientes.
      </p>
      <ZoomInImage
        src={paginaClara}
        alt="Claridad de la página web"
        width="auto"
        className="diagrama"
      />

      <p>
        La gráfica refleja el nivel de satisfacción de los clientes respecto al
        sistema actual.
      </p>
      <ZoomInImage
        src={satisfecho}
        alt="Satisfacción del cliente"
        width="auto"
        className="diagrama"
      />

      <p>
        Este gráfico presenta sugerencias de mejora propuestas por los clientes
        para optimizar el sistema actual.
      </p>
      <ZoomInImage
        src={mejorar}
        alt="Sugerencias de mejora"
        width="auto"
        className="diagrama"
      />

      <p>
        Finalmente, la gráfica analiza el funcionamiento global del sistema
        actual de Hipermaxi.
      </p>
      <ZoomInImage
        src={sisact}
        alt="Sistema actual"
        width="auto"
        className="diagrama"
      />

      <PageNavigation
        leftPage={{
          name: "Vision",
          path: "/marco-teorico/vision",
        }}
        rightPage={{
          name: "Video",
          path: "/video",
        }}
      />
    </MarcoTeoricoPageStyled>
  );
};
