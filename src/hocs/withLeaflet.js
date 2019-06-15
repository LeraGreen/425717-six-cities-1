import leaflet from "leaflet";
import PropTypes from 'prop-types';
import React, {PureComponent} from "react";

const withLeaflet = (Component) => {
  return class WithLeaflet extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        data: `Лерун`
      }

    }

    render() {
      return <Component data={this.state.data} {...this.props} />;
    }
  }
}

export default withLeaflet;