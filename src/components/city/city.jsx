import React from "react";
import PropTypes from "prop-types";

const City = (props) => {
  const {city, onCityClick, onCardClick, isActive} = props;

  return <li className="locations__item">
    <a className={`locations__item-link tabs__item ${isActive? `tabs__item--active` : ``}`} href="#" onClick={(evt) => {
      evt.preventDefault();
      onCityClick(city);
      onCardClick(-1);
    }}>
      <span>{city}</span>
    </a>
  </li>
}

City.propTypes = {
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};



export default City;