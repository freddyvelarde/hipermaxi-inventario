import styled from "styled-components";

const PageStyled = styled.div`
  // background: blue;
  margin-left: 21%;
  margin-right: 1%;
  width: auto;

  @media (max-width: 1000px) {
    margin-left: 26%;
  }
  @media (max-width: 850px) {
    margin-left: 31%;
  }

  @media (max-width: 730px) {
    margin-left: 0;
  }
`;

export default PageStyled;
