import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  cursor: pointer;
`;

const FullscreenContainer = styled.div`
  position: fixed;
  z-index: 3000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #171B21CC;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const NavigationArrow = styled.button`
  position: absolute;
  z-index: 4100;
  background-color: ${(props) => props.theme.primaryButton};
  border: none;
  color: ${(props) => props.theme.textHeading};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.secondaryButton};
  }

  ${(props) => {
    switch (props.position) {
      case "top":
        return `
          top: 81%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "bottom":
        return `
          bottom: 1%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "left":
        return `
          left: 45%;
          bottom: 4%;
          transform: translateY(-50%);
        `;
      case "right":
        return `
          right: 45%;
          bottom: 4%;
          transform: translateY(-50%);
        `;
      default:
        return "";
    }
  }}
`;

const FullscreenImage = styled.img`
  max-width: calc(100% - 60px);
  max-height: calc(100% - 60px);
  object-fit: contain;
  transform: scale(${(props) => props.zoom})
    translate(${(props) => props.offsetX}px, ${(props) => props.offsetY}px);
  transition: transform 0.2s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${(props) => props.theme.primaryButton};
  border: none;
  color: ${(props) => props.theme.textHeading};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  z-index: 3100;
  outline: none;
  padding: 10px 14px;
  border-radius: 50%;

  &:hover {
    background: ${(props) => props.theme.secondaryButton};
  }
`;

export const ZoomInImage = ({ src, alt, width = "50%" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [_activeDirections, setActiveDirections] = useState([]);

  const fullscreenRef = useRef(null);
  const imageRef = useRef(null);
  const moveIntervalRef = useRef(null);

  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const resetImageState = () => {
    setIsFullscreen(false);
    setZoom(1);
    setOffsetX(0);
    setOffsetY(0);
  };

  const moveImage = useCallback(
    (direction) => {
      if (!imageRef.current || zoom <= 1) return;

      const moveStep = 50;
      const imageEl = imageRef.current;
      const containerWidth = fullscreenRef.current.clientWidth;
      const containerHeight = fullscreenRef.current.clientHeight;
      const imageWidth = imageEl.naturalWidth * zoom;
      const imageHeight = imageEl.naturalHeight * zoom;

      const maxOffsetX = (imageWidth - containerWidth) / 2;
      const maxOffsetY = (imageHeight - containerHeight) / 2;

      switch (direction) {
        case "up":
          setOffsetY((prev) => Math.min(prev + moveStep, maxOffsetY));
          break;
        case "down":
          setOffsetY((prev) => Math.max(prev - moveStep, -maxOffsetY));
          break;
        case "left":
          setOffsetX((prev) => Math.min(prev + moveStep, maxOffsetX));
          break;
        case "right":
          setOffsetX((prev) => Math.max(prev - moveStep, -maxOffsetX));
          break;
      }
    },
    [zoom],
  );

  const startMoving = useCallback(
    (direction) => {
      if (zoom <= 1) return;

      if (moveIntervalRef.current) {
        clearInterval(moveIntervalRef.current);
      }

      moveIntervalRef.current = setInterval(() => {
        moveImage(direction);
      }, 50);

      setActiveDirections((prev) => [...new Set([...prev, direction])]);
    },
    [moveImage, zoom],
  );

  const stopMoving = useCallback((direction) => {
    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current);
      moveIntervalRef.current = null;
    }

    setActiveDirections((prev) => prev.filter((d) => d !== direction));
  }, []);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setZoom((prevZoom) => {
      const newZoom = prevZoom - e.deltaY * 0.001;
      return Math.min(Math.max(newZoom, 0.5), 3);
    });
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        resetImageState();
      }

      if (isFullscreen && zoom > 1) {
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault();
            startMoving("up");
            break;
          case "ArrowDown":
            e.preventDefault();
            startMoving("down");
            break;
          case "ArrowLeft":
            e.preventDefault();
            startMoving("left");
            break;
          case "ArrowRight":
            e.preventDefault();
            startMoving("right");
            break;
        }
      }
    },
    [isFullscreen, zoom, startMoving],
  );

  const handleKeyUp = useCallback(
    (e) => {
      if (isFullscreen && zoom > 1) {
        switch (e.key) {
          case "ArrowUp":
            stopMoving("up");
            break;
          case "ArrowDown":
            stopMoving("down");
            break;
          case "ArrowLeft":
            stopMoving("left");
            break;
          case "ArrowRight":
            stopMoving("right");
            break;
        }
      }
    },
    [isFullscreen, zoom, stopMoving],
  );

  useEffect(() => {
    if (isFullscreen) {
      document.addEventListener("wheel", handleWheel, { passive: false });
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    } else {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    }

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [isFullscreen, handleWheel, handleKeyDown, handleKeyUp]);

  useEffect(() => {
    return () => {
      if (moveIntervalRef.current) {
        clearInterval(moveIntervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <ImageContainer onClick={handleImageClick}>
        <img src={src} alt={alt} style={{ maxWidth: "100%", height: "auto" }} width={width}  />
      </ImageContainer>
      {isFullscreen && (
        <FullscreenContainer ref={fullscreenRef}>
          <CloseButton onClick={resetImageState}>&times;</CloseButton>
          <FullscreenImage
            ref={imageRef}
            src={src}
            alt={alt}
            zoom={zoom}
            offsetX={offsetX}
            offsetY={offsetY}
          />
          {zoom > 1 && (
            <>
              <NavigationArrow
                position="top"
                onMouseDown={() => startMoving("up")}
                onMouseUp={() => stopMoving("up")}
                onMouseLeave={() => stopMoving("up")}
                disabled={zoom <= 1}
              >
                ↑
              </NavigationArrow>
              <NavigationArrow
                position="bottom"
                onMouseDown={() => startMoving("down")}
                onMouseUp={() => stopMoving("down")}
                onMouseLeave={() => stopMoving("down")}
                disabled={zoom <= 1}
              >
                ↓
              </NavigationArrow>
              <NavigationArrow
                position="left"
                onMouseDown={() => startMoving("left")}
                onMouseUp={() => stopMoving("left")}
                onMouseLeave={() => stopMoving("left")}
                disabled={zoom <= 1}
              >
                ←
              </NavigationArrow>
              <NavigationArrow
                position="right"
                onMouseDown={() => startMoving("right")}
                onMouseUp={() => stopMoving("right")}
                onMouseLeave={() => stopMoving("right")}
                disabled={zoom <= 1}
              >
                →
              </NavigationArrow>
            </>
          )}
        </FullscreenContainer>
      )}
    </>
  );
};

