import { useState } from "react";
import {messageToggler, darkMode, lightMode } from "package-3s";
import "./App.css";

function App() {
  const [dark, setDark] = useState(true);
  const [light, setLight] = useState(false);

  function toggleLight() {
    setLight((light) => !light);
    setDark((dark) => !dark);
  }

  console.log(messageToggler.message);

  return (
    <div className={dark ? darkMode(true) : lightMode(true)}>
      <h1>hello world</h1>
      <h3></h3>
      <button onClick={() => toggleLight()}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;