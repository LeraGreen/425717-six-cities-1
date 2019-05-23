import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.leaflet = null;
  }

  render() {
    return <section className="cities__map">
      <div id="map" style={{height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    const {hotels, mapData} = this.props;
    this.leaflet = this.props.leaflet;

    this.map = this.leaflet.map(`map`, {
      center: mapData.city,
      zoom: mapData.zoom,
      zoomControl: mapData.isZoomControl,
      marker: mapData.isMarker
    });
    this.map.setView(mapData.city, mapData.zoom);

    this.leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this._addPins(hotels, mapData.iconUrl, mapData.iconSize);
  }

  _addPins(hotels, pinUrl, pinSize) {
    const icon = this.leaflet.icon({
      iconUrl: pinUrl,
      iconSize: pinSize
    });

    for (let hotel of hotels) {
      this.leaflet
        .marker(hotel[`coordinates`], {icon})
        .addTo(this.map);
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
  leaflet: PropTypes.object.isRequired,
  mapData: PropTypes.shape({
    city: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
    isZoomControl: PropTypes.bool.isRequired,
    isMarker: PropTypes.bool.isRequired,
    iconUrl: PropTypes.string.isRequired,
    iconSize: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
};

export default Map;
