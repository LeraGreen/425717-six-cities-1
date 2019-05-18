import React from "react";
import PropTypes from "prop-types";

import HotelsPage from "../hotels-page/hotels-page.jsx";

const App = (props) => {
  const {hotels} = props;

  return <HotelsPage hotels={hotels} />;
};

App.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number)
  })).isRequired
};

export default App;
