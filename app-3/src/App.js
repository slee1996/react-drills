import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      numbers: ['one', 'two', 'three', 'four', 'five'],

      filterString: ''
    }
  }
  
  handleChange(filter){
    this.setState({filterString: filter})
  }

  render() {
    let arrToDisplay = this.state.numbers.filter((element, index) => 
    {return element.includes(this.state.filterString)})
      .map((element,index) => 
      {return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {arrToDisplay}
      </div>
    );
  }
}

export default App;
