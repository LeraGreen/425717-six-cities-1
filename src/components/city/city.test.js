import React from "react";
import renderer from "react-test-renderer";

import City from "./city.jsx";

const mock = {
  city: `Paris`,
  isActive: true,
  onCityChange: jest.fn(),
  onCardActivate: jest.fn()
};

it(`App is rendered correctly`, () => {
  const {city, onCityChange, onCardActivate, isActive} = mock;
  const tree = renderer
    .create(<City 
      city={city}
      isActive={isActive}
      onCityChange={onCityChange}
      onCardActivate={onCardActivate}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
