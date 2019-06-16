import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <section className="cities__map">
      <div id="map" style={{height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    this.props.initialize();
  }
}

Map.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  })).isRequired,
  mapData: PropTypes.shape({
    isZoomControl: PropTypes.bool.isRequired,
    isMarker: PropTypes.bool.isRequired,
    iconUrl: PropTypes.string.isRequired,
    iconSize: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  city: PropTypes.shape({
    city: PropTypes.oneOf([`Dusseldorf`, `Hamburg`, `Amsterdam`, `Brussels`, `Cologne`, `Paris`]).isRequired,
    location: PropTypes.shape({
      coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  initialize: PropTypes.func.isRequired
};

export default Map;
