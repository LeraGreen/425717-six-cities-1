import React from "react";
import renderer from "react-test-renderer";

import Map from "./map.jsx";

const mock = {
  hotels: [
    {
      description: `Beautiful & luxurious apartment at great location`,
      price: 120,
      type: `Apartment`,
      rating: 93,
      photo: `img/apartment-01.jpg`
    },
    {
      description: `Wood and stone place`,
      price: 200,
      type: `Private Room`,
      rating: 80,
      photo: `img/apartment-02.jpg`
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

it(`Map renders correctly`, () => {
  const {hotels, leaflet, mapData} = mock;

  const tree = renderer
    .create(<Map 
      hotels={hotels}
      leaflet={leaflet}
      mapData={mapData}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});