import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const Sidebar = styled.div`
  width: 280px;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const LogoPlaceholder = styled.div`
  width: 120px;
  height: 40px;
  margin-bottom: 30px;
  // background: linear-gradient(to right, #333 8%, #444 18%, #333 33%);
  background: linear-gradient(
    to right,
    ${(props) => props.theme.overlay} 8%,
    ${(props) => props.theme.surface} 18%,
    ${(props) => props.theme.overlay} 33%
  );
  background-size: 2000px 100%;
  animation: ${shimmer} 2s linear infinite;
  border-radius: 4px;
`;

const NavItemPlaceholder = styled.div`
  height: 24px;
  margin-bottom: 15px;
  // background: linear-gradient(to right, #333 8%, #444 18%, #333 33%);
  background: linear-gradient(
    to right,
    ${(props) => props.theme.overlay} 8%,
    ${(props) => props.theme.surface} 18%,
    ${(props) => props.theme.overlay} 33%
  );
  background-size: 2000px 100%;
  animation: ${shimmer} 2s linear infinite;
  border-radius: 4px;
  width: 80%;
`;

const TitlePlaceholder = styled.div`
  height: 48px;
  margin-bottom: 20px;
  // background: linear-gradient(to right, #333 8%, #444 18%, #333 33%);
  background: linear-gradient(
    to right,
    ${(props) => props.theme.overlay} 8%,
    ${(props) => props.theme.surface} 18%,
    ${(props) => props.theme.overlay} 33%
  );
  background-size: 2000px 100%;
  animation: ${shimmer} 2s linear infinite;
  border-radius: 4px;
  width: 60%;
`;

const SubtitlePlaceholder = styled.div`
  height: 32px;
  margin-bottom: 30px;
  // background: linear-gradient(to right, #333 8%, #444 18%, #333 33%);
  background: linear-gradient(
    to right,
    ${(props) => props.theme.overlay} 8%,
    ${(props) => props.theme.surface} 18%,
    ${(props) => props.theme.overlay} 33%
  );
  background-size: 2000px 100%;
  animation: ${shimmer} 2s linear infinite;
  border-radius: 4px;
  width: 40%;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
  // background: linear-gradient(to right, #333 8%, #444 18%, #333 33%);
  //
  background: linear-gradient(
    to right,
    ${(props) => props.theme.overlay} 8%,
    ${(props) => props.theme.surface} 18%,
    ${(props) => props.theme.overlay} 33%
  );
  background-size: 2000px 100%;
  animation: ${shimmer} 2s linear infinite;
  border-radius: 8px;
`;

const TextPlaceholder = styled.div`
  height: 16px;
  margin-bottom: 10px;
  // background: linear-gradient(to right, #333 8%, #444 18%, #333 33%);
  background: linear-gradient(
    to right,
    ${(props) => props.theme.overlay} 8%,
    ${(props) => props.theme.surface} 18%,
    ${(props) => props.theme.overlay} 33%
  );
  background-size: 2000px 100%;
  animation: ${shimmer} 2s linear infinite;
  border-radius: 4px;
  width: ${(props) => props.width || "100%"};
`;

const LoaderWrapper = styled.div`
  z-index: 100000;
  display: flex;
  position: fixed;
  flex-direction: row; /* Sidebar and MainContent side by side */
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  justify-content: center;
  align-items: center;
  @media (max-width: 730px) {
    display: none;
  }
`;

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleReadyStateChange = () => {
      if (document.readyState === "complete") {
        setIsLoading(false);
      }
    };

    handleReadyStateChange();

    document.addEventListener("readystatechange", handleReadyStateChange);

    return () => {
      document.removeEventListener("readystatechange", handleReadyStateChange);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <LoaderWrapper>
      <Sidebar>
        <LogoPlaceholder />
        <NavItemPlaceholder style={{ width: "60%" }} />
        <NavItemPlaceholder style={{ width: "75%" }} />
        <NavItemPlaceholder style={{ width: "70%" }} />
        <NavItemPlaceholder style={{ width: "65%" }} />
        <NavItemPlaceholder style={{ width: "55%" }} />
      </Sidebar>
      <MainContent>
        <TitlePlaceholder />
        <SubtitlePlaceholder />
        <ImagePlaceholder />
        <TextPlaceholder width="90%" />
        <TextPlaceholder width="85%" />
        <TextPlaceholder width="95%" />
        <TextPlaceholder width="80%" />
      </MainContent>
    </LoaderWrapper>
  );
};

export default LoadingPage;
