import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTodo from './InputTodo';
import Footer from "./Footer";
import { NavBar } from "./NavBar.js";
import DatePickerS from "./Datepicker.js";
import TimePickerS from "./Datepicker.js"


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Your personal information manager</h1>
        <h2>Things to do</h2>
        <InputTodo/>
        <DatePickerS />
        <Footer/>
      </div>
    );
  }
}

export default App;
