import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: ${(props) => props.theme.overlay};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.textHeading};
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.theme.accent};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 16px 0;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 24px 0;
  flex-grow: 1;
`;

const CardLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.primaryButton};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.hoverAccent};
  }

  &::after {
    content: "→";
    margin-left: 8px;
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

const Card = ({ title, desc, link, linkDesc, icon }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <Description>{desc}</Description>
      <CardLink to={link}>{linkDesc}</CardLink>
    </CardContainer>
  );
};

export default Card;
