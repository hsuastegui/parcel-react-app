import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  test("it works", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(".app")).toHaveLength(1);
  });
  test("it matches snapshot", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
