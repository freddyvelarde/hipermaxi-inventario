import styled from "styled-components";

export const LinkPageStyled = styled.div`
  padding: 4px 15px;
  // border-radius: 18px;
  .header-link-menu {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    // background: red;
  }
  .child-links {
    margin-left: 30px;
  }
  .main_section {
    display: flex;
    justify-content: center;
    align-items: center;
    #icon_link {
      width: 20px;
      margin-right: 10px;
    }
  }
  &:hover {
    background: ${(props) => props.theme.surface};
    transition: 0.3s;
  }
`;

export const ArrowRightStyled = styled.img`
  width: 20px;
  transform: rotate(${(props) => (props.isDisplayed ? "90deg" : "0deg")});
  transition: transform 0.3s ease; /* Optional smooth animation */
`;
