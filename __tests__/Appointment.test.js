import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Appointment from "../src/Components/Appointment.js";

test("Name of test", () => {
	const component = shallow(Appointment);
	const tree = toJson(component);
	console.log(tree);
	expect(tree).toMatchSnapshot();
});
