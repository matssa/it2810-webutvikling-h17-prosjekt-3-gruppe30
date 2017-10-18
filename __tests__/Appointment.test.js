import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Appointment from '../src/Components/Appointment.js';

describe('<Appointment/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<Appointment />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
