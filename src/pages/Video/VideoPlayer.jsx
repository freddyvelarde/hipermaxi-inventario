import React from "react";
import styled from "styled-components";

const VideoPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 20px auto;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textHeading};
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-align: center;
`;

const FrameWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.surface};
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoPlayer = () => {
  return (
    <VideoPlayerContainer>
      <FrameWrapper>
        <StyledIframe
          src="https://drive.google.com/file/d/1wYO0O1NbUn4S8PPmtWGMBET5AvyNFu3d/preview"
          allow="autoplay"
        ></StyledIframe>
      </FrameWrapper>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
