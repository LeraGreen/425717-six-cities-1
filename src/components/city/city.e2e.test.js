import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import City from "./city.jsx";

configure({adapter: new Adapter()});

const mock = {
  city: `Paris`,
  isActive: false,
  onCityChange: jest.fn(),
  onCardActivate: jest.fn()
};

it(`Click on city title calls callback`, () => {
  const {city, onCardActivate, isActive} = mock;
  const clickHandler = jest.fn();
  const preventDefault = jest.fn();

  const cityTab = mount(<City
    city={city}
    isActive={isActive}
    onCityChange={clickHandler}
    onCardActivate={onCardActivate}
  />);


  const tab = cityTab.find(`.locations__item-link`);
  tab.simulate(`click`, {preventDefault:preventDefault});
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(clickHandler).toHaveBeenCalledWith(city);
  expect(preventDefault).toHaveBeenCalledTimes(1);
});
