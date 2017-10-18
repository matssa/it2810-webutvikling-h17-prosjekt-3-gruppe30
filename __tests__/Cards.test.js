import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Cards from '../src/Components/Cards.js';

describe('<Cards/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<Cards />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
