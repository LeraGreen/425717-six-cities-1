import leaflet from "leaflet";
import PropTypes from 'prop-types';
import React, {PureComponent} from "react";

const withLeaflet = (Component) => {
  return class WithLeaflet extends React.PureComponent {
    constructor(props) {
      super(props);
      console.log(props);

    }

    render() {
      return <Component 
        {...this.props}
      />
    }
  }
}

export default withLeaflet;