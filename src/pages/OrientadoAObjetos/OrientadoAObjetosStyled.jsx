import styled from "styled-components";

const OrientadoAObjetosStyled = styled.div`
  padding: 30px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textBody};
  font-family: "Arial", sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.8;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.textHeading};
    text-align: center;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.highlight};
    margin-bottom: 20px;
    border-bottom: 2px solid ${(props) => props.theme.accent};
    padding-bottom: 5px;
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.textBody};
    margin-bottom: 15px;
    line-height: 1.6;
  }

  img.diagrama {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  section {
    margin-bottom: 40px;
  }

  /* Estilos adicionales para las secciones */
  section:nth-of-type(odd) {
    background-color: ${(props) => props.theme.overlay};
    padding: 20px;
    border-radius: 10px;
  }

  section:nth-of-type(even) {
    background-color: ${(props) => props.theme.surface};
    padding: 20px;
    border-radius: 10px;
  }
`;

export default OrientadoAObjetosStyled;
