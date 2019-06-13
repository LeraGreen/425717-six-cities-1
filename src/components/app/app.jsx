import {connect} from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import {changeCity, changeCard} from "../../reducer.js";
import HotelsPage from "../hotels-page/hotels-page.jsx";

const App = (props) => {
  const {hotels, cities, leaflet, mapData, activeCity, onCityChange, onCardActivate} = props;

  return <HotelsPage
    hotels={hotels}
    cities={cities}
    leaflet={leaflet}
    mapData={mapData}
    activeCity={activeCity}
    onCityChange={onCityChange}
    onCardActivate={onCardActivate}
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
  cities: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.oneOf([`Dusseldorf`, `Hamburg`, `Amsterdam`, `Brussels`, `Cologne`, `Paris`]).isRequired,
    location: PropTypes.shape({
      coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired
  })).isRequired,
  leaflet: PropTypes.object.isRequired,
  mapData: PropTypes.shape({
    isZoomControl: PropTypes.bool.isRequired,
    isMarker: PropTypes.bool.isRequired,
    iconUrl: PropTypes.string.isRequired,
    iconSize: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  activeCity: PropTypes.oneOf([`Dusseldorf`, `Hamburg`, `Amsterdam`, `Brussels`, `Cologne`, `Paris`]).isRequired,
  onCityChange: PropTypes.func.isRequired,
  onCardActivate: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    activeCity: state.activeCity,
    activeCard: state.activeCard
  });

const mapDispatchToProps = (dispatch) => ({
    onCardActivate: (index) => {
      dispatch(changeCard(index));
    },
    onCityChange: (name) => {
      dispatch(changeCity(name));
      dispatch(changeCard(-1));
    }
  });

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
export {ConnectedApp, mapStateToProps, mapDispatchToProps};
