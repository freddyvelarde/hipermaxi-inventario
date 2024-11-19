import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";

function App() {
  const colors = {
    red: "red",
    blue: "blue",
    white: "#ffffff",
    skyblue: "#009688",
  };

  const Header1 = styled.h1`
    background-color: ${(props) => props.$colors.skyblue};
    font-size: 4rem;
  `;

  return (
    <>
      <Navbar />
      <Header1 $colors={colors}>App page</Header1>
    </>
  );
}

export default App;
