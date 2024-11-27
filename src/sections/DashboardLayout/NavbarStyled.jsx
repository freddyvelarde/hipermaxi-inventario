import styled from "styled-components";

export const ToggleNavbar = styled.div`
  border-radius: 50%;
  color: ${(props) => props.theme.textHeading};
  background: ${(props) => props.theme.secondaryButton};
  cursor: pointer;
  border: none;
  font-size: 17px;
  position: fixed;
  padding: 0 6px;
  top: 49%;
  right: 73.9%;
  transform: ${(props) =>
    !props.simpleNavbarActive ? "translateX(0)" : "translateX(-21.3vw)"};
  z-index: 2000;
  transition: 0.1s ease-out;
  // &:hover {
  //   transform: scale(1.21);
  // }
  @media (max-width: 730px) {
    display: none;
  }

  @media (max-width: 850px) {
    right: 68.9%;
  }
`;

export const Menu = styled.div`
  padding: 5px 5px 0px 5px;
  background: transparent;
  // background: red;
  &:hover {
    background: ${(props) => props.theme.primaryButton};
  }
  transition: 0.3s ease-out;

  cursor: pointer;
  position: fixed;
  z-index: 1000;
  top: 1%;
  display: none;
  right: 2%;
  @media (max-width: 730px) {
    display: block;
  }
  img {
    width: 25px;
  }
`;

export const NavbarStyled = styled.div`
  overflow-y: auto;
  z-index: 1000;
  font-size: 14px;
  color: ${(props) => props.theme.textHeading};
  // text-indent: 10px;
  letter-spacing: 0px;
  line-height: 35px;
  width: 25%;
  background: ${(props) => props.theme.overlay};
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0 0.5%;
  height: 100vh;
  transform: ${(props) =>
    !props.simpleNavbarActive ? "translateX(0) " : "translateX(-100vw)"};
  header {
    padding: 10px 0;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  transition: 0.3s ease-out;
  @media (max-width: 1000px) {
    font-size: 14px;
    width: 25%;
  }
  @media (max-width: 850px) {
    font-size: 13px;
    width: 30%;
  }
  @media (max-width: 730px) {
    display: fixed;
    width: 70%;
    // left: ;
    // left: ${(props) => (props.state ? "0%" : "-40%")};
    transform: ${(props) =>
      props.state ? "translateX(0) " : "translateX(-100vw)"};
    transition: 0.4s ease-out;
  }
`;
