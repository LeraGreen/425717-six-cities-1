import React from "react";
import renderer from "react-test-renderer";

import HotelCard from "./hotel-card.jsx";

const mock = {
  hotel: {
    description: `Beautiful & luxurious apartment at great location`,
    price: 120,
    type: `Apartment`,
    rating: 70,
    photo: `img/apartment-01.jpg`,
    coordinates: [52.369553943508, 4.85309666406198]
  }
};

it(`Hotel renders correctly`, () => {
  const {hotel} = mock;
  const tree = renderer
    .create(<HotelCard key={0} hotel={hotel} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
