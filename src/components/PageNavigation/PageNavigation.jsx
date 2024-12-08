"use client";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  margin-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.overlay};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => props.theme.overlay};
  color: ${(props) => props.theme.textHeading};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
    background-color: ${(props) => props.theme.surface};
  }

  ${(props) =>
    props.direction === "right" &&
    `
    flex-direction: row-reverse;
    margin-left: auto;
  `}
`;

const Arrow = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;

function NavigationButton({ direction, pageName, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Button direction={direction} onClick={handleClick}>
      {direction === "left" ? <Arrow>&larr;</Arrow> : <Arrow>&rarr;</Arrow>}
      {pageName}
    </Button>
  );
}

export default function PageNavigation({ leftPage, rightPage }) {
  return (
    <NavigationContainer>
      {leftPage && (
        <NavigationButton
          direction="left"
          pageName={leftPage.name}
          to={leftPage.path}
        />
      )}
      {rightPage && (
        <NavigationButton
          direction="right"
          pageName={rightPage.name}
          to={rightPage.path}
        />
      )}
    </NavigationContainer>
  );
}

// Usage Example
