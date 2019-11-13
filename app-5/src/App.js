import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Components/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'http://s3.amazonaws.com/rapgenius/Kendrick%20Lamar%20King.png'} />
      </div>
    );
  }
}

export default App;
