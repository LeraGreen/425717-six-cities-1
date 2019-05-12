import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HotelCard from "../hotel-card/hotel-card.jsx";
import HotelsPage from "./hotels-page.jsx";
import hotels from "../../mocks/hotels.js";

configure({adapter: new Adapter()});

it(`Click on card's update active card's index in state`, () => {

  const hotelsPage = mount(<HotelsPage hotels={hotels} />);

  expect(hotelsPage.state(`activeCard`)).toEqual(-1);
  const title = hotelsPage.find(`.place-card__name`).at(2);
  title.simulate(`click`);
  expect(hotelsPage.state(`activeCard`)).toEqual(2);
});

it(`Click on card's update active card's index in state`, () => {

  const hotelsPage = mount(<HotelsPage hotels={hotels} />);

  expect(hotelsPage.state(`activeCard`)).toEqual(-1);
  const title = hotelsPage.find(`.place-card__name`).at(2);
  title.simulate(`click`);
  expect(hotelsPage.state(`activeCard`)).toEqual(2);
});