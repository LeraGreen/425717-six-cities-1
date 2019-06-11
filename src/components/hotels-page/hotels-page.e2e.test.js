import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HotelsPage from "./hotels-page.jsx";
import {hotels, cities} from "../../mocks/hotels.js";
import leaflet from "../../mocks/leaflet.js";
import mapData from "../../mocks/map-data.js";

configure({adapter: new Adapter()});

// it(`Click on card's update active card's index in state`, () => {

//   const hotelsPage = mount(<HotelsPage 
//     hotels={hotels}
//     cities={cities}
//     leaflet={leaflet}
//     mapData={mapData}
//   />);

//   expect(hotelsPage.state(`activeCard`)).toEqual(-1);
//   const title = hotelsPage.find(`.place-card__name`).at(2);
//   title.simulate(`click`);
//   expect(hotelsPage.state(`activeCard`)).toEqual(2);
// });

// it(`Click on card's update active card's index in state`, () => {

//   const hotelsPage = mount(<HotelsPage
//     hotels={hotels}
//     cities={cities}
//     leaflet={leaflet}
//     mapData={mapData}
//   />);

//   expect(hotelsPage.state(`activeCard`)).toEqual(-1);
//   const title = hotelsPage.find(`.place-card__name`).at(2);
//   title.simulate(`click`);
//   expect(hotelsPage.state(`activeCard`)).toEqual(2);
// });
