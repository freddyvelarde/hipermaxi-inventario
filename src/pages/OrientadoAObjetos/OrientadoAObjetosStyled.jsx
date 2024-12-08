import styled from "styled-components";

const OrientadoAObjetosStyled = styled.div`
  // padding: 30px;
  // background-color: ${(props) => props.theme.background};
  // color: ${(props) => props.theme.textBody};
  // font-family: "Arial", sans-serif;
  // max-width: 1200px;
  // margin: 0 auto;
  // line-height: 1.8;
  //
  // h1 {
  //   font-size: 2.5rem;
  //   font-weight: bold;
  //   color: ${(props) => props.theme.textHeading};
  //   text-align: center;
  //   margin-bottom: 40px;
  // }
  //
  // h2 {
  //   font-size: 2rem;
  //   color: ${(props) => props.theme.highlight};
  //   margin-bottom: 20px;
  //   border-bottom: 2px solid ${(props) => props.theme.accent};
  //   padding-bottom: 5px;
  // }
  //
  // p {
  //   font-size: 1.2rem;
  //   color: ${(props) => props.theme.textBody};
  //   margin-bottom: 15px;
  //   line-height: 1.6;
  // }
  //
  // img.diagrama {
  //   max-width: 100%;
  //   height: auto;
  //   border-radius: 8px;
  //   margin: 20px 0;
  //   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  // }
  //
  // section {
  //   margin-bottom: 40px;
  // }
  //
  // /* Estilos adicionales para las secciones */
  // section:nth-of-type(odd) {
  //   background-color: ${(props) => props.theme.overlay};
  //   padding: 20px;
  //   border-radius: 10px;
  // }
  //
  // section:nth-of-type(even) {
  //   background-color: ${(props) => props.theme.surface};
  //   padding: 20px;
  //   border-radius: 10px;
  // }
  padding: 2rem;
  background: ${(props) => props.theme.background};
  min-height: 100vh;

  h3 {
    color: ${(props) => props.theme.textHeading};
    font-size: 2.5rem;
    margin-bottom: 2rem;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 60px;
      height: 4px;
      background: ${(props) => props.theme.primaryButton};
      border-radius: 2px;
    }
  }

  p {
    margin-bottom: 10px;
    color: ${(props) => props.theme.textBody};
    font-size: 1.1rem;
    line-height: 1.8;
    // max-width: 800px;
    padding: 1.5rem;
    background: ${(props) => props.theme.overlay};
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-left: 4px solid ${(props) => props.theme.accent};
    margin-top: 2rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default OrientadoAObjetosStyled;
