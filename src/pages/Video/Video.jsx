import PageNavigation from "../../components/PageNavigation/PageNavigation";
import MarcoTeoricoPageStyled, {
  BreadcrumbNav,
} from "../MarcoTeorico/MarcoTeoricoStyled";
import VideoPlayer from "./VideoPlayer";
// import mus from "../../../assets/mus.mp4";

function Video() {
  return (
    <MarcoTeoricoPageStyled>
      <BreadcrumbNav>
        <ul>
          <li>Video</li>
          <li>Exposicion del proyecto</li>
        </ul>
      </BreadcrumbNav>
      <h3 id="ante">Video</h3>
      <VideoPlayer />
      <PageNavigation
        leftPage={{ name: "Marco Teorico", path: "/marco-teorico/intro" }}
        rightPage={null}
      />
    </MarcoTeoricoPageStyled>
  );
}

export default Video;
