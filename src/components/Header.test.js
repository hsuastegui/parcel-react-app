import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header />", () => {
  test("it works", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find("header")).toHaveLength(1);
    expect(wrapper.find("header").text()).toEqual("Welcome");
  });
  test("it matches snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
