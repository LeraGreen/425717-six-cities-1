import React from "react";
import PropTypes from "prop-types";

const HotelCard = (props) => {
  const {hotel, onClick, index} = props;

  return <article className="cities__place-card place-card">
    <div className="place-card__mark">
      <span></span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={hotel.photo} width="260" height="200" alt="Place image"></img>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{hotel.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${hotel.rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name" onClick={(evt) => {
        if (onClick && index !== undefined) {
          evt.preventDefault();
          onClick(index);
        }
      }}>
        <a href="#">{hotel.description}</a>
      </h2>
      <p className="place-card__type">{hotel.type}</p>
    </div>
  </article>;
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  onClick: PropTypes.func,
  index: PropTypes.number
};

export default HotelCard;
