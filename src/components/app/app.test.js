import React from "react";
import renderer from "react-test-renderer";

import App, {mapStateToProps, mapDispatchToProps} from "./app.jsx";

const mock = {
  hotels: [
    { 
      city: `Paris`,
      description: `Beautiful & luxurious apartment at great location in Paris`,
      price: 120,
      type: `Apartment`,
      rating: 20,
      photo: `img/apartment-01.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198]
    },
    {
      city: `Amsterdam`,
      description: `Wood and stone place in Amsterdam`,
      price: 200,
      type: `Private Room`,
      rating: 10,
      photo: `img/apartment-02.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198]
    },
    {
      city: `Dusseldorf`,
      description: `Canal View Prinsengracht in Dusseldorf`,
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
  onCardActivate: jest.fn(),
  activeCityData: {
    city: `Dusseldorf`,
    location: {
      coordinates: [51.22172, 6.77616],
      zoom: 10
    }
  }
};

it(`App renders correctly`, () => {
  const activeHotels = [
    {
      city: `Dusseldorf`,
      description: `Canal View Prinsengracht in Dusseldorf`,
      price: 80,
      type: `Private Room`,
      rating: 0,
      photo: `img/apartment-03.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198]
    },
    {
      city: `Dusseldorf`,
      description: `Hostel in Dusseldorf`,
      price: 80,
      type: `Hostel`,
      rating: 0,
      photo: `img/apartment-20.jpg`,
      coordinates: [52.334664564943508, 4.929309666406198]
    }
  ];
  const {cities, leaflet, mapData, activeCity, onCityChange, onCardActivate, activeCityData} = mock;
  const tree = renderer
    .create(<App 
      hotels={activeHotels}
      cities={cities}
      leaflet={leaflet}
      mapData={mapData}
      activeCity={activeCity}
      onCityChange={onCityChange}
      onCardActivate={onCardActivate}
      activeCityData={activeCityData}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`mapStateToProps updates state correctly`, () => {
  const updatedState = mapStateToProps({
      activeCard: 12,
      activeCity: `Cologne`
    },
    {
      hotels: mock.hotels,
      cities: mock.cities,
      mapData: mock.mapData,
      cities: mock.cities
    });

  expect(updatedState).toEqual({
    activeCard: 12,
    activeCity: `Cologne`,
    hotels: [],
    activeCityData: {
      city: `Cologne`,
      location: {
        coordinates: [50.941357, 6.958307],
        zoom: 10
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
    mapData: {
      isZoomControl: false,
      isMarker: true,
      iconUrl: `img/pin.svg`,
      iconSize: [20, 20]
    }
  })
});

describe(`mapDispatchToProps works correctly`, () => {
  it(`Call of onCardActivate returns right action`, () => {
    const dispatch = jest.fn();
    const index = 1;
  
    mapDispatchToProps(dispatch).onCardActivate(index);
    expect(dispatch.mock.calls[0][0]).toEqual({"payload": 1, "type": "CHANGE_ACTIVE_CARD"});
  });

  it(`Call of onCityChange returns right action`, () => {
    const dispatch = jest.fn();
    const city = `Paris`;
  
    mapDispatchToProps(dispatch).onCityChange(city);
    expect(dispatch.mock.calls[0][0]).toEqual({"payload": "Paris", "type": "CHANGE_ACTIVE_CITY"});
    expect(dispatch.mock.calls[1][0]).toEqual({"payload": -1,"type": "CHANGE_ACTIVE_CARD"});
  });
})
