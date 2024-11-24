import styled from "styled-components";

export const LinkPageStyled = styled.div`
  color: ${(props) =>
    props.state ? props.theme.textHeading : props.theme.textUnselected};
  line-height: 30px;
  // color: ${(props) => props.theme.textUnselected};
  padding-bottom: 3px;
  // padding: 6px 0px;
  .header-link-menu {
    border-radius: 10px;
    padding: 2px 10px;
    background: ${(props) =>
      props.state ? props.theme.surface : "transparent"};
    // background: red;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .header-link-menu:hover {
    background: ${(props) => props.theme.surface};
  }
  .child-links {
    margin-left: 30px;
    border-left: 1px solid ${(props) => props.theme.error};
    padding-left: 15px;
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
    // background: ${(props) => props.theme.surface};
    transition: 0.3s;
    color: ${(props) => props.theme.textHeading};
  }
`;

export const ArrowRightStyled = styled.img`
  width: 20px;
  transform: rotate(${(props) => (props.isDisplayed ? "90deg" : "0deg")});
  transition: transform 0.3s ease; /* Optional smooth animation */
`;
