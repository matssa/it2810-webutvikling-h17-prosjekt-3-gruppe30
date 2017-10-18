import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../src/Components/NavBar.js';

describe('<NavBar/>, functions', () => {
	it('should find four <a> element', () => {
		const component = shallow(<NavBar />);
		const aNavBar = component.find('a');
		expect(aNavBar.length).toBe(4);
	});
});
