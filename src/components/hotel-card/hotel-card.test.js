import React from "react";
import HotelCard from "./hotel-card.jsx";
import renderer from "react-test-renderer";

const mock = {
  hotel: {
    description: `Beautiful & luxurious apartment at great location`,
    price: 120,
    type: `Apartment`,
    rating: 93,
    photo: `img/apartment-01.jpg`
  }
};

it(`Hotel renders correctly`, () => {
  const hotel = mock.hotel;
  const tree = renderer
    .create(<HotelCard key={0} hotel={hotel} />)
    .toJSON();

  expect(tree)
    .toMatchSnapshot();
});
