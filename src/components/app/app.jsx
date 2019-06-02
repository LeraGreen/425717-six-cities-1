import {connect} from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import {changeCity} from "../../reducer.js";
import HotelsPage from "../hotels-page/hotels-page.jsx";

const App = (props) => { 
  const {hotels, cities, leaflet, mapData, activeCity, onClick} = props;

  return <HotelsPage
    hotels={hotels}
    cities={cities}
    leaflet={leaflet}
    mapData={mapData}
    activeCity={activeCity}
    onClick={onClick}
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

const mapStateToProps = (state, ownProps) => {
  return Object.assign({} ,ownProps, {
    activeCity: state.activeCity
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (name) => {
      dispatch(changeCity(name))
    }
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
export {ConnectedApp};
