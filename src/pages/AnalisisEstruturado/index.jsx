import React from "react";
import AnalisisEstructuradoStyled from "./AnalisisEstructuradoStyled"; // Importa el archivo de estilos

import { Outlet } from "react-router-dom";

const AnalisisEstructurado = () => {
  // <h2 id="modelo_comportamiento">2. Modelo de Comportamiento</h2>
  return (
    <AnalisisEstructuradoStyled>
      <h2 id="modelo_comportamiento">Analisis Estructurado</h2>
      <Outlet />
    </AnalisisEstructuradoStyled>
  );
};

export default AnalisisEstructurado;
