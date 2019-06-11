import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import City from "./city.jsx";

configure({adapter: new Adapter()});

const mock = {
  city: `Chelyaba`,
  isActive: false,
  onCityClick: jest.fn(),
  onCardClick: jest.fn()
};

it(`Click on city title calls callback`, () => {
  const {city, onCityClick, onCardClick, isActive} = mock;
  const clickHandler = jest.fn();

  const cityTab = mount(<City
    city={city}
    isActive={isActive}
    onCityClick={clickHandler}
    onCardClick={onCardClick}
  />);


  const tab = cityTab.find(`.locations__item-link`);
  tab.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
