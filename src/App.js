import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTodo from './InputTodo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>TodoList</header>
        <InputTodo/>

      </div>
    );
  }
}

export default App;
