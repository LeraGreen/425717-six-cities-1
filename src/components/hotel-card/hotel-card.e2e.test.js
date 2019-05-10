import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HotelCard from "./hotel-card.jsx";

configure({adapter: new Adapter()});

const mock = {
  hotel: {
    description: `Some cool place`,
    price: 120,
    type: `Apartment`,
    rating: 70,
    photo: `img/apartment-01.jpg`
  }
};

it(`On click on title of card call callback`, () => {
  const hotel = mock.hotel;
  const clickHandler = jest.fn();

  const card = mount(<HotelCard
    hotel={hotel}
    onClick = {clickHandler}
  />);


  const title = card.find(`.place-card__name`);
  expect(clickHandler).toHaveBeenCalledTimes(0);
  title.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
