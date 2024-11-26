import styled from "styled-components";

export const SubLinkPageStyled = styled.div`
  position: relative;
  line-height: 30px;

  // .nested-submenu {
  //   opacity: ${(props) => (props.isDisplayed ? "1" : "0")};
  //   visibility: ${(props) => (props.isDisplayed ? "visible" : "hidden")};
  //   transform: translateY(${(props) => (props.isDisplayed ? "0" : "-10px")});
  //   transition: all 0.3s ease-out;
  // }

  // transition: 0.2s ease-out;
  line-height: 30px;
  // color: ${(props) => props.theme.textUnselected};
  // padding-top: 3px;
  // padding-bottom: 3px;
  // padding: 6px 0px;
  .header-link-submenu {
    padding: 0;
    // background: blue;
    border-radius: 10px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .header-link-menu:hover {
    background: ${(props) => props.theme.surface};
  }
  .child-links {
    margin-left: 25px;
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
    color: ${(props) => props.theme.textHeading};
  }
`;
export const LinkPageStyled = styled.div`
  color: ${(props) =>
    props.state ? props.theme.textHeading : props.theme.textUnselected};
  line-height: 30px;
  padding-bottom: 3px;
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
    padding: 0;
    margin-left: 24px;
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
    // transition: 0.3s;
    color: ${(props) => props.theme.textHeading};
  }
`;

export const ArrowRightStyled = styled.span`
  display: inline-block;
  font-size: 20px;
  color: ${(props) =>
    props.isClicked ? props.theme.error : props.theme.textBody};
  transform: rotate(${(props) => (props.isDisplayed ? "90deg" : "0deg")})
    scaleX(0.7);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;
