import {connect} from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import {changeCity, changeCard} from "../../reducer.js";
import HotelsPage from "../hotels-page/hotels-page.jsx";

const App = (props) => { 
  const {hotels, cities, leaflet, mapData, activeCity, onCityClick, onCardClick} = props;

  return <HotelsPage
    hotels={hotels}
    cities={cities}
    leaflet={leaflet}
    mapData={mapData}
    activeCity={activeCity}
    onCityClick={onCityClick}
    onCardClick={onCardClick}
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
    city: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }).isRequired
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

const mapStateToProps = (state, ownProps) => {
  return Object.assign({} ,ownProps, {
    activeCity: state.activeCity,
    activeCard: state.activeCard
  });
};

// TODO менять activeCard на -1 каждый раз когда открывается новый город 
// TODO Не забудьте, что все отрисованные предложения соответствующие отбору, также должны быть отрисованы на карте в виде пинов

const mapDispatchToProps = (dispatch) => {
  return {
    onCityClick: (name) => {
      dispatch(changeCity(name))
    },
    onCardClick: (index) => {
      dispatch(changeCard(index))
    }
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
export {ConnectedApp};
