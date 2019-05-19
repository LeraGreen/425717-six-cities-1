import React from "react";
import PropTypes from "prop-types";

import HotelsPage from "../hotels-page/hotels-page.jsx";

const App = (props) => {
  const {hotels, leaflet, mapData} = props;

  return <HotelsPage
    hotels={hotels}
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
