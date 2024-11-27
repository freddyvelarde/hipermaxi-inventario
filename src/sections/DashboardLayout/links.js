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
export const links = [
  {
    title: "Inicio",
    link: "inicio",
    icons: { dark: homeDark, light: homeLight },
    id: "inicio",
    data: [
      { name: "Que es el Hipermaxi?", link: "#que-es-hipermaxi" },
      { name: "Alcance", link: "#alcance" },
      { name: "Vision", link: "#vision" },
      { name: "Mision", link: "#mision" },
      {
        name: "Pros y contras",
        link: "#pros-contras",
        data: [
          { name: "Características Principales", link: "#caracteristicas" },
          { name: "Análisis Detallado", link: "#analisis-detallado" },
        ],
      },
    ],
  },
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
        link: "#modelo_ambiental",
        data: [
          {
            name: "Declaración de propósitos",
            link: "#declaracion_de_propositos",
          },
          {
            name: "Lista de acontecimientos",
            link: "#lista_de_acontecimientos",
          },
          {
            name: "Diagrama de contexto",
            link: "#diagrama_de_contexto",
          },
        ],
      },

      {
        name: "modelo de comportamiento",
        link: "#modelo_comportamiento",
        data: [
          {
            name: "Diagrama de flujo de datos",
            link: "#diagrama_flujo_datos",
          },
          {
            name: "Diagrama DEER",
            link: "#diagrama_deer",
          },
          {
            name: "DICCIONARIO DE DATOS",
            link: "#diccionario_datos",
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
    data: [
      {
        name: "sub-menu1",
        link: "#submenu1",
        data: [
          { name: "sub-sub-menu1", link: "#sub-sub-menu1" },
          { name: "sub-sub-menu2", link: "#sub-sub-menu2" },
        ],
      },
      {
        name: "sub-menu2",
        link: "#submenu2",
        data: [
          { name: "sub-sub-menu1", link: "#sub-sub-menu1" },
          { name: "sub-sub-menu2", link: "#sub-sub-menu2" },
        ],
      },
    ],
  },
  {
    title: "Marco Teorico",
    link: "marco-teorico",
    icons: { dark: documentDark, light: documentLight },
    id: "marco",
    data: [
      {
        name: "sub-menu1",
        link: "#submenu1",
        data: [
          { name: "sub-sub-menu1", link: "#sub-sub-menu1" },
          { name: "sub-sub-menu2", link: "#sub-sub-menu2" },
        ],
      },
      { name: "sub-menu2", link: "#submenu2" },
    ],
  },
  {
    title: "Video",
    link: "video",
    icons: { dark: videoDark, light: videoLight },
    id: "video",
    data: [
      {
        name: "sub-menu1",
        link: "#submenu1",
        data: [
          { name: "sub-sub-menu1", link: "#sub-sub-menu1" },
          { name: "sub-sub-menu2", link: "#sub-sub-menu2" },
        ],
      },
      { name: "sub-menu2", link: "#submenu2" },
    ],
  },
];
