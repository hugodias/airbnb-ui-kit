import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button, ExploreCard } from "airbnb-ui";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Airbnb UI Kit</h1>
          <h3 className="App-subtitle">
            React JS user interface kit inspired in Airbnb
          </h3>
        </header>
        <div className="App-intro">
          <p>
            This is a User Interface Kit inspired in Airbnb Design
          </p>
          <div className="block">
            <h4>Buttons</h4>
            <ul>
              <li>
                <Button>Fale com um anfitrião!</Button>
              </li>
              <li>
                <Button white>Conheça o Airbnb Plus</Button>
              </li>
              <li>
                <Button warning>Reservar</Button>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4>Explore Card</h4>
            <ExploreCard imageSrc="https://a0.muscache.com/im/pictures/7e6d4e06-1e8f-47f2-9ffc-12a6d48b4406.jpg">
              Natureza
            </ExploreCard>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
