import leaflet from "leaflet";
import PropTypes from 'prop-types';
import React from "react";

const withLeaflet = (Component) => {
  return class WithLeaflet extends React.PureComponent {
    constructor(props) {
      super(props);
      this.map = null;
      this.leaflet = leaflet;
      this._pinLayers = [];
      this._initialize = this._initialize.bind(this);
    }

    render() {
      return <Component initialize={this._initialize} {...this.props} />;
    }

    _initialize() {
      const {hotels, mapData, city} = this.props;

      this.map = this.leaflet.map(`map`, {
        center: city.location.coordinates,
        zoom: city.location.zoom,
        zoomControl: mapData.isZoomControl,
        marker: mapData.isMarker
      });
      this.map.setView(city.location.coordinates, city.location.zoom);

      this.leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);
      
      if (this._pinLayers.length) {
        this._clearPins();
      }
      this._addPins(hotels, mapData.iconUrl, mapData.iconSize);
    }

    _addPins(hotels, pinUrl, pinSize) {
      const icon = this.leaflet.icon({
        iconUrl: pinUrl,
        iconSize: pinSize
      });
  
      this._pinLayers = hotels.map((hotel) => {
        return this.leaflet
          .marker(hotel[`coordinates`], {icon})
          .addTo(this.map);
      });
    }
  
    _clearPins() {
      this._pinLayers.forEach((item) => {
        this.map.removeLayer(item);
      });
    }
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
  }).isRequired
};

export default withLeaflet;