import styled from "styled-components";

export const AccordionContainer = styled.div`
  margin: 2rem 0;
  background: ${(props) => props.theme.overlay};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  button {
    width: 100%;
    text-align: left;
    background: ${(props) => props.theme.surface};
    color: ${(props) => props.theme.textHeading};
    font-weight: bold;
    padding: 1rem;
    border: none;
    cursor: pointer;
    outline: none;
    transition:
      background 0.3s ease,
      color 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.overlay};
      color: ${(props) => props.theme.textBody};
    }
  }

  .accordion-content {
    padding: 1.5rem;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textBody};
    line-height: 1.6;

    iframe {
      width: 100%;
      height: 315px;
      border: none;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const VideoSection = styled.div`
  margin-top: 3rem;
  text-align: center;

  h3 {
    color: ${(props) => props.theme.textHeading};
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
`;
