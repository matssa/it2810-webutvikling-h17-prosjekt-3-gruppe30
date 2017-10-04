import React, { Component } from 'react';
import './App.css';
import InputTodo from './InputTodo';
import Footer from "./Footer";
import DatePickerS from "./Datepicker.js";
import TimePickerS from "./Datepicker.js"
import { NavBar } from "./NavBar.js"
import Notes from "./Notes.js";
import Appointment from "./Appointment.js"
import { BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <h1>Your personal information manager</h1>
          <h2>Things to do</h2>
          <p>Here you can create todos, appointments and notes : )</p>
          <Route exact path="/Todo" component={InputTodo}/>
          <Route exact path="/Appointments" component={Appointment}/>
          <Route exact path="/Notes" component={Notes}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
