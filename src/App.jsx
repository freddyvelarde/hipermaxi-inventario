import "./App.css";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>App page</h1>
      <button onClick={() => console.log("hello world")}>hello</button>
    </> 
  );
}

export default App;
