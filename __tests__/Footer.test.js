import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../src/Components/Footer.js';

describe('<Footer/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<Footer />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
