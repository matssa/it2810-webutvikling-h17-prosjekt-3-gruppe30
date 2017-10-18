import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Datepicker from '../src/Components/Datepicker.js';

describe('<Datepicker/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<Datepicker />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
