import styled from "styled-components";

export const SimpleNavbarStyled = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 4%;
  position: fixed;
  background: ${(props) => props.theme.overlay};
  transition: 0.3s ease-out;
  transform: ${(props) =>
    props.simpleNavbarActive ? "translateX(0) " : "translateX(-100vw)"};
  @media (max-width: 730px) {
    display: none;
  }
`;
export const LinkIcon = styled.div`
  // display: flex;

  a {
    width: 50px;
    height: 50px;
    background: ${(props) =>
      props.stateLink ? props.theme.primaryButton : props.theme.overlay};
    padding: 4px 7px;
    padding-top: 13px;
    img {
      transition: 0.3s ease-out;
      margin-top: 20px;
      // margin: 5px 0;
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.3);
    }
  }
`;
