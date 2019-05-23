import leaflet from "leaflet";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import hotels from "./mocks/hotels.js";
import mapData from "./mocks/map-data.js";


const init = () => {

  ReactDOM.render(
      <App 
        hotels={hotels}
        leaflet={leaflet}
        mapData={mapData}
      />,
      document.getElementById(`root`)
  );
};

init();

