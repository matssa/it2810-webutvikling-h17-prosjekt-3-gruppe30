import React from "react";
import { shallow } from "enzyme";
import Home from "../src/Components/Home.js";

it("sholud render some welcoming text", () => {
	const homeComponent = Home.first();
	const tree = toJson(homeComponent);
	console.log(tree);
	expect(tree).toMatchSnapshot();
});
