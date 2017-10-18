import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Appointment from '../src/Components/Appointment.js';

it('sholud render some welcoming text', () => {
  const wrapper = shallow(<Appointment />);
  const headers = wrapper.find('h1');
  expect(headers.length).toBe(1);
});

it('sholud render a FormAppointment', () => {
  const wrapper = shallow(<Appointment />);
  const formAppointment = wrapper.find('FormAppointment');
  console.log(formAppointment);
  expect(formAppointment.length).toBe(1);
});
