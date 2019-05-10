import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const mock = {
  hotels: [
    {
      description: `Beautiful & luxurious apartment at great location`,
      price: 120,
      type: `Apartment`,
      rating: 20,
      photo: `img/apartment-01.jpg`
    },
    {
      description: `Wood and stone place`,
      price: 200,
      type: `Private Room`,
      rating: 10,
      photo: `img/apartment-02.jpg`
    },
    {
      description: `Canal View Prinsengracht`,
      price: 80,
      type: `Private Room`,
      rating: 0,
      photo: `img/apartment-03.jpg`
    }
  ]
};

it(`App renders correctly`, () => {
  const hotels = mock.hotels;
  const tree = renderer
    .create(<App hotels={hotels} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
