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
} from "./HomeStyled";

const Home = () => {
  const images = [inv1, inv2, inv3, inv4];

  return (
    <HomeContainer>
      <Header>
        <Title>Análisis y Diseño de Sistemas de Inventario</Title>
        <Subtitle>Caso de Estudio: Hipermaxi</Subtitle>
      </Header>

      <BannerContainer>
        <img src={banner} alt="Hipermaxi banner" />
      </BannerContainer>

      <TextSection>
        <p>
          Este sistema de inventario está diseñado para optimizar la gestión de
          productos en la cadena de supermercados Hipermaxi. Con un enfoque en
          la automatización de procesos y la reducción de errores humanos, el
          sistema busca mejorar la eficiencia operativa y garantizar un control
          preciso del inventario.
        </p>
        <p>
          Las principales funcionalidades incluyen la gestión de entradas y
          salidas de productos, seguimiento de niveles de stock en tiempo real y
          generación de reportes analíticos para la toma de decisiones. Las
          imágenes a continuación muestran vistas clave del sistema en
          desarrollo.
        </p>
      </TextSection>

      <ImageGallery>
        {images.map((img, index) => (
          <ImageContainer key={index}>
            <img src={img} alt={`Inventory view ${index + 1}`} />
          </ImageContainer>
        ))}
      </ImageGallery>
    </HomeContainer>
  );
};

export default Home;
