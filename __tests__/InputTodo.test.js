import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import InputTodo from '../src/Components/InputTodo.js';

// Here, we should test the functions of the component.
/*
const startState = {
	text: "",
	items: [1, 2, 3]
};

const finState = startState.removeItem();

expect(finState).toEqual([
	{
		text: "",
		items: [1, 2]
	}
]);
*/
/*
it('should add items to state', () => {
addInput({ text: 'hello', items: [1, 2, 3] });
const component = shallow(<InputTodo />);
const divInputTodo = component.find('div');
expect(divInputTodo.length).toBe(2);
});*/
describe('<InputTodo/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<InputTodo />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
