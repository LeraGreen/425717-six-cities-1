import React from "react";
import renderer from "react-test-renderer";

import HotelsPage from "./hotels-page.jsx";

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
      city: `Paris`,
      description: `Wood and stone place`,
      price: 200,
      type: `Private Room`,
      rating: 10,
      photo: `img/apartment-02.jpg`,
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
  cities: [
    {
      city: `Paris`,
      location: {
        coordinates: [48.864716, 2.349014],
        zoom: 10
      }
    },
    {
      city: `Cologne`,
      location: {
        coordinates: [50.941357, 6.958307],
        zoom: 10
      }
    },
    {
      city: `Brussels`,
      location: {
        coordinates: [50.85045, 4.34878],
        zoom: 10
      }
    },
    {
      city: `Amsterdam`,
      location: {
        coordinates: [52.37403, 4.88969],
        zoom: 10
      }
    },
    {
      city: `Hamburg`,
      location: {
        coordinates: [53.551086, 9.993682],
        zoom: 10
      }
    },
    {
      city: `Dusseldorf`,
      location: {
        coordinates: [51.22172, 6.77616],
        zoom: 10
      }
    }
  ],
  activeCity: `Paris`,
  onCityChange: jest.fn(),
  onCardActivate: jest.fn(),
  city: {
    city: `Paris`,
    location: {
      coordinates: [48.864716, 2.349014],
      zoom: 10
    }
  }
};

it(`Hotels page renders correctly`, () => {
  const {hotels, cities, leaflet, mapData, activeCity, onCardActivate, onCityChange, city} = mock;

  const tree = renderer
    .create(<HotelsPage 
      hotels={hotels}
      cities={cities}
      activeCity={activeCity}
      mapData={mapData}
      leaflet={leaflet}
      onCardActivate={onCardActivate}
      onCityChange={onCityChange}
      city={city}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

