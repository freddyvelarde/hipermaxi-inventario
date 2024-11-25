import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 2rem;
  background-color: transparent;
  min-height: calc(100vh - 60px);
  color: ${(props) => props.theme.textHeading};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
`;

export const TextSection = styled.div`
  margin: 20px 0;
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.textBody};
  text-align: justify;

  p {
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;

    @media (max-width: 768px) {
      height: 200px;
    }

    @media (max-width: 480px) {
      height: 150px;
    }
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;
