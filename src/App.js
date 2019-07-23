import React from "react";
import mascotte from "./img_mascotte/logo.png";
import initGame from "./Game";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    initGame();
  }

  render() {
    return (
      <div className="App">
        <div>
          <img src={mascotte} alt="mascotte" />
        </div>
        <div id="breakout-root" />
      </div>
    );
  }
}

export default App;
