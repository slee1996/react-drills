import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      toDoList: [],
      userInput: ''
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleTodoList(item){
    this.setState({userInput: item})
  }

  handleAdd(){
    this.setState({
      toDoList:[...this.state.toDoList, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    let list = this.state.toDoList.map((element, index) => {
      return <Todo key={index} task={element} />
    })

    return (
      <div className="App">
        <h1>My To-Do List</h1>
        <div>
          <input value={this.state.userInput} onChange={e => this.handleTodoList(e.target.value)}></input>
          <button onClick={this.handleAdd}>Add</button>
        </div>
        {list}
      </div>
    );
  }
}

export default App;
