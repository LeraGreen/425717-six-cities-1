import {createStore} from 'redux';
import leaflet from "leaflet";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import {hotels, cities} from "./mocks/hotels.js";
import mapData from "./mocks/map-data.js";
import {reducer} from "./reducer.js";


const init = () => {
  const store = createStore(reducer);
  console.log(store.getState());
  store.dispatch(
    {
      type: `CHANGE_ACTIVE_CITY`,
      payload: `Житомир`
    }
  );
  console.log(store.getState());

  ReactDOM.render(
      <App 
        hotels={hotels}
        cities={cities}
        leaflet={leaflet}
        mapData={mapData}
      />,
      document.getElementById(`root`)
  );
};

init();

