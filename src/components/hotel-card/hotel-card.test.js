import React from "react";
import renderer from "react-test-renderer";

import HotelCard from "./hotel-card.jsx";

const mock = {
  hotel: {
    city: `Krizopol`,
    description: `Какая-то хибара`,
    price: 120,
    type: `Apartment`,
    rating: 70,
    photo: `img/apartment-01.jpg`,
    coordinates: [52.369553943508, 4.85309666406198]
  },
  onCardClick: jest.fn()
};

it(`Hotel renders correctly`, () => {
  const {hotel, onCardClick} = mock;
  const tree = renderer
    .create(<HotelCard key={0} hotel={hotel} onCardClick={onCardClick}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
