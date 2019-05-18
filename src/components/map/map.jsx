import {React, PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  render() {
    return <section className="cities__map">
      <div id="map" ref={this.mapRef}></div>
    </section>
  }

  componentDidMount() {
    if (this.mapRef.current) {
      const city = [52.38333, 4.9];
      const zoom = 12;
      const map = leaflet.map(`map`, {
        center: city,
        zoom: zoom,
        zoomControl: false,
        marker: true
      });
      map.setView(city, zoom);

      leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, { 
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      })
      .addTo(map);
    }
  }
}


export default Map;
