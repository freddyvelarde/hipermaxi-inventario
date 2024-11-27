import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.textHeading};
  text-align: center;
`;

const TypingTitle = () => {
  const fullText = "Análisis y Diseño de Sistemas de Inventario";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typeInterval); // Detiene el intervalo cuando se completa el texto
      }
    }, 80); // Velocidad de tipeo (100 ms por carácter)

    return () => clearInterval(typeInterval); // Limpia el intervalo en caso de desmontar el componente
  }, [fullText]);

  return <Title>{typedText}</Title>;
};

export default TypingTitle;
