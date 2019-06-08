import React from "react";
import renderer from "react-test-renderer";

import Map from "./map.jsx";

const mock = {
  hotels: [
    { 
      city: `Paris`,
      description: `Beautiful & luxurious apartment at great location`,
      price: 120,
      type: `Apartment`,
      rating: 20,
      photo: `img/apartment-01.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198]
    },
    {
      city: `Amster`,
      description: `Wood and stone place`,
      price: 200,
      type: `Private Room`,
      rating: 10,
      photo: `img/apartment-02.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198]
    },
    {
      city: `Vienna`,
      description: `Canal View Prinsengracht`,
      price: 80,
      type: `Private Room`,
      rating: 0,
      photo: `img/apartment-03.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198]
    }
  ],
  mapData: {
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
  },
  city: {
    city: `Paris`,
    location: {
      coordinates: [48.864716, 2.349014],
      zoom: 10
    }
  }
};

it(`Map renders correctly`, () => {
  const {hotels, leaflet, mapData, city} = mock;

  const tree = renderer
    .create(<Map 
      hotels={hotels}
      city={city}
      leaflet={leaflet}
      mapData={mapData}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});