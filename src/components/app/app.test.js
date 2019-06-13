import React from "react";
import renderer from "react-test-renderer";

import App, {mapStateToProps, mapDispatchToProps} from "./app.jsx";

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
      city: `Amsterdam`,
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
  activeCity: `Dusseldorf`,
  onCityChange: jest.fn(),
  onCardActivate: jest.fn()
};

it(`App renders correctly`, () => {
  const {hotels, cities, leaflet, mapData, activeCity, onCityChange, onCardActivate} = mock;
  const tree = renderer
    .create(<App 
      hotels={hotels}
      cities={cities}
      leaflet={leaflet}
      mapData={mapData}
      activeCity={activeCity}
      onCityChange={onCityChange}
      onCardActivate={onCardActivate}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`mapStateToProps updates state correctly`, () => {
  const updatedState = mapStateToProps(
    {
      activeCard: 12,
      activeCity: `Cologne`
    },
    {
      activeCard: -1,
      activeCity: `Paris`
    });

  expect(updatedState).toEqual({
    activeCard: 12,
    activeCity: `Cologne`
  })
});
