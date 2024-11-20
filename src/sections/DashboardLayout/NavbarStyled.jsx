import styled from "styled-components";

export const NavbarStyled = styled.div`
  color: ${(props) => props.theme.textHeading};
  // text-indent: 10px;
  letter-spacing: 0px;
  line-height: 30px;
  width: 20%;
  // background: red;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0.5%;
  height: 100vh;
`;
