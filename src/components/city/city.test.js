import React from "react";
import renderer from "react-test-renderer";

import City from "./city.jsx";

const mock = {
  city: `Chelyaba`,
  isActive: true,
  onCityClick: jest.fn(),
  onCardClick: jest.fn()
};

it(`App is rendered correctly`, () => {
  const {city, onCityClick, onCardClick, isActive} = mock;
  const tree = renderer
    .create(<City 
      city={city}
      isActive={isActive}
      onCityClick={onCityClick}
      onCardClick={onCardClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
