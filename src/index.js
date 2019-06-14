import {createStore} from 'redux';
import leaflet from "leaflet";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {ConnectedApp} from "./components/app/app.jsx";
import {hotels, cities} from "./mocks/hotels.js";
import mapData from "./mocks/map-data.js";
import {reducer} from "./reducer.js";


const init = () => {
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <ConnectedApp 
          hotels={hotels}
          cities={cities}
          leaflet={leaflet}
          mapData={mapData}
        />
      </Provider>,
      document.getElementById(`root`)
  );
};

init();