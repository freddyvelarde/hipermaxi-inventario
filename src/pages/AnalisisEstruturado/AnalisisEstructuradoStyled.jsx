import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const BreadcrumbNav = styled.nav`
  margin-bottom: 2rem;

  ul {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    padding: 0;

    li {
      color: ${(props) => props.theme.textBody};

      &:after {
        content: "/";
        margin-left: 0.5rem;
        color: ${(props) => props.theme.textUnselected};
      }

      &:last-child {
        color: ${(props) => props.theme.primaryButton};
        &:after {
          content: "";
        }
      }
    }
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 3rem;

  h2 {
    color: ${(props) => props.theme.textHeading};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .section-number {
    color: ${(props) => props.theme.secondaryButton};
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;
export const AnalisisEstructuradoStyled = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.background};
  min-height: 100vh;

  h3 {
    color: ${(props) => props.theme.textHeading};
    font-size: 2.5rem;
    margin-bottom: 2rem;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 60px;
      height: 4px;
      background: ${(props) => props.theme.primaryButton};
      border-radius: 2px;
    }
  }

  p {
    color: ${(props) => props.theme.textBody};
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 800px;
    padding: 1.5rem;
    background: ${(props) => props.theme.overlay};
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-left: 4px solid ${(props) => props.theme.accent};
    margin-top: 2rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default AnalisisEstructuradoStyled;

// import styled from "styled-components";
//
// const AnalisisEstructuradoStyled = styled.div`
//   padding: 30px;
//   background-color: ${(props) => props.theme.background};
//   color: ${(props) => props.theme.textBody};
//   font-family: "Arial", sans-serif;
//   max-width: 1200px;
//   margin: 0 auto;
//   line-height: 1.8;
//
//   h1 {
//     font-size: 2rem;
//     font-weight: bold;
//     color: ${(props) => props.theme.textHeading};
//     text-align: center;
//     margin-bottom: 40px;
//   }
//
//   section {
//     margin-bottom: 40px;
//   }
//
//   h2 {
//     font-size: 1.8rem;
//     color: ${(props) => props.theme.highlight};
//     margin-bottom: 20px;
//   }
//
//   h3 {
//     font-size: 1.5rem;
//     color: ${(props) => props.theme.primaryButton};
//     margin-top: 20px;
//     margin-bottom: 10px;
//   }
//
//   p {
//     font-size: 1.1rem;
//     color: ${(props) => props.theme.textBody};
//     margin-bottom: 15px;
//   }
//
//   img.diagrama {
//     max-width: 100%;
//     height: auto;
//     border-radius: 8px;
//     margin: 20px 0;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   }
//
//   /* Alternate section background colors */
//   section:nth-of-type(odd) {
//     background-color: ${(props) => props.theme.surface};
//     padding: 20px;
//     border-radius: 10px;
//   }
//
//   section:nth-of-type(even) {
//     background-color: ${(props) => props.theme.overlay};
//     padding: 20px;
//     border-radius: 10px;
//   }
//
//   /* Border styling for headers */
//   h2,
//   h3 {
//     border-bottom: 2px solid ${(props) => props.theme.accent};
//     padding-bottom: 5px;
//     margin-bottom: 15px;
//   }
//
//   /* Styling for unordered lists */
//   ul {
//     padding-left: 20px;
//   }
//
//   ul li {
//     font-size: 1.1rem;
//     margin-bottom: 10px;
//   }
//
//   ul li strong {
//     color: ${(props) => props.theme.primaryButton};
//   }
// `;
//
// export default AnalisisEstructuradoStyled;
