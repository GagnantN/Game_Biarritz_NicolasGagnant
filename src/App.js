import React from "react";
import mascotte from "./img_mascotte/logo.png";
import initGame from "./Game";
import Navi from "./Navbar.js";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    initGame();
  }

  render() {
    return (
      <>
        <Navi />
        <div className="App">
          <div>
            <img src={mascotte} alt="mascotte" />
          </div>
          <div id="breakout-root" />
        </div>
      </>
    );
  }
}

export default App;
