import styled from "styled-components";

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 2rem 0;
  background: ${(props) => props.theme.overlay};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid ${(props) => props.theme.overlay};
  }

  th {
    background: ${(props) => props.theme.primaryButton};
    color: ${(props) => props.theme.textHeading};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tbody tr:nth-child(even) {
    background: ${(props) => props.theme.overlay};
  }

  tbody tr:hover {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textHeading};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;

    th,
    td {
      padding: 0.75rem;
    }
  }
`;

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

const MarcoTeoricoPageStyled = styled.div`
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

export default MarcoTeoricoPageStyled;
