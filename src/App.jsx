import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ColorPicker from "./ColorPicker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ColorPicker />
      </div>
    </>
  );
}

export default App;
