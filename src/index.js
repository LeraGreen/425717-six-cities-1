// import {createStore} from 'redux'
import leaflet from "leaflet";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import {hotels, cities} from "./mocks/hotels.js";
import mapData from "./mocks/map-data.js";


const init = () => {

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

