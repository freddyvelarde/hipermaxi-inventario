import React, { useState } from "react";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import MarcoTeoricoPageStyled, {
  BreadcrumbNav,
} from "../MarcoTeorico/MarcoTeoricoStyled";
import VideoPlayer from "./VideoPlayer";
import { AccordionContainer, VideoSection } from "./VideoStyled";

function Video() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Video</li>
          <li>Exposicion del proyecto</li>
        </ul>
      </BreadcrumbNav>

      <VideoSection>
        <h3 id="ante">Video</h3>
        <VideoPlayer driveSrc="https://drive.google.com/file/d/1wYO0O1NbUn4S8PPmtWGMBET5AvyNFu3d/preview" />
      </VideoSection>

      <AccordionContainer>
        <button onClick={toggleAccordion}>
          {isAccordionOpen
            ? "Ocultar video adicional"
            : "Como los diagramas son la parte más difícil y compleja de explicar, lo grabamos aparte del video principal"}{" "}
          &#8659;
        </button>
        {isAccordionOpen && (
          <div className="accordion-content">
            <VideoPlayer driveSrc="https://drive.google.com/file/d/1nZGJFj-w5-9KoX-sIhGL4_Z6ynim2BOG/preview" />
          </div>
        )}
      </AccordionContainer>

      <PageNavigation
        leftPage={{ name: "Marco Teorico", path: "/marco-teorico/intro" }}
        rightPage={null}
      />
    </MarcoTeoricoPageStyled>
  );
}

export default Video;
