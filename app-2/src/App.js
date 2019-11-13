import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      array: [
      'good kid maad city', 'to pimp a butterfly', 'DAMN.'
    ]}
  }
  

  render() {
    return (
      <div className="App">
        <h4>{this.state.array[0]}</h4>
        <h4>{this.state.array[1]}</h4>
        <h4>{this.state.array[2]}</h4>
      </div>
    );
  }
}

export default App;
