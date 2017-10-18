import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Notes from '../src/Components/Notes.js';

describe('<Notes/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<Notes />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});

	it('should set state, as if someone writes a note', () => {
		const component = shallow(<FormAppointment />);
		component.setState((text = 'Hello'));
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
