import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 0.8rem 8.2rem;
  display: flex;
  gap: 2rem;

  & > div {
    flex: 1;
  }

  h1 {
    color: ${(props) => props.theme.textHeading};
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .banner {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
    }
  }

  /* Responsive styles */
  @media (max-width: 1024px) {
    padding: 1rem 4rem; /* Reduce padding for medium screens */
    flex-direction: column; /* Stack items vertically */
    gap: 1.5rem;

    .banner {
      img {
        max-width: 90%; /* Adjust image width for smaller screens */
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem; /* Further reduce padding for smaller screens */

    h1 {
      font-size: 1.5rem; /* Adjust heading font size */
    }

    .banner {
      img {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem; /* Minimal padding for very small screens */
    gap: 1rem;

    h1 {
      font-size: 1.25rem; /* Smaller font size for mobile */
      text-align: center; /* Center align the heading */
    }

    .banner {
      img {
        max-width: 100%;
        border-radius: 0.3rem; /* Slightly smaller border-radius for mobile */
      }
    }
  }
`;
export const Header = styled.div`
  height: 95vh;
  margin-bottom: 3rem;
  padding-top: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  #draw {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 340px;
    // background: blue;
  }

  @media (max-width: 800px) {
    padding: 1rem;
    #draw {
      display: none;
    }
  }
  @media (max-width: 1150px) {
    #draw {
      width: 250px;
      // display: none;
    }
  }

  a {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 0.3rem 1rem;
    color: ${(props) => props.theme.background};
    cursor: pointer;
    border: none;
    background: ${(props) => props.theme.accent};
    border-radius: 0.5rem; /* Add some rounding for better visuals */
    transition:
      transform 0.3s ease,
      background-color 0.3s ease; /* Smooth hover effects */

    &:hover {
      transform: scale(1.05); /* Slightly enlarge on hover */
      background: ${(props) =>
        props.theme.hoverAccent}; /* Example hover color */
    }

    span {
      font-size: 3rem;
    }
  }

  /* Medium screens */
  @media (max-width: 1024px) {
    height: 85vh; /* Slightly reduce height for medium screens */
    a {
      margin-top: 3rem;
      font-size: 0.9rem;
      padding: 0.25rem 0.8rem;

      span {
        font-size: 2.5rem; /* Adjust span size */
      }
    }
  }

  /* Small screens */
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    height: 75vh; /* Reduce height further for smaller screens */

    a {
      margin-top: 2rem;
      font-size: 0.85rem;
      padding: 0.2rem 0.7rem;

      span {
        font-size: 2rem; /* Further reduce span size */
      }
    }
  }

  /* Extra small screens */
  @media (max-width: 480px) {
    height: 65vh; /* Smaller height for mobile */
    padding-top: 2rem;

    a {
      margin-top: 1.5rem;
      font-size: 0.8rem;
      padding: 0.2rem 0.6rem;

      span {
        font-size: 1.8rem; /* Adjust span size for mobile */
      }
    }
  }
`;

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // padding: 2rem;
  background-color: transparent;
  min-height: calc(100vh - 60px);
  color: ${(props) => props.theme.textHeading};

  .cards {
    display: flex;
    flex-wrap: wrap; /* Allow cards to wrap to the next row */
    gap: 1rem; /* Space between cards */
    justify-content: center; /* Center the cards */

    width: 100%; /* Full width to accommodate responsive layouts */
    max-width: 1200px; /* Optional: Limit maximum width for larger screens */
    padding: 1rem;
  }

  @media (max-width: 1024px) {
    .cards {
      gap: 0.8rem; /* Adjust gap for tablets */
    }
  }

  @media (max-width: 768px) {
    .cards {
      justify-content: center;
      align-items: center;
      flex-direction: column; /* Stack cards vertically on smaller screens */
      gap: 1.5rem; /* Increase gap for vertical spacing */
    }
  }

  #draw {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 340px;
    // background: blue;
  }

  @media (max-width: 800px) {
    padding: 1rem;
    #draw {
      display: none;
    }
  }
  @media (max-width: 1150px) {
    #draw {
      width: 250px;
      // display: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 3rem;
  line-height: 50px;
  font-weight: 600;
  text-shadow: 1px 1px 10px ${(props) => props.theme.textBody};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  width: 70%;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  // text-shadow: 5px 5px 25px ${(props) => props.theme.textBody};

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
  display: flex;
  justify-content: center;

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
