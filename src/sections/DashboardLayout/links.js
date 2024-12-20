import homeDark from "./assets/home_dark.svg";
import homeLight from "./assets/home_light.svg";
import orientado_objetos_light from "./assets/orientado_objetos_light.svg";
import orientado_objetos_dark from "./assets/orientado_objetos_dark.svg";
import analisisEstructuradoLight from "./assets/analisis_estructurado_light.svg";
import analisisEstructuradoDark from "./assets/analisis_estructurado_dark.svg";
import videoDark from "./assets/video_dark.svg";
import videoLight from "./assets/video_light.svg";
import documentLight from "./assets/documentLight.svg";
import documentDark from "./assets/documentDark.svg";
import casosUsoLight from "../../pages/CasosDeUso/assets/casos_uso_light.svg";
import casosUsoDark from "../../pages/CasosDeUso/assets/casos_uso_dark.svg";
export const links = [
  {
    title: "Inicio",
    link: "inicio",
    icons: { dark: homeDark, light: homeLight },
    id: "inicio",
    data: [
      { name: "Que es el Hipermaxi?", link: "#que-es-hipermaxi" },
      { name: "Alcance", link: "#alcance" },
      // { name: "Mision", link: "#mision" },
      // { name: "Vision", link: "#vision" },
      {
        name: "Ventajas",
        link: "#ventajas",
        data: [
          { name: "Características Principales", link: "#caracteristicas" },
          { name: "Análisis Detallado", link: "#analisis-detallado" },
        ],
      },
    ],
  },
  //
  //
  {
    title: "Analisis Estructurado",
    link: "analisis-estructurado",
    icons: {
      dark: analisisEstructuradoDark,
      light: analisisEstructuradoLight,
    },
    id: "analisis",
    data: [
      {
        name: "Modelo Ambiental",
        link: "declaracion_de_propositos",
        data: [
          {
            name: "Declaración de propósitos",
            link: "declaracion_de_propositos",
          },
          {
            name: "Lista de acontecimientos",
            link: "lista_de_acontecimientos",
          },
          {
            name: "Diagrama de contexto",
            link: "diagrama_de_contexto",
          },
        ],
      },

      {
        name: "modelo de comportamiento",
        link: "diagrama_flujo_datos",
        data: [
          {
            name: "Diagrama de flujo de datos",
            link: "diagrama_flujo_datos",
          },
          {
            name: "Diagrama DEER",
            link: "diagrama_deer",
          },
          {
            name: "Diccionario de datos",
            link: "diccionario_datos",
          },
        ],
      },
    ],
  },
  {
    title: "Orientado a objetos",
    link: "orientado-objetos",
    icons: { dark: orientado_objetos_dark, light: orientado_objetos_light },
    id: "orientado",
    // data: [
    //   {
    //     name: "sub-menu1",
    //     link: "#submenu1",
    //     data: [
    //       { name: "sub-sub-menu1", link: "#sub-sub-menu1" },
    //       { name: "sub-sub-menu2", link: "#sub-sub-menu2" },
    //     ],
    //   },
    //   {
    //     name: "sub-menu2",
    //     link: "#submenu2",
    //     data: [
    //       { name: "sub-sub-menu1", link: "#sub-sub-menu1" },
    //       { name: "sub-sub-menu2", link: "#sub-sub-menu2" },
    //     ],
    //   },
    // ],
  },
  {
    title: "Casos De Uso",
    link: "casos-uso",
    icons: { dark: casosUsoDark, light: casosUsoLight },
    id: "casos-uso",
    data: [
      { name: "Casos de uso de negocio", link: "negocio" },
      { name: "Casos de uso de sistemas", link: "sistemas" },
      { name: "Casos de uso de texto", link: "texto" },
      // { name: "Alcance", link: "#alcance" },
      // { name: "Mision", link: "#mision" },
      // { name: "Vision", link: "#vision" },
    ],
  },
  {
    title: "Marco Teorico",
    link: "marco-teorico",
    icons: { dark: documentDark, light: documentLight },
    id: "marco",
    data: [
      { name: "Introduccion", link: "intro" },
      { name: "Generalidades", link: "generalidades" },
      { name: "Analisis Estructurado", link: "analisis-estructurado-teorico" },

      { name: "Antecedentes", link: "antecedentes" },

      { name: "Grupo de interes", link: "grupo_intereses" },

      { name: "Analisis FODA", link: "analisis_foda" },

      { name: "Modelo de negocio", link: "modelo_negocio" },

      { name: "Planteamiento de Problema", link: "planteamiento_del_problema" },
      { name: "Mision", link: "mision" },
      { name: "Vision", link: "vision" },
      { name: "Resultado de encuestas", link: "encuestas" },
    ],
  },
  {
    title: "Video",
    link: "video",
    icons: { dark: videoDark, light: videoLight },
    id: "video",
  },
];
