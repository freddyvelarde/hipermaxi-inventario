import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.5s ease;

  &.visible {
    transform: translateX(0);
  }

  &.hidden {
    transform: translateX(100%);
  }
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.surface};
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 300px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.textHeading};!!!important
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.textBody};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.background};
  font-size: 10px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: inline-block;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.primaryButton};
  color: ${(props) => props.theme.textHeading};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 8px;

  &:hover {
    background-color: ${(props) => props.theme.secondaryButton};
  }
`;

const CloseButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.textBody};
  padding: 4px 8px;

  &:hover {
    background-color: ${(props) => props.theme.overlay};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const NoticeCard = ({ title, description, tag }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check localStorage for the "neverShowAgain" flag
    const neverShowAgain =
      localStorage.getItem(`neverShowNoticeCard${title}`) === "true";

    if (!neverShowAgain) {
      setIsVisible(true);
      setIsAnimating(true);
      // Hide the card after 5 seconds
      const timer = setTimeout(() => handleClose(), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNeverShowAgain = () => {
    localStorage.setItem(`neverShowNoticeCard${title}`, "true");
    handleClose();
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 500); // Match the transition duration
  };

  if (!isVisible) return null;

  return (
    <CardContainer className={isAnimating ? "visible" : "hidden"}>
      <Card>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonContainer>
          <CloseButton onClick={handleClose}>Entendido</CloseButton>
          <Button onClick={handleNeverShowAgain}>No mostrar de nuevo</Button>
        </ButtonContainer>
      </Card>
    </CardContainer>
  );
};

export default NoticeCard;
