import React from "react";
import PropTypes from "prop-types";

import HotelsPage from "../hotels-page/hotels-page.jsx";
import reducer from "../../reducer.js";

const App = (props) => {
  const {hotels, cities, leaflet, mapData} = props;

  return <HotelsPage
    hotels={hotels}
    cities={cities}
    leaflet={leaflet}
    mapData={mapData}
  />;
};

App.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number)
  })).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaflet: PropTypes.object.isRequired,
  mapData: PropTypes.shape({
    city: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
    isZoomControl: PropTypes.bool,
    isMarker: PropTypes.bool,
    iconUrl: PropTypes.string,
    iconSize: PropTypes.arrayOf(PropTypes.number)
  }).isRequired
};

export default App;
