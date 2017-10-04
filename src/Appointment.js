import React from "react";
import { NavBar } from "./NavBar.js";
import DatePickerS from "./Datepicker.js";
import TimePickerS from "./Datepicker.js";
import InputTodo from "./InputTodo.js";

const Appointment = () => (
  <div>
    <h1>Appointment page!</h1>
    <InputTodo/>
    <DatePickerS />
  </div>
)

export default Appointment
