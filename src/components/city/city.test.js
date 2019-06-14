import React from "react";
import renderer from "react-test-renderer";

import City from "./city.jsx";


it(`App is rendered correctly with active city`, () => {
  const tree = renderer
    .create(<City 
      city={`Paris`}
      isActive={true}
      onCityChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`App is rendered correctly with inactive city`, () => {
  const tree = renderer
    .create(<City 
      city={`Cologne`}
      isActive={false}
      onCityChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
