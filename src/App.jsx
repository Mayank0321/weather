import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      This the the App Component
      <Home />
      <>This is being executed after the Homepage</>
    </>
  );
}

export default App;
