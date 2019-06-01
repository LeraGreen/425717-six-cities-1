import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import HotelsPage from "../hotels-page/hotels-page.jsx";
import reducer from "../../reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCity: props.store.getState().activeCity
    };

    props.store.subscribe(() => {
      this.setState({
        activeCity: props.store.getState().activeCity
      });
    });

    this._onClick = this._onClick.bind(this);
  }

  _onClick(name) {
    this.props.store.dispatch(
      {
        type: `CHANGE_ACTIVE_CITY`,
        payload: name
      }
    );
  }

  render () {
    const {hotels, cities, leaflet, mapData, store} = this.props;

    return <HotelsPage
      hotels={hotels}
      cities={cities}
      leaflet={leaflet}
      mapData={mapData}
      activeCity={this.state.activeCity}
      onClick={this._onClick}
    />;
  }
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
