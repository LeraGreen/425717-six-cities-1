import React, {Component} from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

const mock = {
  hotels: [
    {
      description: `Beautiful & luxurious apartment at great location`,
      price: 120,
      type: `Apartment`,
      rating: 20,
      photo: `img/apartment-01.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198]
    },
    {
      description: `Wood and stone place`,
      price: 200,
      type: `Private Room`,
      rating: 10,
      photo: `img/apartment-02.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198]
    },
    {
      description: `Canal View Prinsengracht`,
      price: 80,
      type: `Private Room`,
      rating: 0,
      photo: `img/apartment-03.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198]
    }
  ],
  mapData: {
    city: [52.38333, 4.9],
    zoom: 10,
    isZoomControl: false,
    isMarker: true,
    iconUrl: `img/pin.svg`,
    iconSize: [20, 20]
  },
  leaflet: {
    map() {
      return {
        setView: jest.fn(),
      };
    },
    icon() {
      jest.fn();
    },
    tileLayer() {
      return {
        addTo: jest.fn(),
      };
    },
    marker() {
      return {
        addTo: jest.fn(),
      };
    }
  }
};

it(`App renders correctly`, () => {
  const {hotels, mapData, leaflet} = mock;
  const tree = renderer
    .create(<App 
      hotels={hotels}
      mapData={mapData}
      leaflet={leaflet}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
