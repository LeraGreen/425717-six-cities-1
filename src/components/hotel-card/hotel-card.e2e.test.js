import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HotelCard from "./hotel-card.jsx";

configure({adapter: new Adapter()});

const mock = {
  hotel: {
    city: `Paris`,
    description: `Some cool place`,
    price: 120,
    type: `Apartment`,
    rating: 70,
    photo: `img/apartment-01.jpg`,
    coordinates: [52.369553943508, 4.85309666406198]
  }
};

it(`Click on card's title calls callback`, () => {
  const {hotel} = mock;
  const clickHandler = jest.fn();

  const card = mount(<HotelCard
    hotel={hotel}
    index={0}
    key={0}
    onCardClick={clickHandler}
  />);


  const title = card.find(`.place-card__name`);
  title.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
