import React from "react";
import ReactDOM from "react-dom";
import Draganddropdemo from "./draganddropdemo.js";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Draganddropdemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
